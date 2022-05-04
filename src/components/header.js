import React, {Component} from "react";

class Header extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="headerContainer">
                <h1 className="headerText">Resume Generator</h1>
            </div>
        )
    }
}

export default Header;
