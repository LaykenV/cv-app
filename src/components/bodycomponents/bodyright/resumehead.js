import React, {Component} from "react";

class ResumeHeader extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="resumeHeader">
                <div className="resumeName">Layken Varholdt</div>
                <div className="resumeTitle">Front-end Web Developer</div>
                <div className="resumePhoneNumber">Phone Number</div>
                <div className="resumeEmail">Email</div>
            </div>
        )
    }
}

export default ResumeHeader;