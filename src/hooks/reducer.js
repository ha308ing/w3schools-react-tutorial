import { useReducer } from "react";

const initialTodos = [
    { id: 1, title: "Todo 1", complete: false },
    { id: 2, title: "Todo 2", complete: false },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map(todo => (todo.id === action.id ? { ...todo, complete: !todo.complete } : todo));
        default:
            return state;
    }
};

export default function Reducer() {
    // useReducer is like useState, but allows to implement custom state logic
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = todo => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            <h2 className="title is-2 mt-4">useReducer</h2>
            {todos.map(todo => (
                <div key={todo.id}>
                    <label className="checkbox">
                        <input
                            className="mr-3"
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => {
                                handleComplete(todo);
                            }}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    );
}
