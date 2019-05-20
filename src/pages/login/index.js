import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as LoginActions } from "../../store/ducks/login";
import "./styles.css";

class Login extends Component {
  state = {
    email: "",
    user: {}
  };
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      this.props.history.push("/home");
    }
  }

  login() {
    this.props.loginRequest(this.state.email);
  }

  componentDidUpdate() {
    if (this.props.login.user.token) {
      localStorage.setItem("token", this.props.login.user.token);
      this.props.history.push("/home");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="card" />
        <div className="card">
          <h1 className="title">THE IDDOG</h1>
          <form>
            <div className="input-container">
              <input
                type="#{type}"
                id="#{label}"
                required="required"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <label htmlFor="#{label}">E-mail</label>
              <div className="bar" />
            </div>

            {this.props.login.error ? (
              <span className="pen-title">
                {this.props.login.error.message}
              </span>
            ) : (
              ""
            )}

            <div className="button-container">
              {!this.props.login.loading ? (
                <button onClick={() => this.login()}>
                  <span>Go</span>
                </button>
              ) : (
                "Loading"
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
