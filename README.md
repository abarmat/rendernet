# rendernet
An experimental Neural Network to classify whether an image is a render or not.

The project is currently running on https://rendernet.abarmat.com

## Goal

You can read more about the goal of this experiment on https://medium.com/@abarmat/an-experiment-about-portable-intelligence-e52cd89e9f1b

## Description

* The **client** directory holds the Next.js app that performs inference on the browser with the exported model.

* The **nn** directory is the model used for learning from the dataset.

* The **utils** directory has some tools used for pre-processing the original data into something suitable for training.

## Data

The data used for training the model was provided by Properati.

https://www.properati.com.ar/data
