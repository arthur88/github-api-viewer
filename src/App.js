import React from "react";
import Git from "./Git";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gituname: ""
    };
  }

  handleChange = e => {
    this.setState({ gituname: e.target.value });
  };

  render() {
    return (
      <div className="search-firm-inline">
        <input
          type="text"
          name="gituname"
          className="form-control"
          placeholder="Github username"
          value={this.state.gituname}
          onChange={this.handleChange}
        />
        <Git gitusername={this.state.gituname} />
      </div>
    );
  }
}
