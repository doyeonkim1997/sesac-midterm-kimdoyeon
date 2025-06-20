document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // 간단한 유효성 검사
  if (email && password) {
    // 로그인 성공 가정 (실제로는 서버 통신 필요)
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);

    // todo 페이지로 리다이렉션
    window.location.href = 'todo.html';
  } else {
    document.getElementById('error-message').textContent = '이메일과 비밀번호를 입력해주세요.';
  }
});
const user = users.find(u => u.email === email && u.password === password);

if (user) {
  // 로그인 성공
  localStorage.setItem('currentUser', JSON.stringify({ email: user.email }));
  window.location.href = 'todo.html';
} else {
  errorMessage.textContent = '이메일 또는 비밀번호가 올바르지 않습니다.';
}
});
