import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
class Main extends Component {
  state = {
    dogs: [],
    category: ""
  };

  async componentDidMount() {
    const data = await axios.get(
      "https://api-iddog.idwall.co/feed",
      {
        headers: {
          Authorization:
            this.props.user.token
        }
      }
    );

    const { list, category } = data.data;
    this.setState({ dogs: list, category });
  }

  doFilterByCategory = () => {
    
  }


  dogList() {
    this.state.dogs.map(e => <li>{e}</li>);
  }
  render() {
    console.log(this.state.dogs);
    return (
      <div>
        <ul>{this.dogList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});


export default connect(mapStateToProps)(Main)