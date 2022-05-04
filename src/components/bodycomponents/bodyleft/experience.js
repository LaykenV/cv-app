import React, {Component} from "react";

class Experience extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="experienceInputs">
                <form id="experienceForm" action="get" onSubmit={null}>
                <div>Experience</div>
                <input type = "text" id="positionInput" placeholder="Position"></input>
                <input type = "text" id="companyInput"placeholder="Company"></input>
                <input type = "text" id="cityInput" placeholder="City"></input>
                <input type= "date" id="fromInput" placeholder="From"></input>
                <input type= "date" id="toInput" placeholder="To"></input>
                <button type="submit">Add to Resume</button>
                </form>
            </div>
        )
    }
}

export default Experience;