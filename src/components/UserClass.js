import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // In that Time when dont have the functionality of hooks like useState() then we created our own this
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="user-card" style={{ border: "2px Solid black" }}>
        <h2>Name : {this.props.name}</h2>
        <h2>Count - {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count
        </button>
        <h3>Location : {this.props.location}</h3>
        <h3>Contact - Samarthsaxena2september2001@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
