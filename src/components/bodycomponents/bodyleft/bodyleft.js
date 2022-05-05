import React, {Component} from "react";
import Personal from "./personal";
import Experience from "./experience";
import Education from "./education";

class BodyLeft extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="bodyLeftContainer">
                <Personal user={this.props.user} submitPersonal={this.props.submitPersonal} />
                <Experience submitExperience={this.props.submitExperience} />
                <Education />
            </div>
        )
    }
}

export default BodyLeft;