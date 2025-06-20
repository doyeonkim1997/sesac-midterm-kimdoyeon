// 로그인 체크
if (!localStorage.getItem('currentUser')) {
  window.location.href = 'index.html';
}

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos(filteredTodos = todos) {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  filteredTodos.forEach(todo => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-3';
    card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${todo.title}</h5>
                    <p class="card-text">${todo.description || '설명 없음'}</p>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" 
                            ${todo.isCompleted ? 'checked' : ''}
                            onchange="toggleTodo(${todo.id})">
                        <label class="form-check-label">완료</label>
                    </div>
                </div>
            </div>
        `;
    todoList.appendChild(card);
  });
}

function addTodo() {
  const title = document.getElementById('todoTitle').value;
  if (!title) return;

  const description = document.getElementById('todoDescription').value;
  const maxId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) : 0;

  const newTodo = {
    id: maxId + 1,
    title,
    description,
    isCompleted: false
  };

  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));

  // 모달 닫기
  bootstrap.Modal.getInstance(document.getElementById('addTodoModal')).hide();
  renderTodos();
}

function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.isCompleted = !todo.isCompleted;
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
  }
}

function filterTodos(filter) {
  let filteredTodos = todos;
  if (filter === 'completed') {
    filteredTodos = todos.filter(todo => todo.isCompleted);
  } else if (filter === 'incomplete') {
    filteredTodos = todos.filter(todo => !todo.isCompleted);
  }
  renderTodos(filteredTodos);
}

// 초기 렌더링
renderTodos();
