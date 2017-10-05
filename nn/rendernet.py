#!/usr/bin/env python

"""CNN to perform a binary classification: Is it a rendered image or a real one?"""

import os
import sys
import numpy as np

from PIL import Image
from numpy import array

from keras.models import Sequential
from keras.layers import Activation, Dropout, Flatten, Dense, Conv2D, MaxPooling2D
from keras.preprocessing.image import ImageDataGenerator
from keras.utils import np_utils
from sklearn.model_selection import train_test_split

## Some model and data processing constants
 
batch_size = 512
n_classes = 2
n_epoch = 64
 
# input image dimensions
target_size = (200, 200)
img_rows, img_cols = target_size
 
# number of convolutional filters to use
nb_filters = 32
# size of pooling area for max pooling
nb_pool = 2
# convolution kernel size
nb_conv = 4


def cnn():
    model = Sequential()
     
    model.add(
        Conv2D(nb_filters, nb_conv, 
            strides=(nb_conv, nb_conv), 
            input_shape=(img_rows, img_cols, 3),
            data_format='channels_last'
        )
    )
    model.add(Activation('relu'))
    model.add(Conv2D(nb_filters, nb_conv, strides=(nb_conv, nb_conv)))
    model.add(Activation('relu'))
    model.add(MaxPooling2D(pool_size=(nb_pool, nb_pool)))
    model.add(Dropout(0.25))
     
    model.add(Flatten())
    model.add(Dense(128))
    model.add(Activation('relu'))
    model.add(Dropout(0.5))
    model.add(Dense(n_classes))
    model.add(Activation('softmax'))
     
    model.compile(loss='categorical_crossentropy',
                  optimizer='adadelta',
                  metrics=['accuracy'])
    return model

def main():
    print('Loading data...')

    tr_dg = ImageDataGenerator(
        rescale=1./255,
        shear_range=0.2,
        zoom_range=0.2,
        horizontal_flip=True
    )
    tr_gen = tr_dg.flow_from_directory(
        'data/tr',
        target_size=target_size,
        batch_size=batch_size,
        class_mode='categorical',
        color_mode='rgb',
        shuffle=True
    ) 
    
    cv_dg = ImageDataGenerator(rescale=1./255)
    cv_gen = cv_dg.flow_from_directory(
        'data/cv',
        target_size=target_size,
        batch_size=batch_size,
        class_mode='categorical',
        color_mode='rgb'
    )

    model = cnn()
    model.compile(loss='categorical_crossentropy',
                  optimizer='adadelta',
                  metrics=['accuracy'])
    model.fit_generator(
        tr_gen,
        epochs=n_epoch, 
        steps_per_epoch=50000/batch_size,
        validation_data=cv_gen,
        validation_steps=50000/batch_size,
        workers=4,
        verbose=1
    )
    model.save('base_rendernet.h5')

if __name__ == '__main__':
    main()
