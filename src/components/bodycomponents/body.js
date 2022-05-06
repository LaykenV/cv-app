import React, {Component} from "react";
import BodyLeft from "./bodyleft/bodyleft";
import BodyRight from "./bodyright/bodyright";


class Body extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="bodyContainer">
                <BodyLeft submitPersonal={this.props.submitPersonal} submitExperience={this.props.submitExperience} submitEducation={this.props.submitEducation}/>
                <BodyRight user={this.props.user} experiences={this.props.exp} userExp={this.props.userExp} educations={this.props.edu} userEdu={this.props.userEdu}/>
            </div>
        )
    }
}

export default Body;