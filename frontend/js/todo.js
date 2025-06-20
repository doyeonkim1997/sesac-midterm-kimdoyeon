// 로그인 체크
if (!localStorage.getItem('currentUser')) {
  window.location.href = 'index.html';
}

// DOM elements
const todoList = document.getElementById('todoList');
const todoForm = document.getElementById('todoForm');
const saveTodoBtn = document.getElementById('saveTodoBtn');
const logoutBtn = document.getElementById('logoutBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// 할 일 목록 가져오기
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// 최대 ID 찾기
const getMaxId = () => {
  return todos.reduce((max, todo) => Math.max(max, todo.id), 0) + 1;
};

// 할 일 렌더링
const renderTodos = (filteredTodos = todos) => {
  todoList.innerHTML = filteredTodos.map(todo => `
        <div class="col-md-6">
            <div class="card ${todo.isCompleted ? 'bg-light' : ''}">
                <div class="card-body">
                    <h5 class="card-title">${todo.title}</h5>
                    ${todo.description ? `<p class="card-text">${todo.description}</p>` : ''}
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" 
                            ${todo.isCompleted ? 'checked' : ''} 
                            onchange="toggleTodo(${todo.id})">
                        <label class="form-check-label">완료</label>
                    </div>
                    <button class="btn btn-danger btn-sm mt-2" onclick="deleteTodo(${todo.id})">삭제</button>
                </div>
            </div>
        </div>
    `).join('');
};

// 할 일 추가
saveTodoBtn.addEventListener('click', () => {
  const title = document.getElementById('todoTitle').value;
  const description = document.getElementById('todoDescription').value;
  const isCompleted = document.getElementById('todoCompleted').checked;

  if (!title) return alert('제목을 입력하세요');

  const newTodo = {
    id: getMaxId(),
    title,
    description,
    isCompleted
  };

  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();

  // 모달 닫기 및 폼 초기화
  const modal = bootstrap.Modal.getInstance(document.getElementById('addTodoModal'));
  modal.hide();
  todoForm.reset();
});

// 할 일 토글
const toggleTodo = (id) => {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
  );
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
};

// 할 일 삭제
const deleteTodo = (id) => {
  todos = todos.filter(todo => todo.id !== id);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
};

// 필터 기능
filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    const filter = e.target.dataset.filter;
    let filteredTodos = todos;

    if (filter === 'completed') {
      filteredTodos = todos.filter(todo => todo.isCompleted);
    } else if (filter === 'incomplete') {
      filteredTodos = todos.filter(todo => !todo.isCompleted);
    }

    renderTodos(filteredTodos);
  });
});

// 로그아웃
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
});

// 초기 렌더링
renderTodos();
