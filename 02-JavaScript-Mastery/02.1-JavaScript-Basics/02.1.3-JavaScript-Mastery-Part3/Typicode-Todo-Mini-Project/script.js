const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
let todoIdCounter = 1000; // Start with high number to avoid conflicts with API todos

// Fetch todos from API
const getTodos = () => {
    console.log('Fetching todos from API...');
    fetch(apiUrl + '?_limit=5')
        .then((response) => {
            console.log('API Response received:', response.status);
            return response.json();
        })
        .then((data) => {
            console.log('Success! Fetched todos:', data);
            data.forEach((todo) => addTodoToDOM(todo));
            console.log('All todos added to DOM successfully');
        })
        .catch((error) => {
            console.error('Error fetching todos:', error);
        });
}

// Add todo to DOM with proper structure
const addTodoToDOM = (todo) => {
    console.log('Adding todo to DOM:', todo);
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.setAttribute('data-id', todo.id);

    if (todo.completed) {
        todoItem.classList.add('completed');
    }

    todoItem.innerHTML = `
        <div class="todo-content">
            <div class="todo-title">${todo.title}</div>
            <div class="todo-id">ID: ${todo.id}</div>
        </div>
        <div class="todo-actions">
            <button class="btn-complete" onclick="toggleComplete(${todo.id})">
                ${todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button class="btn-delete" onclick="deleteTodo(${todo.id})">Delete</button>
        </div>
    `;

    document.getElementById('todo-list').appendChild(todoItem);
    console.log('Todo successfully added to DOM with ID:', todo.id);
}

// Toggle todo completion
const toggleComplete = (id) => {
    console.log('Toggling completion for todo ID:', id);
    const todoItem = document.querySelector(`[data-id="${id}"]`);
    const isCompleted = todoItem.classList.contains('completed');

    if (isCompleted) {
        todoItem.classList.remove('completed');
        todoItem.querySelector('.btn-complete').textContent = 'Complete';
        console.log('Todo marked as incomplete:', id);
    } else {
        todoItem.classList.add('completed');
        todoItem.querySelector('.btn-complete').textContent = 'Undo';
        console.log('Todo marked as complete:', id);
    }
}

// Delete todo
const deleteTodo = (id) => {
    console.log('Deleting todo with ID:', id);
    const todoItem = document.querySelector(`[data-id="${id}"]`);
    if (todoItem) {
        todoItem.remove();
        console.log('Todo successfully deleted:', id);
    } else {
        console.log('Todo not found for deletion:', id);
    }
}

// Initialize event listeners
const init = () => {
    console.log('Initializing todo app...');
    document.getElementById('todo-form').addEventListener('submit', onSubmit);
    console.log('Event listeners attached successfully');
}

// Handle form submission
const onSubmit = (e) => {
    e.preventDefault();

    const titleInput = document.getElementById('title');
    const todoTitle = titleInput.value.trim();

    if (todoTitle === '') {
        alert('Please add a todo');
        return;
    }

    // Create new todo object
    const newTodo = {
        id: todoIdCounter++,
        title: todoTitle,
        completed: false
    };

    addTodoToDOM(newTodo);
    titleInput.value = ''; // Clear input field
}

// Start the application
init();
getTodos();