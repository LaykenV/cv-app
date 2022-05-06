import React, {Component} from "react";
import ResumeHeader from "./resumehead";
import ResumeBody from "./resumebody";


class BodyRight extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="bodyRightContainer">
                    <ResumeHeader user={this.props.user} />
                    <ResumeBody user={this.props.user} experiences={this.props.experiences} userExp={this.props.userExp} educations={this.props.educations} userEdu={this.props.userEdu}/>
            </div>
        )
    }
}

export default BodyRight;