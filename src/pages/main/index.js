import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { Creators as DogActions } from "../../store/ducks/dogs";
import "./styles.css";

class Main extends Component {
  state = {
    dogs: [],
    category: "",
    token: ""
  };

  componentDidMount() {
    this.props.feed({ category: "" });
  }

  componentDidUpdate() {
    console.tron.log("home", this.props);
  }
  render() {
    return (
      <div>
        {this.props.dogs.category.map(c => (
          <li key={c}>
            <a href="#"> {c} </a>
          </li>
        ))}
        <div className="container-fluid">
          {this.props.dogs.list.map(dog => (
            <div className="mbr-justify-content-center mbr-row" key={dog}>
              <img src={dog} alt="dogs" className="imgWidth" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dogs: state.dogs
});

const mapDispatchToProps = dispatch => bindActionCreators(DogActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
