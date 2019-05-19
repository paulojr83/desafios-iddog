import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/login";

class Login extends Component {
  state = {
    email: "",
    user: {}
  };

  login() {
    this.props.loginRequest(this.state.email);
  }

  componentDidUpdate(){
    console.tron.log(this.props.login.error)

  }
  render() {

    return (
      <Fragment>
        <h1>Login</h1>
        <div>
          
          <input
            type="text"
            placeholder="E-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          { this.props.login.error ? (<span> {this.props.login.error.message}</span>) : ""}
          
          {!this.props.login.loading && (
            <button onClick={() => this.login()}>Entrar</button>
          )}
        </div>
        {this.props.login.user ? this.props.login.user.token : ""}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
