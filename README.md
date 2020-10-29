
# [**Eventech**](https://eventech-hub.herokuapp.com/#/) 
Eventech is an event management and ticketing application that enables users to browse, create, and register for free online virtual events in the tech space, inspired by [Eventbrite](https://www.eventbrite.com). Eventech is built using React and Redux frontend libraries, HTML and CSS, Ruby on Rails backend framework, PostgreSQL database, and AWS S3 for data storage. The site was then deployed with Heroku.
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

Visitors who with to register for, like, or create events will need to sign up or log in! He or she will input their e-mail on the main sign-in page, which will trigger a custom auth route to check for e-mail presence in the database and route the visitor to either the login or signup page accordingly. Frontend validations were used for targeted error messages, including improper e-mail format, inaccurate password on login, inacucurate e-mail matching on signup, and missing name or password fields.  

**Registering & Unregistering for Events**
![reg](https://github.com/beccaburten/eventech/blob/master/app/assets/readme/register2MB.gif)

Visitors can visit an event's show page to access a modal where they can register or unregister for the event. Alternatively, the Tickets page displays all the user's registered events, with the option to unregister for an individual ticket via the Cancel Order modal. 

**Event CRUD**
![create](https://github.com/beccaburten/eventech/blob/master/app/assets/readme/create1.5MB.gif)

- To implement event **Create** across two form tabs, I implemented a container component with an update method bound to its local state, passed to two children component forms, which would render the tabs and receive user input to update the parent's state. The second tab reveals the Publish button, which triggers a submission method also bound in the parent component, sending all collected inputs from both forms to the database for validation. 
- The user is then directed to the new event's **Read** page. Where others would see a "Register" option, this user now sees their Edit and **Delete** options. 
- To **Update** the event, the forms are rendered with the prior information pre-filled into all fields. To accomplish this, the parent container fetches the event by the id in the url params as a prop upon mounting, and passes this event as a prop to the children components. While the parent holds no event information in local state, the children components set local state to the event's current information from the prop. The update method bound to the parent now sets a key-value pair in the parent state with any changed fields, so as only to submit updated information to the database upon submission. 

## Features
- User authentication built with frontend React validations for immediate error feedback, and backend Rails database constraints with secure BCrypt password hashing
- Users can browse event feed and navigate to event Read pages prior to login
- Users can filter events by category or see all events
- Logged in users can create, edit, and elete events (full CRUD)
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
