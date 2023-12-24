import React from "react";
import ColorButton from "../ColorButton";

export default function State() {
    const [myFav, setMyFav] = React.useState({
        pet: "dog",
        color: "",
    });

    /*
        function updateColor(color) {
            setMyFav(previousState => ({
                ...previousState,
                color,
            }));
        }
    */

    const updateColor = color => setMyFav(prevState => ({ ...prevState, color }));

    /* 
        There are 3 rules for hooks:
        1. Hooks can only be called inside React function components.
        2. Hooks can only be called at the top level of a component.
        3. Hooks cannot be conditional

        UseState to track state in a component
            const [state,setState] = useState(<initial state>)
            updateState(newState) = setState( previousState => newState )
        UseEffect to perform side effects (e.g. fetching data, directly updating the DOM, and timers.)
            useEffect(<function>, <dependenc
    */

    return (
        <>
            <h2 className="title is-2">useState hook</h2>
            <h3>
                My favorite pet is {myFav.pet} {myFav.color && `color ${myFav.color}`}
            </h3>
            <ColorButton color="green" colorSetter={updateColor} />
            <ColorButton color="blue" colorSetter={updateColor} />
            <ColorButton color="pink" colorSetter={updateColor} />
            <ColorButton color="yellow" colorSetter={updateColor} />
        </>
    );
}
