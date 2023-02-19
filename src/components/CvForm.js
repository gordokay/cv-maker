import React from "react";
import FormInput from "./FormInput";

export default class CvForm extends React.Component {
  render() {
    const changeHandler = this.props.changeHandler;
    const { name, email, phone, school, degree, graduationDate, company, position, startDate, endDate} = this.props.fields;
    return (
      <form onSubmit={this.props.submitHandler}>
        <section>
          <h2>General</h2>
          <FormInput label="Name" type="text" name="name" value={name} changeHandler={changeHandler}/>
          <FormInput label="Email" type="email" name="email" value={email} changeHandler={changeHandler}/>
          <FormInput label="Phone number" type="tel" name="phone" value={phone} changeHandler={changeHandler}/>
        </section>
        <section>
          <h2>Education</h2>
          <FormInput label="School" type="text" name="school" value={school} changeHandler={changeHandler}/>
          <FormInput label="Degree" type="text" name="degree" value={degree} changeHandler={changeHandler}/>
          <FormInput label="Graduation date" type="date" name="graduationDate" value={graduationDate} changeHandler={changeHandler}/>
        </section>
        <section>
        <h2>Work</h2>
        <FormInput label="Company" type="text" name="company" value={company} changeHandler={changeHandler}/>
        <FormInput label="Position" type="text" name="position" value={position} changeHandler={changeHandler}/>
        <FormInput label="Start date" type="date" name="startDate" value={startDate} changeHandler={changeHandler}/>
        <FormInput label="End date" type="date" name="endDate" value={endDate} changeHandler={changeHandler}/>
        </section>
        <button>Submit</button>
      </form>
    )
  }
}