import React, {Component} from "react";

class ResumeEducation extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="resumeEducationContainer">
                <div className="educationDates">From - To</div>
                <div className="educationInfo">
                    <div className="universityName">University name</div>
                    <div className="degreeInfo">Degree: </div>
                    <div className="subjectInfo">Subject:</div>
                </div>
            </div>
        )
    }
}

export default ResumeEducation;