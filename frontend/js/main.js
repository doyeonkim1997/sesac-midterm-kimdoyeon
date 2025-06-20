import { users } from './users.js';

const form = document.getElementById('googleForm');
const messageList = document.getElementById('messageList');

function showMessage(message, isError = true) {
  const li = document.createElement('li');
  li.textContent = message;
  li.className = `list-group-item ${isError ? 'list-group-item-danger' : 'list-group-item-success'}`;
  messageList.appendChild(li);
}

function validateUser(email, password) {
  return users.find(user => user.email === email && user.password === password);
}

form.addEventListener('submit', (e) => {
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

let todos = JSON.parse(localStorage.getItem("todos") || "[]");
let currentFilter = "all";

// Render todos based on filter
function renderTodos() {
  const todoList = document.getElementById("todoList");
  const filteredTodos = todos.filter(todo => {
    if (currentFilter === "completed") return todo.isCompleted;
    if (currentFilter === "incomplete") return !todo.isCompleted;
    return true;
  });

  todoList.innerHTML = filteredTodos.map(todo => `
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${todo.title}</h5>
                    <p class="card-text">${todo.description || "설명 없음"}</p>
                    <p class="card-text">
                        <small class="text-muted">
                            상태: ${todo.isCompleted ? "완료" : "미완료"}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    `).join("");
}

// Filter button handlers
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', (e) => {
    currentFilter = e.target.dataset.filter;
    renderTodos();
  });
});

// Add todo handler
document.getElementById('saveTodoBtn').addEventListener('click', () => {
  const form = document.getElementById('addTodoForm');
  const formData = new FormData(form);

  const newTodo = {
    id: Math.max(0, ...todos.map(t => t.id)) + 1,
    title: formData.get('title'),
    description: formData.get('description'),
    isCompleted: formData.get('isCompleted') === 'on'
  };

  if (!newTodo.title) return;

  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));

  bootstrap.Modal.getInstance(document.getElementById('addTodoModal')).hide();
  form.reset();
  renderTodos();
});

// Initial render
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
