import React, { Component } from "react";
import axios from "axios";

class Tests extends Component {
  state = { contributors: [] };

  componentWillMount() {
    axios.get("/contributors/unassigned.json").then((response) => {
      const contributors = response.data;
      this.setState({
        contributors,
      });
    });
  }

  renderContributors() {
    return this.state.contributors.map(item => <div key={item.id}>{item.first_name}</div>);
  }

  render() {
    console.log(this.state);
    return <div>{this.renderContributors()}</div>;
  }
}

export default Tests;
