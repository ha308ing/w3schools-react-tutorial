import React from "react";
import Header from "./Header";

export default class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { show: true };
    }

    delHeader = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div>
                {this.state.show ? (
                    <>
                        <Header color="teal" />
                        <button type="button" className="button is-danger" onClick={this.delHeader}>
                            Delete Header
                        </button>
                    </>
                ) : (
                    <pre>No header</pre>
                )}
            </div>
        );
    }
}
