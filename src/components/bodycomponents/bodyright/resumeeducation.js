import React, {Component} from "react";

class ResumeEducation extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <ul id="ul">
                {this.props.educations.map((education) => {
                    return (
                    <div className="resumeEducationContainer" key={education.id}>
                        <div className="educationDates">{education.eduFrom} - {education.eduTo}</div>
                        <div className="educationInfo">
                            <div className="universityName">{education.universityName}</div>
                            <div className="degreeInfo">{education.degree}</div>
                            <div className="subjectInfo">{education.subject}</div>
                        </div>
                    </div>
                    )
                })}
            </ul>
        )
    }
}

export default ResumeEducation;