import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

class BtnDispatch extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };

    this.testClicked = this.testClicked.bind(this);
  }

  testClicked(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    this.props.addArticle();
  }

  render() {
    return (
      <div>
        <button onClick={this.testClicked}>Activate Lasers</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: () => dispatch(addArticle())
  };
};

const MasterButton = connect(
  null,
  mapDispatchToProps
)(BtnDispatch);
export default MasterButton;
