export function loadJS() {
  
  window.addEventListener('load', () => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    console.log(todos)

    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');
  
    const username = localStorage.getItem('username') || '';
    
    nameInput.value = username;
    
    nameInput.addEventListener('change', (e) => {
      localStorage.setItem('username', e.target.value);
    });
  
    newTodoForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const todo = {
        content: e.target.elements.content.value,
        category: e.target.elements.category.value,
        done: false,
        createDate: new Date().getTime()
      };
      
      if (todo.content !== '') {
        todos.push(todo);
      }
  
      localStorage.setItem('todos', JSON.stringify(todos));
  
      e.target.reset(); //this part is important because it clears the form which we stopped when using e.preventDefault();
  
      displayTodos(todos); // todos are displayed after form is submitted
    });
  
    displayTodos(todos); //todos are displayed as soon as the page is loaded
  });
  
  function displayTodos(todos) {
    const todoList = document.querySelector('#todo-list');
  
    todoList.innerHTML = '';
  
    todos
    .filter((todo) => !todo.deleted)
    .sort((a, b) => {
      return b.createDate - a.createDate;
    })
    .forEach((todo) => {
      const todoItem = document.createElement('div'); 
      todoItem.classList.add('todo-item');
  
      const label = document.createElement('label');
      const input = document.createElement('input');
      const span = document.createElement('span');
      const content = document.createElement('div');
      const actions = document.createElement('div');
      const edit = document.createElement('button');
      const deleteButton = document.createElement('button');
  
      input.type = 'checkbox';
      input.checked = false;
      span.classList.add('bubble');
  
      if (todo.category =='personal') {
        span.classList.add('personal');
      } else {
        span.classList.add('business');
      }
  
      content.classList.add('todo-content');
      actions.classList.add('actions');
      edit.classList.add('edit');
      deleteButton.classList.add('delete');
      content.innerHTML = `<input type="text" value='${todo.content}'readonly>`;
      edit.innerHTML = 'Edit';
      deleteButton.innerHTML = 'Delete';
  
      label.appendChild(input);
      label.appendChild(span);
      actions.appendChild(edit);
      actions.appendChild(deleteButton);
  
      todoItem.appendChild(label);
      todoItem.appendChild(content);
      todoItem.appendChild(actions);
  
      todoList.append(todoItem);
  
      input.addEventListener('click', (e) => {
        todo.done = e.target.checked;
        localStorage.setItem('todos', JSON.stringify(todos));
      
        if (todo.done) {
          todoItem.classList.add('done');
        } else {
          todoItem.classList.remove('done');
        }
      });
      
      edit.addEventListener('click', (e) => {
        const input = content.querySelector('input');
        input.removeAttribute('readonly');
        input.focus();
        input.addEventListener('blur', (e) => {
          input.setAttribute('readonly', true);
          todo.content = e.target.value;
          localStorage.setItem('todos', JSON.stringify(todos));
        });
      });
      
      deleteButton.addEventListener('click', (e) => {
        todo.deleted = true;
        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos(todos);
      });
    });
  }
}
