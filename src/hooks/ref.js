import { useState, useRef, useEffect } from "react";

export default function Ref() {
    const [inputValue, setInputValue] = useState("");

    // useRef to access value that doesn't modified between renders
    const count = useRef(0);

    // useRef to persist value
    const previousInputValue = useRef("");

    // useRef to directly access DOM element
    const inputElement = useRef();

    useEffect(() => {
        count.current += 1;
    });

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <h2 className="title is-2">useRef</h2>
            <input className="input" ref={inputElement} onChange={e => setInputValue(e.target.value)} />
            <pre>Previous input value {previousInputValue.current}</pre>
            <pre onClick={focusInput}>Count: {count.current}</pre>
        </>
    );
}
