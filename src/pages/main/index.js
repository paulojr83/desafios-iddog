import React, { Component } from "react";
import axios from "axios";

export default class Main extends Component {
  state = {
    dogs: [],
    category: ""
  };

  async componentDidMount() {
    const data = await axios.get(
      "https://api-iddog.idwall.co/feed?category=hound",
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZGRvZy1zZXJ2aWNlIiwic3ViIjoiNWNkZDRkNDU1YTk0MDEyYjI4YTVkMmE1IiwiaWF0IjoxNTU4MDA3MTA5LCJleHAiOjE1NTkzMDMxMDl9.8joVIVcjp3qvTI42k6IUfvaFeQ9x5eoKO5_3RCj0Tu0"
        }
      }
    );

    const { list, category } = data.data;
    this.setState({ dogs: list, category });
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
