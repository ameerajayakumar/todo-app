# Getting Started with ToDo Application

## Available Scripts

In the project directory( cd todo-app), you can run:

### npm i

### npm start

Runs the app in the development mode locally.
Open [http://localhost:8081](http://localhost:8081) to view it in your browser.

### Deployment:

Netlify deployment URL: [Task Ninja](https://todo-taskninja.netlify.app/)

### Tech Stack/Libaries Used:

- HTML
- CSS
- Typescript
- React
- React Router
- Context API
- Tailwind CSS
- Material Tailwind

### Features Implemented:

- Login page implemented:
  - Input fields for username and password, login button
  - User authentication done by mock username/password and mock token key
  - Validation of username/password done: show error on login component
  - Proper routing done before and after authentication
- Loading component added:
  - Loading component shows up if slow loading of pages
- Dashboard features:
  - Header shows application name( non-active), user details(mock), logout button
  - Logout functionality implemented
  - Ability to add main tasks (highlighted in bold to distinguish between main task and sub task)
  - Clicking on main task, opens input to add sub task
  - Ability to add sub tasks to main task (only one level sub task)
  - Ability to mark task & sub task as completed (visually shows task as striked out)
  - Added Todo list is retained even after page refresh or if user logout & login back (localstorage is used to store data here)
- Global state management:
  - Used React Context API to store and manage different state and data across components/pages
- Application deployed on Netlify

### Potential Improvements:

- Show loading spinner after clicking on Login button during authentication check
- More validation can be done on user inputs on Login form
- Show error on username/password mismatch or if user is not authenticated
- On page refresh, todo list is retained. But the checked(completed) state of todo items are not.
- Improve UI/UX generally
- Add edit/delete capability to main task and sub task
