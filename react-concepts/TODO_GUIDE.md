# React Todo List 학습 가이드 (TODO_GUIDE.md)

이 문서는 `Todo List` 코드를 통해 리액트의 핵심 개념을 학습하기 위해 작성되었습니다.
`STUDY_NOTES.md`에서 배운 개념이 실제로 어떻게 적용되었는지 확인해 보세요.

---

## 1. 컴포넌트 구조 분해

기존의 통짜 코드 대신, 역할을 명확히 나누었습니다.

- **`TodoList.jsx` (부모)**: "데이터(State) 관리자"
  - `todos` 배열(State)을 가지고 있습니다.
  - 데이터를 수정하는 함수(`addTodo`, `toggleTodo`, `deleteTodo`)를 만듭니다.
- **`TodoInput.jsx` (자식)**: "입력 담당"
  - 사용자가 입력한 내용을 부모에게 전달만 합니다 (`onAdd` 함수 호출).
- **`TodoItem.jsx` (자식)**: "표시 담당"
  - 할 일 하나를 보여주고, 체크박스나 삭제 버튼을 누르면 부모에게 알립니다 (`onToggle`, `onDelete` 함수 호출).

> **핵심**: "누가 state를 가질 것인가?" -> **"데이터를 사용하는 컴포넌트들의 공통 부모"**가 가집니다.

---

## 2. 단방향 데이터 바인딩 (Unidirectional Data Flow)

코드에서 데이터가 흐르는 방향을 보세요. 절대 거꾸로 흐르지 않습니다.

### ⬇️ Props (데이터 내려주기)
`TodoList` 부모 컴포넌트가 자식들에게 데이터를 내려줍니다.
```jsx
// TodoList.jsx
<TodoItem 
  todo={todo}          // 데이터 전달
  onToggle={toggleTodo} // 함수도 전달 (리모컨)
/>
```

### ⬆️ Event (이벤트 올려주기)
자식은 부모의 데이터를 **직접 수정할 수 없습니다.**
대신 부모가 준 **함수(리모컨)**를 실행해서 "이거 수정해줘요!" 하고 요청합니다.
```jsx
// TodoItem.jsx
<button onClick={() => onDelete(todo.id)}>삭제</button>
// 이 버튼을 누르면 부모(TodoList)에 있는 deleteTodo 함수가 실행됩니다.
```

---

## 3. 리액트의 불변성 (Immutability)

`TodoList.jsx`에서 `todos`를 수정하는 코드를 자세히 보세요.

**❌ 나쁜 예 (직접 수정)**
```javascript
todos.push(newTodo); // 원본 배열을 건드림! 리액트가 모룸.
```

**✅ 좋은 예 (새로운 복사본 만들기)**
```javascript
// 전개 연산자 (...) 사용
setTodos([...todos, newTodo]); // 기존 것 펼치고, 새 것 추가한 '새 배열'
```

이렇게 해야 리액트가 "어? 데이터가 주소값부터 완전히 새로운 걸로 바뀌었네? 화면 다시 그려야겠다!" 하고 알아차립니다.

---

## 4. 학습 포인트 (따라해 보기)

1. **코드 읽기**: `TodoList.jsx` → `TodoInput.jsx`, `TodoItem.jsx` 순서로 코드를 읽어보세요. 데이터가 어떻게 흘러가는지 머릿속으로 그려보세요.
2. **수정해 보기**: "모두 삭제" 버튼을 `TodoList`에 추가해 보세요.
   - `clearTodos` 같은 함수를 만들고, `setTodos([])`를 하면 되겠죠?
3. **스타일링**: `index.css`를 열어 색상이나 배치를 바꿔보세요.

이 실습을 통해 **"State는 부모가, Props는 자식이"** 라는 원칙을 확실히 익히시길 바랍니다!
