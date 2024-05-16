# Wiring todo with backend

## Context
This application is currently fully functional, but if you reload the page, none of the to-do items are saved. We need to store the to-do values on the backend.

### Play with the application
- You can add todo by adding text and clicking on add button
- you can delete todos by clicking on delete button
- you can mark the task as completed by clicking on the "Complete" button.

## Task 1 (storing in backend)
- When you add the todo make a POST request to backend and store the todo in the databsae

## Task 2 (retriving)
-  When you reload the page make a GET request from backend and populate the TODO that you previously stored

## Task 3 (Deleteing)
- When you delete the task make sure to delete in the backend as well
- Reload the page and see if the task is deleted

## Task 4 (Making as completed)
- When you click on "Complete" the task should be marked as complete and should be presisted in backend as well
- Reload the page and see if the task is complete


### Hint 
- Checkout todo.py which act as a database model file.

## Task 5 (implement authentication)
- Create Email/password based authentication and allow to read only if the user is not logged in.