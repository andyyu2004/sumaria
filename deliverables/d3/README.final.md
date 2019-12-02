# Sumaria

## Description

* Provide a high-level description of your application and it's value from an end-user's perspective
  * Our application is a website that helps volunteering organizations (non-profits) manage and broadcast their events, and help volunteers find the best event that best suits their skills as well as availabilities.
* What is the problem you're trying to solve?
  * There is currently no management system (at least not well-known) that is (solely) designed and dedicated for volunteers and volunteering activities and this is the problem we want to solve.
* Is there any context required to understand why the application solves this problem?
  * At the moment, non-profit organizations mainly use 2 different customer relationship management systems (CRM), namely Excel and Blackbaud CRM.
  * Excel requires lots of manual work, the amount of work is at least linearly scaled with the number of volunteers or applicants, which is very inefficient and time consuming. Blackbaud CRM charges a licensing fee that is hard for non-profit organizations to justify paying for and it is not oriented for managing volunteers and volunteering events.
  * The completed application will be much more efficient than plain excel and is dedicated to manage large number of volunteer and volunteer events.

## Key Features

Users (Organizations or individual volunteers) can:

* View the latest event postings on the home page and links to frequently accessed pages
* Create, register for, and browse through the list of available events.
  * Event details include
    * Event Date Range
    * Number of volunteers needed
    * Event Location
    * Organization running the event
    * Experience/skills needed to volunteer
    * Description of the event
  * Events created by you are colored in light blue (on browse event page)
  * After event creation, the user that created the event can add files for other users to download.
* View the details of an event by clicking view details of an event posting, as well as the number of participants and number of people waitlisted
  * Event creator can view the list of participants (Names) with links to their public profiles
  * Event creators can delete events created by them
* View the events they're registered for in a calendar format (after registering for an event)
  * By day, week, month and by an agenda view of events.
  * User can see descriptions of the event by hovering, and view event details by clicking
  * Events are colored differently based on the following categorization: Today, All-Day event, event that spans multiple days, event created by you, and others (e.g. half day or hourly event)
* Use a chat system:
  * Creating a group of one or more users.
  * Able to add more users as the chat progresses if the user desires to.
* Log in/sign up
  * Users can create an account by supplying the following information.
    * Mandatory
      * Username
      * Password
      * First Name, Last Name
      * Email Address
    * Optional
      * Address
      * Prefered name, gender, birth date
      * Phone Number
* View their profile page and their personal information by clicking on their profile picture (In the top right corner)
  * On the profile page they can edit and update their stored user information.
  * By clicking the user icon in the profile, user can switch views between private profile (editable) and public profile (read only)

## Instructions

 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc.
 * Provide clear steps for using each feature described above
 * If you cannot deploy your application for technical reasons, please let your TA know at the beginning of the iteration. You will need to demo the application to your partner either way.

 Users can navigate to the web page http://35.245.128.20 to access the website.
 Through the login/signup button they can create an account by supplying the information noted above.

#### The side bar contains the following options:

* Note the user must be logged in to use any site features.
* Home:
  * The first page you see when opening the website.
  * Through the login/signup button on the upper right corner users can create an account and login.
  * Users can see new events that were posted.
  * As well as navigate to adding and browsing for events.
* Chat:
  * Users can view their existing conversations in a list on the left.
  * Users can create new conversations by typing a new conversation name at the top.
  * Users can add more members to a conversation using the button on the right (Need to know the other member’s username)
* Browse:
  * Events can be filtered by; Skill required, Name, Date, Location
  * Each event contains an details button:
    * Users can view information about the event.
    * Users can register or cancel going to the event.
    * The user who created the event can add files.
* Import:
  * This page is incomplete and is meant in the future to allow users to import user information in the form of excel files and create user profiles immediately.
  * Currently you can only upload excel files to view them.
* Add Event:
  * This page allows users to create a new event that can then be seen in the list of events in the browsing page.
* My Calendar:
  * View events the current user is registered by day, week, month.
  * Or view a list of events the user is registered for using the agenda button.

## Development requirements

* If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
* Briefly describe instructions for setting up and running the application (think a true README).

### Prerequisite to run our app

Install node

### Steps to run our app
 
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

### Technical requirements

* As noted above the libraries would be installed using npm install, there are no OS requirements.

## Licenses

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

* What type of license will you apply to your codebase?
* What affect does it have on the development and use of your codebase?
* Why did you or your partner make this choice?

* We decided to apply an MIT License to the codebase.
  * It is a permissive software license which means that:
    * Other developpers or users are free to relicense the codebase under another name
    * It can be used with other codebases that may have more restrictive licenses (Ones that are proprietary or permissive as well).
    * The only requirement being that a copy of the license terms be included with the codebase.
  * We felt that this licence was appropriate, since currently the project is only an MVP, and our partner has plans for it to continue to develop and grow. This means that it may be integrated with other codebases, and be modified which is what the license allows for. Furthermore our partner would like this project be used for commercial purposes, which the license also permits.
