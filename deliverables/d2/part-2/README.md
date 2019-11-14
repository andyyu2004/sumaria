# Sumaria

## Description 

* Provide a high-level description of your application and it's value from an end-user's perspective
    * Our application is a website that helps volunteering organizations (non-profits) manage and broadcast their events, and help volunteers find the best event that best suits their skills as well as availabilities.
* What is the problem you're trying to solve?
    * There is currently no management system (at least not well-known) that is (solely) designed and dedicated for volunteers and volunteering activities and this is the problem we want to solve.
* Is there any context required to understand why the application solves this problem?
    * At the moment, non-profit organizations mainly use 2 different customer relationship management systems (CRM), namely Excel and Blackbaud CRM.
    * Excel requires lots of manual work, the amount of work is at least linearly scaled with the number of volunteers or applicants, which is very inefficient and time consuming. Blackbaud CRM charges a licensing fee that is hard for non-profit organizations to justify paying for and it is not oriented for managing volunteers and volunteering events.
    * The completed application will be more efficient than excel and is dedicated to manage volunteer and volunteer events.


## Key Features

Companies (non-profit organizations that need volunteers)

* Can create events, and browse through the list of available events, filtering by name and/or skills needed.
  * Event details include
    * Event Date
    * Number of volunteers needed
    * Event Location
    * Organization running the event
    * Experience/skills needed to volunteer
      * This still needs to be fixed to read from the database schema. Currently this field is blank.

* Chat system:
  * Creating a group of one or more users.
  * Able to add more users as the chat progresses if the user desires to.
* Users can log in/sign up
  * Users can also view their profile page and their personal information by clicking on their profile picture (which  is currently just a gray anonymous photo)
    * Currently the profile page only displays the user name and mock data of the possible events they signed up for.

## Instructions

### Prerequisite to run our app:

Install node

### Steps to run our app:
 
1. Open the command console

2. Start the backend by: 
    * navigate to the folder /team-project-sumaria/src/
    * Type in console “npm install” to install dependencies
    * Type in console “node app.js” 
    * Console should return “Listening on port ####”

3. Start the frontend by:
    * Open a new console
    * Navigate to the folder /team-project-sumaria/src/public
    * Type in console “npm install” to install dependencies
    * Type in console “npm start”
    * Our website should open on your internet browser.
