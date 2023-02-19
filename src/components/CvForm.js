import React from "react";
import FormInput from "./FormInput";

export default class CvForm extends React.Component {
  render() {
    const changeHandler = this.props.changeHandler;
    return (
      <form>
        <section>
          <h2>General</h2>
          <FormInput label="Name" type="text" name="name" value={this.props.name} changeHandler={changeHandler}/>
          <FormInput label="Email" type="email" name="email" value={this.props.email} changeHandler={changeHandler}/>
          <FormInput label="Phone number" type="tel" name="phone" value={this.props.phone} changeHandler={changeHandler}/>
        </section>
        <section>
          <h2>Education</h2>
          <FormInput label="School" type="text" name="school" value={this.props.school} changeHandler={changeHandler}/>
          <FormInput label="Degree" type="text" name="degree" value={this.props.degree} changeHandler={changeHandler}/>
          <FormInput label="Graduation date" type="date" name="graduationDate" value={this.props.graduationDate} changeHandler={changeHandler}/>
        </section>
        <section>
        <h2>Work</h2>
        <FormInput label="Company" type="text" name="company" value={this.props.company} changeHandler={changeHandler}/>
        <FormInput label="Position" type="text" name="position" value={this.props.position} changeHandler={changeHandler}/>
        <FormInput label="Start date" type="date" name="startDate" value={this.props.startDate} changeHandler={changeHandler}/>
        <FormInput label="End date" type="date" name="endDate" value={this.props.endDate} changeHandler={changeHandler}/>
        </section>
      </form>
    )
  }
}