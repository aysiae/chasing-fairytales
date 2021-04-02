# Writrs.
## Web Application Project by: Aysia Brown
### Version: 1.0 (in development)

### Links & Resources
- RESTful API: [Writrs API](https://writrs-api.herokuapp.com/oneliner)
- Development Deployment: [Writrs App](https://writrs-d3000.web.app/welcome)
- Official Deployment: Coming Soon


## Project Overview & Mission:
Writrs is a writing tool designed for writers by writers; it's a place to collect and organize your story ideas whether you are a novelist, a roleplayer, or just a casual writer. 

Writrs solves the pain point of giving writers a starting point to collect and form their ideas. Often times, starting is the hardest part and Writrs intends to make that easier with our collection of character prompts, worldbuilding prompts, and writing prompts to help jumpstart your imagination. The best part of all is that everything is organized in one place, exactly where you need it when you need it. 


## Feature Tasks:

### MVP
- Authentication (using Firebase email/password auth)
- Public Vs Protected Routes
    - **Public Routes:** Login, Register, Splash Page
    - **Private Routes**: Homepage, Worlds, Characters, Scenes, Notes & Profile 
        - many of these pages are intended to save user input to a database, which right now is intended to be Firebase Cloudstore database. 
- Different Coloring Schemes (Light mode/Dark mode/Unicorn mode/Colorblind mode)
- Mobile responsiveness 

### Stretch/Longterm:
- Messaging System
- Scenes Collaboration 
- Following System 
- Account Deactivation 

*More in depth features tasks can be found:* [Here](https://docs.google.com/document/d/1NnjqUHORVeH5KJRu3KWhKPHNt_6FmsXcjSidjeyr8cs/edit?usp=sharing)

## Entity Relationship Diagram (example):

![ERD](./public/assets/ERD.png)


## Wire Frames
### Updated: 03/29/2021 @ 6:30PM PST

Home Splash Page — Not Signed In:
localhost:3000/
![Splash Page](./public/assets/Splash.png)

Sign-In Page:
localhost:3000/signin
![Sign In Page](./public/assets/Login.png)

Reguster Page:
localhost:3000/register
![Register Page](./public/assets/Register.png)

Homepage — Signed In:
localhost:3000/
![Homepage](./public/assets/Homepage.png)

Profile Page:
localhost:3000/:uuid/:username
![Profile Page](./public/assets/Profile.png)

Messages Page — Stretch Goal:
localhost:3000/messages
![Messages](./public/assets/Messages.png)

Settings Page:
localhost:3000/settings
![Settings](./public/assets/Settings.png)

Worlds Page:
localhost:3000/worlds
![Worlds Page](./public/assets/WorldsAll.png)

Single World View:
localhost:3000/worlds/:id
![Single World View](./public/assets/WorldView.png)

Characters Page:
localhost:3000/chars
![Characters Page](./public/assets/CharAll.png)

Single Character View:
localhost:3000/chars/:id
![Single Character View](./public/assets/CharactersView.png)

Scenes Page:
localhost:3000/scenes
![Scenes Page](./public/assets/ScenesAll.png)

Single Scene View — Solo:
localhost:3000/scenes/:id
![Single Scene View Solo](./public/assets/SceneSolo.png)

Single Scene View — Collab:
localhost:3000/scenes/:id-:roomid
![Single Scene View Collab](./public/assets/ScenesCollab.png)

Notes Page:
localhost:3000/notes
![Note Page](./public/assets/NotesAll.png)

Single Note View:
localhost:3000/notes/:id
![Single Note View](./public/assets/NotesView.png)

Universe/Collections Page:
localhost:3000/universe
![Universe Page](./public/assets/UniAll.png)

Single Universe/Collection View:
localhost:3000/universe/:id
![Single Universe View](./public/assets/UniView.png)

## Planned Use of Technology:
- JavaScript as the main language using ReactJS
- Redux used for global state management
- SCSS for additional styling
- Firebase for authentication and database 
- Socket.io for messaging 
- Integration with Pinterest API
- Creating a RESTful API for the writing prompts
- Cookies for storing persistent login