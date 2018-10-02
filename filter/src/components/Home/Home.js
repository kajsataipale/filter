import React, { Component } from "react";
import Header from "../Header/Header.js";
class Home extends Component {
  render() {

    return (
      <div className="parties">
        <Header src={window.location.origin + '/images/Filter_logo.svg'} mode='fit' height={'14vh'} width={'14vh'}  />
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;