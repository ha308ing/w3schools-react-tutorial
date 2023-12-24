import React from "react";
import HooksContext from "../hooks/context";
import Ref from "../hooks/ref";
import Reducer from "../hooks/reducer";
import Callback from "../hooks/callback";
import Custom from "../hooks/custom";
import Effect from "../hooks/effect";
import State from "../hooks/state";

export default function Hooks() {
    /* 
        There are 3 rules for hooks:
        1. Hooks can only be called inside React function components.
        2. Hooks can only be called at the top level of a component.
        3. Hooks cannot be conditional

        useState
            to track state in a component
            const [state,setState] = useState(<initial state>)
            updateState(newState) = setState( previousState => newState )
            
        useEffect
            to perform side effects (e.g. fetching data, directly updating the DOM, and timers.)
            useEffect(<function>, <dependency>)
            
        createContext, useContext, <context-name>.Provider
            to manage state globally
        
        useRef
            allows to persist values between re-renders
            to store mutable values and not to cause re-renders on updates
            to have direct access to the DOM
            
        useReducer
            is like useState, but allows to implement custom state logic
            useReducer(<reducer>, <initial state>)
            returns [<state>, <dispatch>]
            
        useCallback
            returns a memoized callback function (that doesn't need to be recalculated)
            to isolate resource intensive functions so that they will not automatically run on every render
            only runs when one of its dependencies update
            function are recreated on each render,
                to prevent the function from being recreated unless necessary, use `useCallback`
        
        useMemo
            returns a memoized value
        
        custom hooks
    */

    return (
        <>
            <State />
            <hr />
            <Effect />
            <hr />
            <HooksContext />
            <hr />
            <Ref />
            <hr />
            <Reducer />
            <hr />
            <Callback />
            <hr />
            <Custom />
        </>
    );
}
