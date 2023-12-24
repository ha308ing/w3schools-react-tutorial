import React from "react";
import { memo } from "react";

export default function Memo() {
    const [count, setCount] = React.useState(0);
    const [todos] = React.useState([
        { id: 1, todo: "todo 1" },
        { id: 2, todo: "todo 2" },
    ]);

    const increment = () => {
        setCount(c => c + 1);
    };

    // Todos component only re-renders when the todos that are passed to it through props are updated.
    const TodoListMemo = memo(TodoList);

    return (
        <>
            <h1>Memo</h1>
            <hr />
            <div>
                Count: {count}
                <button className="button" onClick={increment}>
                    +
                </button>
            </div>
            <div>
                <TodoListMemo todos={todos} />
            </div>
        </>
    );
}

function TodoList({ todos }) {
    return (
        <>
            <h2>My ToDo</h2>
            {todos.map(t => (
                <p key={t.id}>{t.todo}</p>
            ))}
        </>
    );
}

/* function TodoListMemo() {
    return function (props) {
        return memo(TodoList(props));
    };
} */

// export default memo(TodoList)
