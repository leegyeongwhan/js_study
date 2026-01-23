import { useState } from 'react';

// TodoInput 컴포넌트: 새로운 할 일을 입력받는 역할
// 부모(TodoList)에게 "입력된 값"을 전달하기만 합니다. (부모의 addTodo 함수 호출)
const TodoInput = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState(''); // 로컬 상태: 입력창의 현재 값

    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 새로고침 방지
        if (!inputValue.trim()) return; // 빈 값 방지

        onAdd(inputValue); // 부모에게 데이터 전달 (Props Callback)
        setInputValue(''); // 입력창 비우기
    };

    return (
        <form onSubmit={handleSubmit} className="todo-input-form">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="할 일을 입력하세요..."
                className="todo-input"
            />
            <button type="submit" className="add-button">추가</button>
        </form>
    );
};

export default TodoInput;
