import React from "react";
import { Car } from "./Car";
import { CarwashButton } from "./CarwashButton";

export class CarWash extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
    }

    /* 
        Component Lifecycle
        1. Mounting
        2. Updating
        3. Unmounting
        
        * is required, others will be called if defined
    */

    /* 
        Mounting phase - putting elements into the DOM
        1. constructor(props)
            - called when component is initiated
            - set initial `state`
        2. getDerivedStateFromProps(props,state)
            - set `state` based on the initial `props`
            - (updates `state` from initial before render)
            - returns state object
        3*. render()
        4. componentDidMount()
            - run statements that requires that the component
                is already placed in the DOM
    */

    /* 
        Updating phase - when component is updated
        1. getDerivedStateFromProps(props,state)
        2. shouldComponentUpdate()
            - return a Boolean that specifies whether
                React should continue with the rendering or not
                default is true
        3*. render()
        4. getSnapshotBeforeUpdate(prevProps, prevState)
            - gives access to the `props` and `state`
                before the update
                (i.e. even after the update, you can check what the values were before the update)
                requires `componentDidUpdate()` method
        5. componentDidUpdate()
        
    */
   
   /* 
        Unmounting - when a component is removed from the DOM
        1. componentWillUnmount()
            - is called when a component is about to be unmounted
    */

    // shouldComponentUpdate() {
    //     return false;
    // }

    changeColor = () => {
        const currentState = this.state.open;
        this.setState({ open: !currentState });
    };

    render() {
        // return <h1>CarWash is {this.state.color}</h1>;
        return (
            <>
                <h1 onClick={this.changeColor}>
                    <Car model="Toyota" /> in CarWash is {this.state.open ? <i>opened</i> : <i>not opened</i>}
                </h1>
                <CarwashButton open={this.state.open} handleClick={this.changeColor} />
            </>
        );
    }
}
