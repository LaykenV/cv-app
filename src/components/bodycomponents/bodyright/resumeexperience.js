import React, {Component} from "react";

class ResumeExperience extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="resumeExperienceContainer">
                <div className="experienceDates">2017 - 2021</div>
                <div className="experienceInfo">
                    <div className="experienceTitle">Ammo troop</div>
                    <div className="experienceCompany">Air Force</div>
                </div>
                 
            </div>
        )
    }
}

export default ResumeExperience;