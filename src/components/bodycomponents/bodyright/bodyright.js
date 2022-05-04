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
                <ResumeHeader />
                <ResumeBody />
            </div>
        )
    }
}

export default BodyRight;