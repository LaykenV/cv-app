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
                <BodyLeft user={this.props.user} submitPersonal={this.props.submitPersonal} submitExperience={this.props.submitExperience} />
                <BodyRight user={this.props.user} experiences={this.props.exp}/>
            </div>
        )
    }
}

export default Body;