import React from "react";

export default class FormInput extends React.Component {
  render() {
    const {label, type, name, value, changeHandler} = this.props;
    return (
      <label>
        {label}
        <input type={type} name={name} value={value} onChange={changeHandler} />
      </label>
    )
  }
}