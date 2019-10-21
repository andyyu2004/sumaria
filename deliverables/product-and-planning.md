# Sumaria

> _Note:_ This document is meant to evolve throughout the planning phase of your project.    
 > That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section).
 > Most importantly, it is a reflection of all the planning you work you've done in the first iteration. 
 > **This document will serve as an agreement between your team and your partner.**

## Product Details
 
#### Q1: What are you planning to build?

We are planning to build a website that helps volunteering organizations manage and broadcast their events, and volunteers find the best event that best suits their skills.

##### Objectives
* Better display event data of organizations in a user friendly app.
* Streamline the process of matching volunteers to an event. 
* Facilitate the sign up/cancelation process to join an event.
* Enable convenient communication between event organizers and volunteers.

#### Q2: Who are your target users?

Our target users can be separated into two categories:
 * Those who would like to find an event to volunteer in, which includes high school students, university students and the general public.
 * Those who would like to post events in search of volunteers.
   * Note that these users may also be in the first category.

Listed below are personas that describe the motivations of the categories of users defined above.

Link to Xtensio https://csc301persona.xtensio.com/7cl2qj6b

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Organizations would use this product for the larger database of volunteers they would be able to reach compared to competing products and the convenience it brings in contacting volunteers and organizing events. Volunteers would use this product for the ease they will have in joining events. 

Currently, organizations are using:
To manage volunteers:
 * Excel
 * Blackbaud
 * Oracle
 * Google Sheets
 * Salesforce
To find new volunteers:
 * LinkedIn
 * Indeed
 * CharityVillage

Our product would help meet these two needs so organizations will not have to use two separate products to find versus manage volunteers. It will have more features tailored towards these tasks compared to current free solutions many nonprofits are using such as Excel. For example, unlike keeping a spreadsheet of volunteers and their information, our product would allow organizations to easily email groups of volunteers. 

It will also be easier for volunteers to join events: rather than having to get back to the organization by email, phone, navigating to their specific website, etc, they will only have to follow a link in the email sent to them to join an event.

Unlike LinkedIn and Indeed, the product will be geared towards nonprofits and volunteers specifically. Not only that, the product is expected to reach a greater database of volunteers compared to competing products like Blackbaud as organizations will not only be able to access volunteers associated with their own organization but all organizations that are using the product. 


#### Q4: How will you build it?

For the front-end, we will be using react.js to build the user interface and the css framework Bootstrap to assist with styling.
For the back-end, we will be using the express.js web framework on top of node.js, and 
MongoDB + Mongoose ODM for the database.


#### Q5: What are the user stories that make up the MVP?

##### User Story 1:

As a charity event planner, I would like to be able to create events so that I can share information with participants

Acceptance Criteria:
 * Event details can be viewed at any time by invitees or interested parties
 * Details include:
   * Event Date
   * Number of volunteers needed
   * Event Location
   * Organization running the event
   * Experience/skills needed to volunteer
 * Users can apply to volunteer 

##### User Story 2:
As a student looking for experience, I would like to be able to find volunteer opportunities so I can gain relevant skills.

Acceptance Criteria:
 * View open opportunities
 * Filter by date
 * Filter by skills
 * View further details about any individual event
   * Including event organizer, number of volunteers needed

##### User Story 3:
As a volunteer organizer, I would like to be able to add volunteers via an Excel document so I can send out invites faster.

Acceptance Criteria:
 * Allow upload of CSV or XLSX file
 * Pull emails from file
 * Automatically notify volunteers selected

##### User Story 4:
As a first time volunteer, I would like to be able to chat with the event organizers to inquire about positions and duties I would take on so I can decide if this is the event I would like to participate in.

Acceptance Criteria:
 * Message the event organizers/volunteers through an in-app chat service.
 * View a history of messages.
 * Be notified of a new message
   * Through an in-app notification.

##### User Story 5:
As an event planner for a small non-profit that is just starting out, I would like to be able to find and invite volunteers not associated with my non-profit to participate in my charity event.

Acceptance Criteria:
 * Find volunteers not specifically associated with my organization
 * Email this general group of volunteers
 * Volunteers can quickly apply to participate through email link
 * Once event reaches the requested number of volunteers (first come first serve), anyone else who tries to sign up will be waitlisted and automatically accepted if someone else drops out

----

## Process Details

#### Roles & responsibilities

We will be splitting work in three main components: front-end, back-end, and fullstack, with further divisions within each role.

##### Back-end team:

**Cameron**: Provide project structure. Build out business logic for the app, establish blueprint/structure for the REST API. Responsible for deployment.
**Stanley**: Implementing functions and methods of the back-end.
**Weiqing**: Implementing functions and methods of the back-end.

##### Front-end team:

**Elaine**: Design and styling
**Andy**: API Integration
**Jackie**: API Integration, Meeting Note Taker.

##### Fullstack:

**Isaac (Yu-Hsiang)**: Will help whichever team is currently most in need.

##### Front End:

**Elaine**: Front end with a focus on design and styling
Strength: Has previous experience with CSS and HTML. Currently learning to use Javascript. Currently learning to use React.js, and Node.js. 
Weakness: Has never used Bootstrap. Has not worked with MongoDB or non-relational databases before. Inexperienced with APIs.

**Andy**: Front end with a focus on the background details, such as  state management and server calls.
Strengths: Familiar with react and some experience making API calls from javascript.
Weaknesses: Design and styling. New to the agile methodology.

**Jackie**: Front end with a focus on API Integration
Strength: Has some experience with CSS and HTML. Has experience with Python and other object oriented languages i.e. Java.
Weakness: Has never used Bootstrap, React.js. and Node.js. Is new to the Agile Scrum development methodology.

##### Back End:

**Weiqing**:
Strength: Weiqing worked with and is familiar to SCRUM development methodology. He worked as a Back-end Engineer Intern and Quality Assurance Test Engineer Intern before, at which positions he worked with corporate and government clients including the Government of Singapore and the Government of Malaysia on their energy management projects.  He has also worked with Python Flask and Spring framework.
Weakness: Weiqing has limited knowledge about front-end part, and had never worked with JavaScript before. He is unfamiliar with NodeJS. He had never worked with a non-relational database.

**Stanley**:
Strengths: Familiar with software development cycle (agile and waterfall). I have worked as a Software developer doing C# on the backend, abit of HTML, CSS, Javascript on the frontend, and relational SQL on the database.
Weaknesses: No experience with MongoDB, NodeJS, ExpressJS.  

**Cameron**:
Strength: Experience working with NodeJS, MongoDB and ExpressJS. 
Weakness: No experience working with an Agile development methodology. Have never worked with a non-technical partner. No experience working with Excel-supported filetypes. 

##### Full Stack:

**Isaac (Yu-Hsiang)**: Work on both front-end and back-end.
Strength: Isaac has working experience of (and is currently working with) both front-end UI development as well as back-end server development through agile practices. In the scope of this project, Isaac is familiar with CSS, HTML, and JS (include various libraries and frameworks) on the client side, some working knowledge with both relational database (mySQL) and document-oriented database (ES) and API design and integration (designs and documentations with swaggerAPI, integration experiences with Zendesk and CT), and have used nodeJS with PHP on the server side.
Weakness: Isaac has limited experience with top-notch modern framework (e.g. reactJS) and has not used nodeJS extensively but a different framework (Sencha EXTJS). Isaac has comparatively less knowledge on the theory and design side of these languages, more on the practical side. Besides, Isaac has little experience with systematic tests in larger scales.

#### Team Rules

##### Team's working culture

We will be employing parts of the Agile Scrum methodology.

In terms of roles as noted above, all members of the team are on the Development Team.

To keep track of tasks to be completed during sprints, as well as the high-level requirements, we are using trello as our Sprint and Product Backlog. A link is provided below in the artifacts section.

Each sprint will be between one to two weeks. As noted below, we will meet in person during each tutorial session each week to have the Planning meetings and Review meetings of each sprint. It is during this time that we will review on a high level the user stories of the Product Backlog and discuss the tasks each member needs to complete to fulfill them, which will be listed on the Trello Board. We will also go over parts finished and problems encountered in the last sprint and see if they need to be added into the new sprint as well. 

Due to the busy schedules of all team members, it is infeasible that we have daily stand up meetings face to face. Instead we will keep close communication using Facebook’s messenger between meetings, to ensure that no one is falling behind.


##### Communications:

We will meet every two weeks as the minimum. We will maintain constant communication between the partner through email and also on Trello board (which allows communication using comments). We can notify the partner on a particular task when needed (on Trello board first for quick and short response) and if required we will send the details through email. Further discussions can take place either through emails or directly on the Trello board.

##### Meetings:

We will create strict timelines for action items, and will be tracking our progress using a Trello board. In the event of a missed deadline, we will communicate via our shared group chat to see what the issue is, and provide help if necessary. In the extreme event this does not work, or someone is unreachable, we will address the issue as a group with our TA. 


##### Conflict Resolution:

1. Indecisions on the languages and frameworks for the product

Everyone propose their selections, then proceed to investigate the pros and cons of each language/framework, after that each person comes up to explain the reasons for choosing a particular one over the rest, and then we make the decision by the majority rule (vote).

2. Non-responsive team members.

We have a consensus that if one of us is not responsive, everyone else can attempt to contact that person using the methods provided beforehand (which should not be used for normal contacts and should definitely not be abused but are a more guaranteed way(s) to get in touch with the person). If none of the above works, we will come up with a detailed plan for the person and unavoidably assign certain roles for that person depending on current progress of the team.

3. If members fall behind on tasks.

This may be a sign that certain tasks were too big to be done in one sprint. In this case we should try to break down the tasks further, or reevaluate the importance of the task trying to be completed. Otherwise, more experienced members could try to help in finishing/guiding the process.

#### Events

We will have in person meetings every week during tutorial for the sprint review and sprint planning. We will also have meetings with our partner every two weeks also in person to confirm that we are track with what our partner wants. Otherwise we will be keeping in touch through Facebook’s messenger if any problem arises.

#### Partner Meetings

**Meeting 1**: [Link to Meeting 1 Minutes](https://docs.google.com/document/d/1r5Q41V_ve7XNG9QrY7_0OFUSfzPbAlLno4sGw-emB9M/edit?fbclid=IwAR3zQgrpJu7hJuu2K5w2NA3WQXEr-zHMPCJpXjUxEetHOgYFJF08KHF0i4I)

**Meeting 2**: [Link to Meeting 2 Minutes](https://docs.google.com/document/d/1Qxhygdl-dczG37StdoTAlhN01RQWe8DlSCf3VNzvWfo/edit)


#### Artifacts

An invite link to the Trello board: https://trello.com/invite/b/xXJaCXI7/ead8360d041bc4f248ce6d312f1f1618/sumaria

We put the technical requirements in the unstarted column. Each requirement, when we start working on it, will be broken down into small sprints and will then move to the started column. We prioritize tasks based on discussions in the meeting and it is roughly ordered from highest to lowest in the unstarted column.

The tasks on the review section are for review. An obvious example is when a task is blocked.

The ones in the finished state are the ones that are comparatively independent or is finished as of the scope of the task.

We will put the cards in the delivered column when a task is complete in its finest, is reviewed, and is approved by the partner.

The general steps for creating a sprint (a manageable task):
Create a card (i.e. a sprint) with description (a more detailed explanation of what needs to be done), members (person(s) responsible for it), labels (category for the sprint), story points (estimated number of hours for the task), checklists (a list of small tasks to complete), and  comments when needed (or it might act as a starting point for discussions).

We will have weekly sprint (in the started column) with reasonable workload.

The tasks are assigned based on the working culture and our separation of roles.

(This board can also be used by the partner to monitor and track our progress. It also provides a quick way to communicate on any particular tasks and give confirmations whenever needed)

----

### Highlights

**Note this section is optional**

##### Using MongoDB and not SQL:

SQL was considered as several members of the group have experience in it, but MongoDB avoids extra work like having to create SQL queries and instead allows people to interact directly with objects when handling data.Though fewer members of our group have experience with MongoDB and non relational databases, it was decided that this option would save time in the end.

##### Deciding what happens when users cancel their registration in a volunteering event:

It was decided that volunteer postings for an event are sent by email to users. Then through the email users can click a link to sign up. Afterwards they would get a confirmation email with a link to cancel. If the maximum number of volunteers have already registered then the sign up link is disabled.
    Originally it was thought that if a user canceled a new email would be sent to all participants again telling them of the reopened opportunity. However this would lead to a huge volume of emails being sent out if multiple users canceled and registered when the maximum number of volunteers had been reached.
    Instead it was decided that the link would not be disabled and that other users wanting to participate would be placed on a waiting list. Now only if a user got in they would be emailed.

##### Deciding which platform:

The options were either a web application or a mobile application or both.
Web application was chosen due to the fact that members of the team were more experienced with this platform. It would also be simpler to access a website and upload data on this platform. Mobile application was rejected due to the limited amount of time, as well as due to the fact that IOS and Android applications require different languages.
