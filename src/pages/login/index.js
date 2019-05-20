import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as LoginActions } from "../../store/ducks/login";

class Login extends Component {
  state = {
    email: "",
    user: {}
  };

  login() {
    this.props.loginRequest(this.state.email);
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="container">
        <h1>THE IDDOG</h1>
        <div>
          <input
            type="text"
            placeholder="E-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          {this.props.login.error ? (
            <span> {this.props.login.error.message}</span>
          ) : (
            ""
          )}

          {!this.props.login.loading && (
            <button onClick={() => this.login()}>Entrar</button>
          )}
        </div>
        {this.props.login.user ? this.props.login.user.token : ""}
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
