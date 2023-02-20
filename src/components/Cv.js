import React from "react";

export default class Cv extends React.Component {
  render() {
    const { name, email, phone, school, degree, graduationDate, company, position, startDate, endDate} = this.props.fields;
    return (
      <div className="container">
        <section>
          <h2>General</h2>
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </section>
        <section>
          <h2>Education</h2>
          <p>{school}</p>
          <p>{degree}</p>
          <p>{graduationDate}</p>
        </section>
        <section>
          <h2>Work</h2>
          <p>{company}</p>
          <p>{position}</p>
          <p>{startDate}</p>
          <p>{endDate}</p>
        </section>
        <button onClick={this.props.editHandler}>Edit</button>
      </div>
    )
  }
}