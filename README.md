Please make the following changes to the Interview Task Application

    1 - Replace "JOHN DOE" with your name
    2 - Remove the LOGIN button and have the application authenticate when the app.navbar component rendered
    3 - Clicking on the Task Group Filter is not working. Add logic so that when a Task Group Filter is selected, the task list only displays filtered results
    4 - Add a button to create a New Task. This should be a new page that is loaded by navigating to http://localhost:3000/task

        - The page should have a Cancel button. When Cancel is clicked, navigate back to http://localhost:3000
        - The page should have a textbox for the description of a Task
        - The page should have a dropdown to choose a Task Group
        - The page should have a Save button. When clicked, call the saveTask method in a way that updates the redux store. It should also navigate back to http://localhost:3000
        - When back on the home page, the new task should be visible

    5 - When clicking on the Mark Complete button, call the api to delete the task and remove it from the list of displayed tasks
    6 - Add a common spinner control. Any spinner of your choice. The mock api is coded to mimic a delay. Up the api delay to 2 seconds (mockServer.js) and show the spinner when the task list loads