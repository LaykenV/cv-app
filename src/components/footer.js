import React, {Component} from "react";

class Footer extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="footerContainer">
                <p className="footerText">Copyright © 2022 LaykenV</p>
            </div>
        )
    }
}

export default Footer;