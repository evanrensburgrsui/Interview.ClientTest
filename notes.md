## Tasks
1 - **Replace "JOHN DOE" with your name**
- Replaced all instances of "JOHN DOE" with "Valerie Olson"

2 - **Remove the LOGIN button and have the application authenticate when the app.navbar component rendered**
- Removed LOGIN button
  - Replaced with a spinner while loading
- Added a useEffect hook in the app.navbar component that calls the authenticate function if not already authenticated

3 - **Clicking on the Task Group Filter is not working. Add logic so that when a Task Group Filter is selected, the task list only displays filtered results**
- Added displayTasks state to the tasking slice
  - Assumption: Tasks are volatile
  - Alternatively we could have filtered on each render
  - Alternatively we could have modified TaskDetailsModel to include a display property
- Added selected state to the TaskGroupModel
  - Assumption: Task groups are not volatile
  - Alternatively, we could keep track of selections in the tasking slice
- Added useEffect to update displayTasks
- Added function to dispatch group selections
- Added reducer to handle group selections

4 - **Add a button to create a New Task. This should be a new page that is loaded by navigating to http://localhost:3000/task**

    - The page should have a Cancel button. When Cancel is clicked, navigate back to http://localhost:3000
    - The page should have a textbox for the description of a Task
    - The page should have a dropdown to choose a Task Group
    - The page should have a Save button. When clicked, call the saveTask method in a way that updates the redux store. It should also navigate back to http://localhost:3000
    - When back on the home page, the new task should be visible

- Added Input and Select components
- Added AddTask page
  - I'd prefer to keep the same layout and just swap the content, but this works
  - Alternatively, a modal would work
- Added a cancel button to the AddTask page
- Added a submit button to the AddTask page
- Added inputs to the AddTask page
- Added addTask slice to store

5 - **When clicking on the Mark Complete button, call the api to delete the task and remove it from the list of displayed tasks**
- Added deleteTask to task proxy
- Linked Mark Complete to the deleteTask function
  - Upon success, splices out the task from the activeTasks array

6 - **Add a common spinner control. Any spinner of your choice. The mock api is coded to mimic a delay. Up the api delay to 2 seconds (mockServer.js) and show the spinner when the task list loads**
  - Installed react-spinners package

## Questions
1. Do you use any component libraries like MUI?

2. If I notice a minor typo, may I just correct it?