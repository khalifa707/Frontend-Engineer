const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
let todoIdCounter = 1000; // Start with high number to avoid conflicts with API todos

// Fetch todos from API
const getTodos = () => {
    fetch(apiUrl + '?_limit=5')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((todo) => addTodoToDOM(todo));
        })
        .catch((error) => {
            console.error('Error fetching todos:', error);
        });
}

// Add todo to DOM with proper structure
const addTodoToDOM = (todo) => {
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
}

// Toggle todo completion
const toggleComplete = (id) => {
    const todoItem = document.querySelector(`[data-id="${id}"]`);
    const isCompleted = todoItem.classList.contains('completed');

    if (isCompleted) {
        todoItem.classList.remove('completed');
        todoItem.querySelector('.btn-complete').textContent = 'Complete';
    } else {
        todoItem.classList.add('completed');
        todoItem.querySelector('.btn-complete').textContent = 'Undo';
    }
}

// Delete todo
const deleteTodo = (id) => {
    const todoItem = document.querySelector(`[data-id="${id}"]`);
    if (todoItem) {
        todoItem.remove();
    }
}

// Initialize event listeners
const init = () => {
    document.getElementById('todo-form').addEventListener('submit', onSubmit);
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