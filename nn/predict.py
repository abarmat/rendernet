#!/usr/bin/env python

"""Perform a single prediction using a model and image file"""

import os
import sys
import numpy as np

from PIL import Image
from numpy import array

from keras.models import load_model

def load_image(filename):
    img = Image.open(filename)
    data = np.asarray(img, dtype=np.float) / 255
    return np.reshape(data, (1, 200, 200, 3))

def main():
    model_filename = sys.argv[1]
    image_filename = sys.argv[2]

    model = load_model(model_filename)
    image = load_image(image_filename)
    res = model.predict(image)
    print(res)

if __name__ == '__main__':
    main()
