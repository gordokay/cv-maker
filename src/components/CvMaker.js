import React from "react";
import Cv from "./Cv";
import CvForm from "./CvForm";

export default class CvMaker extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      school: "",
      degree: "",
      graduationDate: "",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      hasSubmitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      hasSubmitted: true
    })
  }

  handleEdit() {
    this.setState({
      hasSubmitted: false
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    if(this.state.hasSubmitted) {
      return <Cv fields={this.state} editHandler={this.handleEdit}/>
    }
    return <CvForm fields={this.state} changeHandler={this.handleChange} submitHandler={this.handleSubmit}/>
  }
}