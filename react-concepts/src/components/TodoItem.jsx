// TodoItem 컴포넌트: 할 일 하나를 보여주는 역할
// 상태를 직접 바꾸지 않고, 부모(TodoList)가 준 함수(onToggle, onDelete)를 호출합니다.
const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)} // 체크박스 변경 시 부모에게 알림
            />
            <span className="todo-text">{todo.text}</span>
            <button
                onClick={() => onDelete(todo.id)} // 삭제 버튼 클릭 시 부모에게 알림
                className="delete-button"
            >
                삭제
            </button>
        </div>
    );
};

export default TodoItem;
