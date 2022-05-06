import React, {Component} from "react";
import ResumeDescription from "./description";
import ResumeEducation from "./resumeeducation";
import ResumeExperience from "./resumeexperience";

class ResumeBody extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="resumeBody">
                <div className="resumeDescription">
                    <div className="descriptionHeader">Description</div>
                    <ResumeDescription user={this.props.user} />
                </div>
                <div className="resumeExperience">
                    <div className="experienceHeader">Experience</div>
                    <ResumeExperience experiences={this.props.experiences} userExp={this.props.userExp}/>
                </div>
                <div className="resumeEducation">
                    <div className="educationHeader">Education</div>
                    <ResumeEducation educations={this.props.educations} userEdu={this.props.userEdu}/>
                </div>
            </div>
        )
    }
}

export default ResumeBody;