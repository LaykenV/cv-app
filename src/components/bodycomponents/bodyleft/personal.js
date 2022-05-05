import React, {Component} from "react";

class Personal extends Component {
    constructor() {
        super();
    }


    render() {
        return(
            <div className="personalInputs">
                <form action="get" onSubmit={this.props.submitPersonal}>
                    <div>Personal Information</div>
                    <input type = "text" id="firstNameInput" placeholder="First Name" required></input>
                    <input type = "text" id="lastNameInput" placeholder="Last Name" required></input>
                    <input type = "text" id="titleInput" placeholder="Title" required></input>
                    <input type = "text" id="numberInput" placeholder="Phone Number" required></input>
                    <input type = "email" id="emailInput" placeholder="Email" required></input>
                    <input type = "text" id="descriptionInput" placeholder="Description" required></input>
                    <button type="submit">Update Resume</button>
                </form>
            </div>
        )
    }
}

export default Personal;