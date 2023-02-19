import React from "react";

export default class Cv extends React.Component {
  render() {
    return (
      <button onClick={this.props.editHandler}>Edit</button>
    )
  }
}