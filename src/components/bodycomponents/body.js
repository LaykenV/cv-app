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
                <BodyLeft />
                <BodyRight />
            </div>
        )
    }
}

export default Body;