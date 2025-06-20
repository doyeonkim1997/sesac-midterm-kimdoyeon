// js/data.js
export const todos = [
  { id: 1, title: "HTML 기본 태그 복습", description: "p, h1~h6, ul 등", isCompleted: true, createdAt: "2024-01-01", dueDate: "2024-01-07", userId: 1 },
  { id: 2, title: "Flexbox 연습", description: "justify-content, align-items 사용", isCompleted: false, createdAt: "2024-01-02", dueDate: "2024-01-08", userId: 1 },
  { id: 3, title: "부트스트랩 Grid 시스템", description: "row, col 구조 이해", isCompleted: false, createdAt: "2024-01-03", dueDate: "2024-01-09", userId: 1 },
  { id: 4, title: "로그인 UI 만들기", description: "email, password 입력 필드", isCompleted: true, createdAt: "2024-01-04", dueDate: "2024-01-10", userId: 1 },
  { id: 5, title: "JS 이벤트 처리", description: "버튼 클릭 이벤트 연결", isCompleted: false, createdAt: "2024-01-05", dueDate: "2024-01-11", userId: 1 },
  { id: 6, title: "localStorage 학습", description: "토큰 저장/조회 구현", isCompleted: true, createdAt: "2024-01-06", dueDate: "2024-01-12", userId: 1 },
  { id: 7, title: "Card 컴포넌트 만들기", description: "할 일 항목 UI 구성", isCompleted: false, createdAt: "2024-01-07", dueDate: "2024-01-13", userId: 1 },
  { id: 8, "title": "filter 함수 사용법", description: "배열 조건 필터링", isCompleted: true, createdAt: "2024-01-08", dueDate: "2024-01-14", userId: 1 },
  { id: 9, title: "삼항 연산자 복습", description: "렌더링 조건 표현에 사용", isCompleted: false, createdAt: "2024-01-09", dueDate: "2024-01-15", userId: 1 },
  { id: 10, title: "Todo 삭제 기능 설계", description: "옵션 항목 (필수 아님)", isCompleted: false, createdAt: "2024-01-10", dueDate: "2024-01-16", userId: 1 },
  { id: 11, title: "폼 유효성 검사", description: "필수 입력 검사", isCompleted: true, createdAt: "2024-01-11", dueDate: "2024-01-17", userId: 1 },
  { id: 12, title: "자바스크립트 객체 이해", description: "key-value 구조", isCompleted: true, createdAt: "2024-01-12", dueDate: "2024-01-18", userId: 1 },
  { id: 13, title: "로그인 성공 후 페이지 이동", description: "window.location.href 사용", isCompleted: false, createdAt: "2024-01-13", dueDate: "2024-01-19", userId: 1 },
  { id: 14, title: "버튼 스타일링", description: "Bootstrap 버튼 색상 적용", isCompleted: true, createdAt: "2024-01-14", dueDate: "2024-01-20", userId: 1 },
  { id: 15, title: "아이콘 활용", description: "FontAwesome 체크 아이콘 사용", isCompleted: true, createdAt: "2024-01-15", dueDate: "2024-01-21", userId: 1 },
  { id: 16, title: "필터링 기능 완성", description: "전체, 완료, 미완료 구분", isCompleted: false, createdAt: "2024-01-16", dueDate: "2024-01-22", userId: 1 },
  { id: 17, title: "DOM 요소 선택", description: "getElementById, querySelector", isCompleted: true, createdAt: "2024-01-17", dueDate: "2024-01-23", userId: 1 },
  { id: 18, title: "모달 창 연습", description: "SweetAlert2 활용해보기", isCompleted: false, createdAt: "2024-01-18", dueDate: "2024-01-24", userId: 1 },
  { id: 19, title: "Todo 항목 정렬하기", description: "시간순 정렬 옵션 기획", isCompleted: false, createdAt: "2024-01-19", dueDate: "2024-01-25", userId: 1 },
  { id: 20, title: "배열 push/concat 복습", description: "할 일 추가 시 활용", isCompleted: true, createdAt: "2024-01-20", dueDate: "2024-01-26", userId: 1 },
  { id: 21, title: "취소선 처리", description: "text-decoration: line-through", isCompleted: true, createdAt: "2024-01-21", dueDate: "2024-01-27", userId: 1 },
  { id: 22, title: "CSS 상태에 따라 배경 변경", description: "완료 시 회색 배경", isCompleted: true, createdAt: "2024-01-22", dueDate: "2024-01-28", userId: 1 },
  { id: 23, title: "할 일 개수 출력", description: "총 개수 or 남은 항목 수 표시", isCompleted: false, createdAt: "2024-01-23", dueDate: "2024-01-29", userId: 1 },
  { id: 24, title: "날짜 출력 형식 기획", description: "옵션 항목", isCompleted: false, createdAt: "2024-01-24", dueDate: "2024-01-30", userId: 1 },
  { id: 25, title: "addEventListener 사용", description: "이벤트 동적 연결", isCompleted: true, createdAt: "2024-01-25", dueDate: "2024-01-31", userId: 1 },
  { id: 26, title: "폼 초기화 처리", description: "등록 후 input 값 비우기", isCompleted: true, createdAt: "2024-01-26", dueDate: "2024-02-01", userId: 1 },
  { id: 27, title: "Toast 메시지 띄우기", description: "등록 완료 메시지", isCompleted: false, createdAt: "2024-01-27", dueDate: "2024-02-02", userId: 1 },
  { id: 28, title: "Todo 목록 데이터 기반 렌더링", description: "map 함수 활용", isCompleted: true, createdAt: "2024-01-28", dueDate: "2024-02-03", userId: 1 },
  { id: 29, title: "페이지 새로고침 방지", description: "form submit 막기", isCompleted: true, createdAt: "2024-01-29", dueDate: "2024-02-04", userId: 1 },
  { id: 30, title: "할 일 상세 설명 보이기", description: "hover 또는 toggle 방식", isCompleted: false, createdAt: "2024-01-30", dueDate: "2024-02-05", userId: 1 },
];

export const users = [
  { id: 1, email: "user1@example.com", password: "password123" },
  { id: 2, email: "admin@example.com", password: "adminpass" },
  { id: 3, email: "guest@example.com", password: "guest" }
];