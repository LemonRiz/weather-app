# weather-app

Weather App – Full Stack Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Overview

The project aims to consolidate the topics that have been covered in the course, It will be a big project it will need to be broken down!

This means building:

    A simple Front End in React
        With unit tests
        Mobile-first design
    A simple Back End in Either Node.js or Spring
        With unit tests
        Connected to a MySQL database
    A Containerized/VM development environment using Docker or Vagrant
    A CI / CD pipeline with Jenkins
    A deployed application on AWS

EXT:

    Building AMI with Packer
    IAC with Ansible and Terraform

Brief

You will be building a functioning Weather Checking application with a twist.

Let's focus on the FE and BE first.
Front End & Backend

The main task for the Front End is to create an app that allows a user to enter their location and display the current weather the twist is that if you have the weather for that location stored in your database you will display it. Showing the weather for that location historically.

e.g. A search for Bristol will return the current weather in Bristol but also display the previous results if any for Bristol.

This means building your Back End/API. Its task will be making use of an external API to get the current weather, it will also connect to a MySQL database to store & retrieve historical weather information. Finally sending it all back to the front end. Every time a user receives weather information it should be stored inside a database and displayed the next time a user queries the same location.

Use the following external API -> Weather API )
