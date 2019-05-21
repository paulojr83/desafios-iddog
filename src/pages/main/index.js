import React, { Component } from "react";
import { Link } from "react-router-dom";
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

  handleClick(category) {
    this.props.feed({ category });
  }

  logout() {
    localStorage.removeItem("token");
    this.props.history.go("/");
  }
  render() {
    return (
      <div className="container">
        <div className="grid second-nav">
          <nav>
            <ol className="dogs-item">
              {this.props.dogs.category.map(c => (
                <li key={c} className="dogs-item-li" id={c}>
                  <a href="#" onClick={() => this.handleClick(c)}>
                    {c}
                  </a>
                </li>
              ))}
            </ol>

            <a href="#" className="logout" onClick={() => this.logout()}>
              Logout
            </a>
          </nav>
        </div>
        <div className="gallery-container">
          <div className="gallery" id="gallery">
            {this.props.dogs.list.map(dog => (
              <div className="gallery-item" key={dog}>
                <div className="content">
                  <img src={dog} alt="dogs" />
                </div>
              </div>
            ))}
          </div>
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
