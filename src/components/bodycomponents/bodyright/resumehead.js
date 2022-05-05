import React, {Component} from "react";

class ResumeHeader extends Component {


    render() {
        return(
            <div className="resumeHeader">
                <div className="resumeName">{this.props.user.firstName} {this.props.user.lastName}</div>
                <div className="resumeTitle">{this.props.user.title}</div>
                <div className="contactInfo">
                    <div className="resumeEmail">Email: {this.props.user.email}</div>
                    <div className="resumePhoneNumber">Phone Number: {this.props.user.number}</div>
                </div>
            </div>
        )
    }
}

export default ResumeHeader;