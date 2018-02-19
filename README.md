# WineUp
How good is your wine?

## Inspiration
One of our team members is currently enrolled in a machine learning class, and he's been learning about custom clustering techniques to increase system accuracy. We're eager to learn more and delve deeper into machine learning, so we were eager to work on WineUp, a fun project which builds off ideas in the literature.

## What it does
Profile your wine and submit it on our website, and our ML-trained model will rate it out of 5 based on a dataset of 5000 wines rated on 12 different metrics - fixed acidity, volatile acidity, citric acid, residual sugar, chlorides, free sulfur dioxide, total sulfur dioxide, density, pH, sulphate level, and alcohol percentage.

## How I built it
We used node.js to build out our backend. Our machine learning model was trained with a custom Python script that we spent the majority of our time developing. Our front end was built with a custom HTML & CSS theme developed by one of our team members.

## Accomplishments that I'm proud of
I wrote the machine learning script for the project, training a support vector machine with linear kernel for multi-class classification on a dataset of 5000+ wines with 10+ predictors each. We were able to achieve very high accuracy!

## What we learned
We all learned a lot more about machine learning models and techniques!

## What's next for WineUp
We worked on adding in integrations to global wine databases so users could query for their favorite wine and see how well it stacks up to the competition. We also plan to add additional datasets to be able to dynamically identify what wines pair best with user-queried foods.
