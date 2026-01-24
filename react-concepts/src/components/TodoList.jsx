import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

// TodoList 컴포넌트: 전체 할 일 목록 데이터를 관리(State)하는 '부모' 역할
const TodoList = () => {
    // 1. State: 할 일 목록 데이터 (배열)
    const [todos, setTodos] = useState([
        { id: 1, text: '리액트 개념 공부하기', completed: false }
    ]);

    // 리액트는 단방향 데이터 흐름을 사용합니다.
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(), // 고유 ID 생성 (간단히 타임스탬프 사용)
            text: text,
            completed: false,
        };
        // 불변성 지키기: 기존 배열을 복사([...todos])하고 새 항목을 추가
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        // map을 사용하여 해당 id를 가진 항목만 업데이트된 새 배열 생성
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    // 할 일 삭제
    const deleteTodo = (id) => {
        // filter를 사용하여 해당 id를 뺀 새 배열 생성
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <div className="todo-list-container concept-card" style={{ borderColor: '#61dafb' }}>
            <h2>4. Practice: Todo List</h2>
            <p>단방향 데이터 바인딩 실습: Parent(List) → Child(Item/Input)</p>

            {/* 자식 1: 입력창 */}
            {/* 부모의 함수(addTodo)를 props로 내려줌 */}
            <TodoInput onAdd={addTodo} />

            {/* 자식 2: 목록 표시 */}
            <div className="todo-items-wrapper">
                {todos.length === 0 ? (
                    <p className="empty-message">할 일이 없습니다!</p>
                ) : (
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default TodoList;
