//About Section
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent Constructor");
  }

  componentDidMount() {
    // console.log("parent Component did Mount");
  }
  render() {
    // console.log("parent render ");
    return (
      <div>
        <h1>About</h1>

        <UserClass name={"First Child"} location={"Aligarh Sir Syed Nagar "} />
      </div>
    );
  }
}

export default About;
