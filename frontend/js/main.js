import { login } from './data.js';

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const result = login(email, password);
  if (result.success) {
    alert('로그인 성공!');
    localStorage.setItem('user', JSON.stringify(result.user));
    // 로그인 성공 후 리다이렉트
    window.location.href = '/todo.html';
  } else {
    alert(result.message);
  }
});
e.preventDefault();
messageList.innerHTML = ''; // 이전 메시지 초기화

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if (!email || !password) {
  showMessage('모든 항목을 입력해주세요.');
  return;
}

const user = validateUser(email, password);
if (user) {
  // 사용자 정보를 localStorage에 저장
  localStorage.setItem('user', JSON.stringify({
    email: user.email,
    name: user.name
  }));
  showMessage('로그인 성공!', false);
} else {
  showMessage('이메일 또는 비밀번호가 일치하지 않습니다.');
}
});

window.clearForm = function () {
  form.reset();
  messageList.innerHTML = '';
}

// Check if user is logged in
if (!localStorage.getItem("currentUser")) {
  window.location.href = "index.html";
}

// Todo 아이템 관리
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// DOM 요소
const todoList = document.getElementById('todoList');
const addTodoForm = document.getElementById('addTodoForm');
const saveTodoBtn = document.getElementById('saveTodoBtn');
const filterButtons = document.querySelectorAll('[data-filter]');

// Todo 렌더링 함수
function renderTodos(filteredTodos = todos) {
  todoList.innerHTML = filteredTodos.map(todo => `
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${todo.title}</h5>
                    <p class="card-text">${todo.description || ''}</p>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" 
                            ${todo.isCompleted ? 'checked' : ''} 
                            onchange="toggleTodo(${todo.id})">
                        <label class="form-check-label">완료</label>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Todo 추가
saveTodoBtn.addEventListener('click', () => {
  const formData = new FormData(addTodoForm);
  const title = formData.get('title');
  if (!title) return;

  const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
  const newTodo = {
    id: maxId + 1,
    title: title,
    description: formData.get('description'),
    isCompleted: formData.get('isCompleted') === 'on'
  };

  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();

  // 모달 닫기
  const modal = bootstrap.Modal.getInstance(document.getElementById('addTodoModal'));
  modal.hide();
  addTodoForm.reset();
});

// 필터 처리
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let filteredTodos = todos;

    if (filter === 'completed') {
      filteredTodos = todos.filter(todo => todo.isCompleted);
    } else if (filter === 'incomplete') {
      filteredTodos = todos.filter(todo => !todo.isCompleted);
    }

    renderTodos(filteredTodos);
  });
});

// Todo 완료 상태 토글
window.toggleTodo = (id) => {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.isCompleted = !todo.isCompleted;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

// 초기 렌더링
renderTodos();

// 테스트용 사용자 정보
const USERS = [
  { email: 'test@example.com', password: '1234' }
];

document.getElementById('googleForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  // 입력값 검증
  if (!email || !password) {
    showError('모든 항목을 입력해주세요.');
    return;
  }

  // 사용자 인증
  const user = USERS.find(u => u.email === email && u.password === password);

  if (user) {
    // 로그인 성공
    localStorage.setItem('user', JSON.stringify({ email: user.email }));
    errorMessage.classList.add('d-none');
    alert('로그인 성공!');
    clearForm();
  } else {
    // 로그인 실패
    showError('이메일 또는 비밀번호가 올바르지 않습니다.');
  }
});

function showError(message) {
  const errorMessage = document.getElementById('error-message');
  errorMessage.textContent = message;
  errorMessage.classList.remove('d-none');
}

function clearForm() {
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('error-message').classList.add('d-none');
}

// 테스트용 사용자 데이터
const users = [
  { email: 'test@test.com', password: '1234' }
];

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // 입력값 검증
  if (!email || !password) {
    errorMessage.textContent = "모든 항목을 입력해주세요.";
    errorMessage.classList.remove('d-none');
    return;
  }

  // 사용자 확인
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // 로그인 성공
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'todo.html';
  } else {
    // 로그인 실패
    errorMessage.textContent = "이메일 또는 비밀번호가 올바르지 않습니다.";
    errorMessage.classList.remove('d-none');
  }
});
