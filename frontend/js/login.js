import { login } from './users.js';

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const result = login(email, password);
  if (result.success) {
    alert('로그인 성공!');
    localStorage.setItem('user', JSON.stringify(result.user));
    // 로그인 성공 후 리다이렉트
    window.location.href = '/main.html';
  } else {
    alert(result.message);
  }
});
