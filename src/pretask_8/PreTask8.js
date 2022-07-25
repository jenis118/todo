import React from "react";
import axios from "axios";
import "./Text.css";

class PreTask8 extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users` /* `https://reqres.in/` */
      )
      .then((e) => {
        const persons = e.data;
        console.log(persons);
        this.setState({ persons });
      });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.persons.map((person) => (
            <li key={person.id}>
              name:{" "}
              <span className={person.name.charAt(0) === "C" ? "red" : ""}>
                {person.name}
              </span>
              <br />
              username:
              <span
                className={person.username.charAt(0) === "M" ? "Blue" : "Green"}
                id={person.username.charAt(0) === "K" ? "Yellow" : "brown"}
              >
                {" "}
                {person.username}
              </span>
              <br />
              email: {person.email}
              <hr />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default PreTask8;
