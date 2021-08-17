
# [**Eventech**](https://eventech-hub.herokuapp.com/#/) 
Eventech is an event management and ticketing application that enables users to browse, create, and register for free online virtual events in the tech space, inspired by [Eventbrite](https://www.eventbrite.com). Eventech is built using React and Redux frontend JavaScript libraries, HTML and CSS, Ruby on Rails backend framework, PostgreSQL database, and AWS S3 for data storage. The site was deployed with Heroku.
![homepage](https://github.com/beccaburten/eventech/blob/master/app/assets/readme/splash.png)


## Technologies
- Ruby on Rails
- JBuilder
- JavaScript
- React
- Redux
- HTML/CSS
- PostgreSQL
- Amazon Web Services (AWS S3)
- FormData API
- Heroku

## Highlights

**Events Index & Filtering by Category**

![filter](https://github.com/beccaburten/eventech/blob/master/app/assets/readme/filter1.2MB.gif)

Visitors can browse events and filter events by category prior to logging in.

**Custom Auth Routing**

![auth](https://github.com/beccaburten/eventech/blob/master/app/assets/readme/signup1MB.gif)

Visitors can register for, like, or create events upon sign up or log in. After inputting an e-mail on the main sign-in page, a custom auth route checks for e-mail presence in the database and routes the visitor to either the login or signup page accordingly. Frontend validations avoid unnecessary AJAX requests and optimize targeted alerts, including improper e-mail format, inaccurate password on login, inaccurate e-mail match on signup, and missing name or password fields.  

**Registering & Unregistering for Events**

![reg](https://github.com/beccaburten/eventech/blob/master/app/assets/readme/register2MB.gif)

Visitors can register or unregister for an event by accessing the modal on the event's show page. Alternatively, the Tickets page displays all the user's registered events, with the option to unregister for an individual ticket via the Cancel Order modal. 

**Event CRUD**

![create](https://github.com/beccaburten/eventech/blob/master/app/assets/readme/create1.5MB.gif)

- To properly set the **Create** form across two tabs, I implemented a container component with an update method bound to its local state, and passed it to each child component tab. Frontend error messages optimize speed for validations, and ensure proper input to the backend. The Publish button triggers a submission method also bound in the parent component, sending all collected inputs from both forms to the database (with a spinning loader, for helpful UI). 
- Upon publishing, the user is directed to the new event's **Read** page where they see the option to Edit or **Delete** the event. 
- To **Update** the event, the forms are rendered with the current values pre-filled into all fields. To accomplish this, the parent container maps the event to props, and passes it as a prop to the children components. The children components set local state to the event's current information from the prop, and use the bound update method set key-value pairs of any changed fields in the parent's local state. This method results in only updated information being submitted to the database upon Publish. 

## Features
- User authentication built with frontend React validations for immediate error feedback, and backend Rails database constraints with secure BCrypt password hashing
- Users can browse event feed and navigate to event Read pages prior to login
- Users can filter events by category or see all events
- Logged in users can create, read, update, and delete events (full CRUD)
- Logged in users can register for events, and see these events on their Tickets index page. They can navigate to an individual ticket to unregister, or unregister from the Event's show page
- Logged in users can like or unlike events from the events index or event show page, and can see their liked events on their Like index page, where they can also unlike any events and see them disappear
- Optimized with cloud-based image storage using Rails ActiveStorage and Amazon Web Services S3

## Additional Resources
+ [Schema](schema)
+ [Sample State](sample-state)
+ [Frontend Routes](frontend-routes)
+ [Backend Routes](backend-routes)
+ [Site Features](site-features)

## Future Plans
- Responsive mobile design
- Search bar for targeted event filtering
