import './App.css';
import React, {Component} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/bodycomponents/body';

class App extends Component {
  constructor() {
    super();
    this.state = {
      experiences: Array(),
      user: {
        firstName: "",
        lastName: "",
        title: "Your Title",
        number: "",
        email: "",
        description: "About Yourself",
        position: "",
        company: "",
        expFrom: "",
        expTo: "",
        universityName: "",
        degree: "",
        subject: "",
        eduFrom: "",
        eduTo: "" },
      educations: []
      }
  }

  onSubmitPersonal = (e) => {
    e.preventDefault();
    this.setState({
        user: {
            firstName: e.target.elements.firstNameInput.value,
            lastName: e.target.elements.lastNameInput.value,
            title: e.target.elements.titleInput.value,
            number: e.target.elements.numberInput.value,
            email: e.target.elements.emailInput.value,
            description: e.target.elements.descriptionInput.value,
        }
    })
    e.target.elements.firstNameInput.value = "";
    e.target.elements.lastNameInput.value = "";
    e.target.elements.titleInput.value = "";
    e.target.elements.numberInput.value = "";
    e.target.elements.emailInput.value = "";
    e.target.elements.descriptionInput.value = "";
    console.log(this.state.experiences);
}

  onSubmitExperience = (e) => {
    e.preventDefault();
    this.setState({
      user: {
        position: e.target.elements.positionInput.value,
        company: e.target.elements.companyInput.value,
        expFrom: e.target.elements.fromInput.value,
        expTo: e.target.elements.toInput.value
      },
      experiences: this.state.experiences.concat(this.state.user),
    })
    e.target.elements.positionInput.value = "";
    e.target.elements.companyInput.value = "";
    e.target.elements.fromInput.value = "";
    e.target.elements.toInput.value = "";
    console.log(this.state.experiences);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body user={this.state.user} submitPersonal={this.onSubmitPersonal} submitExperience={this.onSubmitExperience} exp={this.state.experiences}/>
        <Footer />
      </div>
    );
  }
}

export default App;
