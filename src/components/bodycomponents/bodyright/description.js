import React, {Component} from "react";

class ResumeDescription extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="resumeDescriptionContainer">
                <div className="resumeDescription">{this.props.user.description}</div>
            </div>
        )
    }
}

export default ResumeDescription;