import React, {Component} from "react";

class Education extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="educationInputs">
                <form id="educationForm" action="get" onSubmit={this.props.submitEducation}>
                    <div>Education</div>
                    <input type = "text" id="universityInput" placeholder="University Name"></input>
                    <input type = "text" id="degreeInput" placeholder="Degree"></input>
                    <input type= "date" id="fromInput" placeholder="From"></input>
                    <input type= "date" id="toInput" placeholder="To"></input>
                    <button type="submit">Add to Resume</button>
                </form>
            </div>
        )
    }
}

export default Education;