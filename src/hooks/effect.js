import React from "react";

export default function Effect() {
    const [count, setCount] = React.useState(0);
    const [calculation, setCalculation] = React.useState(0);

    React.useEffect(() => {
        const t = setTimeout(() => {
            setCount(count => count + 1);
        }, 1000);

        return () => clearTimeout(t);
    }, []);

    // }); no deps: runs on every render
    // }, []); // empty deps: runs only on the first render
    // }, [props, state] }); update on first render, and any time any dependency value changes
    // useEffect returns function to clean up

    React.useEffect(() => {
        setCalculation(count * 2);
    }, [count]);

    return (
        <>
            <h2 className="title is-2">useEffect hook</h2>
            <p>I've been rendered {count} times</p>
            <button className="button is-light" onClick={() => setCount(count => count + 1)}>
                +
            </button>
            <p>calculation: {calculation}</p>
        </>
    );
}
