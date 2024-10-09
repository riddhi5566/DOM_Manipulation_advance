

# To-Do List Application

## Overview

This To-Do List application allows users to add and remove tasks dynamically using JavaScript. The app demonstrates advanced DOM manipulation techniques, state management, and component creation similar to frameworks like React.

## Features

- Add new to-do items.
- Delete the last to-do item.
- Delete any specific to-do item.
- Live rendering of the to-do list as items are added or removed.

## Technologies Used

- HTML5
- CSS3 (optional, if styles are added)
- JavaScript (ES6+)

## File Structure

```
/to-do-list-app
│
├── index.html       # Main HTML file
├── script2.js       # JavaScript file for functionality
└── styles.css       # (Optional) CSS file for styling
```

## Installation

1. **Clone the repository** (or download the files directly):
   ```bash
   git clone <repository-url>
   cd to-do-list-app
   ```

2. **Open the `index.html` file** in your web browser.

## Usage

1. Enter a task in the input field.
2. Click the **"Add Todo"** button to add the task to your to-do list.
3. Click the **"Delete Last Todo"** button to remove the last item from the list.
4. Each to-do item has a **"Delete"** button that allows you to remove that specific item from the list.

## Code Explanation

### `index.html`

This file contains the basic HTML structure for the To-Do List application, including an input field for new tasks, buttons for adding and deleting tasks, and a div to display the list of to-dos.

### `script2.js`

- **State Management**: 
  - Uses an array `todos` to store the to-do items.
  
- **Functionality**:
  - `AddTodo()`: Adds a new to-do item based on the input value and calls `render()` to update the UI.
  - `deletelasttodo()`: Removes the last to-do item from the array and updates the UI.
  - `deletetodo(index)`: Removes a specific to-do item based on its index in the array.
  - `createTodoComponent(todo, index)`: Creates a DOM element for each to-do item, including a delete button.
  - `render()`: Updates the UI to reflect the current state of the `todos` array.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

