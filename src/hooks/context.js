import React from "react";

const UserContext = React.createContext();

export default function HooksContext() {
    return <Component1 />;
}

function Component1() {
    const [user] = React.useState({ name: "Peter", age: 25 });

    return (
        <UserContext.Provider value={user}>
            <h2 className="title is-2">useContext hook</h2>
            <h3 className="title is-4">Component 1, hello, {user.name}!</h3>
            <Component2 />
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
            <h3 className="title is-4">Component 2 </h3>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h3 className="title is-4">Component 3</h3>
            <Component4 />
        </>
    );
}

function Component4() {
    const user = React.useContext(UserContext);

    return <h3 className="title is-4">Component 4. Hello, {user.name}!</h3>;
}
