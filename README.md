![eventech-logo](https://github.com/beccaburten/eventech/blob/master/app/assets/images/eventech.png)

[**Eventech**](https://eventech-hub.herokuapp.com/#/) is an event management and ticketing application that enables users to browse, create, and register for free online virtual events in the tech space, inspired by [Eventbrite](https://www.eventbrite.com). Eventech is built using React and Redux frontend libraries, HTML and CSS, Ruby on Rails backend framework, PostgreSQL database, and AWS S3 for data storage. The site was then deployed with Heroku.

## Technologies Used
- Ruby on Rails
- JBuilder
- JavaScript
- React
- Redux
- HTML/CSS
- PostgreSQL
- Amazon Web Services (AWS S3)
- Heroku

## Highlights
**Custom Auth Routing**

Visitors will input their e-mail on the main sign-in page, which will check for e-mail presence in the database and route the visitor to either the login or signup page accordingly. Frontend validations were used for targeted error messages, including improper e-mail format, inaccurate e-mail matching on login, and missing name or password fields.  

**Registering & Unregistering for Events**

Visitors can visit an event's show page to register or unregister for the event. Alternatively, the Tickets page displays all events the user is currently registered for, with the option to click into an individual ticket and open a Cancel Order modal. 

**Event Creation**

To implement event creation across two form tabs, I created a container component with local state and an update method bound to the component. I passed this bound method into the two child component forms, which would receive user input and update the parent's local state. The second tab reveals the Publish button, which triggers a submission method also bound in the parent component, sending inputs captured from both forms to the database for validation.

## Features
- User authentication built using frontend React validations for immediate error feedback, and backend Rails validations with secure BCrypt password hashing
- Users can browse event feed and navigate to event pages prior to login
- Logged in users can create and register for events
- Optimized with cloud-based image storage using Rails ActiveStorage and Amazon Web Services S3

## Additional Resources
- Schema
- Sample State
- Frontend routes and components
- Backend routes
- MVP List

## Future Plans
Filter events by Category
Like events
Update events created by logged-in user
