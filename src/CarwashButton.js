import React from "react";

export class CarwashButton extends React.Component {
    render() {
        return (
            <button className="button is-warning" onClick={this.props.handleClick}>
                {this.props.open ? "Close" : "Open"} carwash
            </button>
        );
    }
}
