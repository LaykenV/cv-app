import React, {Component} from "react";

class ResumeExperience extends Component {
    constructor() {
        super();
        this.state = {};
    }

 render() {
     return (
         <ul id="ul">
             {this.props.experiences.map((experience) => {
                 return (
                    <div className="resumeExperienceContainer" key={experience.id}>
                    <div className="experienceDates">{experience.expFrom} - {experience.expTo}</div>
                    <div className="experienceInfo">
                      <div className="experienceTitle">{experience.position}</div>
                      <div className="experienceCompany">{experience.company}</div>
                    </div>
                  </div>
                 )
             })}
         </ul>
     )
 }
}

export default ResumeExperience;