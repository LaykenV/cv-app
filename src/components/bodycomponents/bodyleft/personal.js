import React, {Component} from "react";

class Personal extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="personalInputs">
                <form action="get" onSubmit={null}>
                    <div>Personal Information</div>
                    <input type = "text" id="firstNameInput" placeholder="First Name"></input>
                    <input type = "text" id="lastNameInput" placeholder="Last Name"></input>
                    <input type = "text" id="titleInput" placeholder="Title"></input>
                    <input type = "number" id="phoneNumberInput" placeholder="Phone Number"></input>
                    <input type = "email" id="emailInput" placeholder="Email"></input>
                    <input type = "text" id="descriptionInput" placeholder="Description"></input>
                    <button type="submit">Update Resume</button>
                </form>
            </div>
        )
    }
}

export default Personal;