import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // In that Time when dont have the functionality of hooks like useState() then we created our own this
    this.state = {
      count: 0,
      count2: 0,
      count3: 0,
      count4: 0,
    };
    console.log(this.props.name + "child constructor ");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
  }
  render() {
    console.log(this.props.name + "child render");
    return (
      <div className="user-card" style={{ border: "2px Solid black" }}>
        <h2>Name : {this.props.name}</h2>
        <h2>Count - {this.state.count}</h2>

        {/* // you have just sent count and count2 over there react will not touch
        the value of others it is just touch the value which is passed  */}

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count + 1,
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
