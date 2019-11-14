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
    * Event Location (work in progress)
    * Organization running the event (work in progress)
    * Experience/skills needed to volunteer (work in progress)
    

Users (Companies or individual volunteers) can:
* use a chat system:
  * Creating a group of one or more users.
  * Able to add more users as the chat progresses if the user desires to.
* log in/sign up
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

### Instructions for the features mentioned above:
#### The side bar contains the following options:
* Home:
  * The first page you see when opening the website.
  * Currently it is just a shortcut to other pages in the sidebar.
* Chat:
  * The user must be currently logged in to use it.
  * Users can view their existing conversations in a list on the left.
  * Users can create new conversations by typing a new conversation name at the top.
  * Users can add more members to a conversation using the button on the right (Need to know the other member’s username)
* Browse:
  * The user does not need to be logged in to use it.
  * By typing into the two search bars at the top users can filter the events by skill and by name.
  * Please note that none of the existing events in the database have any skill values, so typing anything will return no events.
* Import:
  * This page is incomplete and is meant in the future to allow users to import user information in the form of excel files and create user profiles immediately.
  * Currently you can only upload excel files to view them.
* Add Event:
  * This page allows users to create a new event that can then be seen in the list of events in the browsing page.
* API:
  * Currently for debugging purposes. You can quickly log in/create an account from here.
* Quick Login:
  * Currently for debugging purposes. You can quickly log in without creating an account here and see the existing chats.

#### The upper right corner contains a link to the proper login page.

* On the login page users can first select “Create Your Account”, and be brought to a separate page to fill in their information.
* Once logged in users can:
  * Use the chat
  * Logout using the upper right button.
  * View their profile by selecting the upper right grey circle.
    * This just displays their username and fake information at the moment.
  * View their notifications selecting the bell button.
    * This just displays mock data at the moment.


