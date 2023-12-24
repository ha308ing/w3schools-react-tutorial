import React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { color: "red" };
    }

    /*     static getDerivedStateFromProps(props, state) {
        return { color: props.color };
    }

    shouldComponentUpdate() {
        return true;
    } */

    handleClick = () => {
        this.setState({ color: "cyan" });
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: "blue" });
        }, 2000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const div1 = document.getElementById("div1");
        div1.textContent = `Before the update Header color was: ${prevState.color}`;
        return null;
    }

    componentDidUpdate() {
        const div2 = document.getElementById("div2");

        div2.textContent = `The updated Header color is: ${this.state.color}`;
    }

    componentWillUnmount() {
        alert("the component named Header is about to be unmounted");
    }

    render() {
        return (
            <div style={{ color: this.state.color }} onClick={this.handleClick}>
                <h1 className="title">Header {this.state.color}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}
