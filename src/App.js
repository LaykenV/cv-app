import './App.css';
import React, {Component} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/bodycomponents/body';
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      experiences: [],
      educations: [],
      user: {
        firstName: "",
        lastName: "",
        title: "Your Title",
        number: "",
        email: "",
        description: "About Yourself",
      },
      userExp: {
        position: "",
        company: "",
        expFrom: "",
        expTo: "",
        id: uniqid()
      },
      userEdu: {
        universityName: "",
        degree: "",
        eduFrom: "",
        eduTo: "",
        id: uniqid(),
      }
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
        },
    }, () => {
      e.target.elements.firstNameInput.value = "";
    e.target.elements.lastNameInput.value = "";
    e.target.elements.titleInput.value = "";
    e.target.elements.numberInput.value = "";
    e.target.elements.emailInput.value = "";
    e.target.elements.descriptionInput.value = "";
    console.log(this.state.user);
    });
}

  onSubmitEducation = (e) => {
    e.preventDefault();
    console.log(this.state.userEdu);
    this.setState({
      userEdu: {
        universityName: e.target.elements.universityInput.value,
        degree: e.target.elements.degreeInput.value,
        eduFrom: e.target.elements.fromInput.value,
        eduTo: e.target.elements.toInput.value,
        id: this.state.userEdu.id
      }
    }, () => {
      console.log(this.state.userEdu);
      this.setState({
        educations: this.state.educations.concat(this.state.userEdu),
        userEdu: {
          universityName: "",
          degree: "",
          eduFrom: "",
          eduTo: "",
          id: uniqid(),
        }
      })
      e.target.elements.universityInput.value = "";
      e.target.elements.degreeInput.value = "";
      e.target.elements.fromInput.value = "";
      e.target.elements.toInput.value = "";
      console.log("work");
    })
    console.log(this.state.educations);
  }

  onSubmitExperience = (e) => {
    e.preventDefault();
    console.log(this.state.userExp);
    this.setState({
      userExp: {
        position: e.target.elements.positionInput.value,
        company: e.target.elements.companyInput.value,
        expFrom: e.target.elements.fromInput.value,
        expTo: e.target.elements.toInput.value,
        id: this.state.userExp.id
      }
    }, () => {
      console.log(this.state.userExp);
      this.setState({
        experiences: this.state.experiences.concat(this.state.userExp),
        userExp: {
          position: "",
          company: "",
          expFrom: "",
          expTo: "",
          id: uniqid()
        }
      })
      e.target.elements.positionInput.value = "";
      e.target.elements.companyInput.value = "";
      e.target.elements.fromInput.value = "";
      e.target.elements.toInput.value = "";
      console.log("work");
    })
    console.log(this.state.experiences);
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Body user={this.state.user} userExp={this.state.userExp} userEdu={this.state.userEdu} submitPersonal={this.onSubmitPersonal} submitExperience={this.onSubmitExperience} exp={this.state.experiences} submitEducation={this.onSubmitEducation} edu={this.state.educations}/>
        <Footer />
      </div>
    );
  }
}

export default App;
