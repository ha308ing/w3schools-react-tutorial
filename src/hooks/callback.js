import { useCallback, useState, memo, useMemo } from "react";

export default function Callback() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount(c => c + 1);
    };

    const addTodo = useCallback(() => {
        setTodos(t => [...t, "new todo"]);
    }, []);

    const TodosMemo = memo(Todos, [todos]);

    return (
        <>
            <h2 className="title is-2 mt-4">useCallback</h2>
            <TodosMemo todos={todos} addTodo={addTodo} />
            <hr />
            Count: {count}
            <button className="button is-light" onClick={increment}>
                +
            </button>
            <h3 className="title is-5">Expensive Calculation</h3>
            {calculation}
        </>
    );
}

function expensiveCalculation(num) {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
}

function Todos({ todos, addTodo }) {
    console.log("child render");

    return (
        <>
            <div>
                <h3 className="title is-5">My todo</h3>
                {todos.map((todo, index) => (
                    <p key={index}>{todo}</p>
                ))}
                <button className="button is-light" onClick={addTodo}>
                    Add Todo
                </button>
            </div>
        </>
    );
}
