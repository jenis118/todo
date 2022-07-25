import { Component } from "react";
import "./App.css";
/* import List from "./List"; */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Input: "",
      list: [],
    };
  }
  updateInput(value) {
    this.setState({
      Input: value,
    });
  }
  addname() {
    if (this.state.Input !== "") {
      const Input = {
        id: Math.random(),
        value: this.state.Input,
      };
      console.log("id");
      console.log(Input.value);
      const list = [...this.state.list];
      console.log(list);
      list.push(Input);
      this.setState({
        list,
        Input: "",
      });
    }
  }

  deleteName(key) {
    const list = [...this.state.list];
    const updatelist = list.filter((item) => item.id !== key);

    this.setState({ list: updatelist });
  }
  edit() {
    /* let listhidden = document.getElementById("listing");
    listhidden.style.display = "none";
    let listShow = document.getElementById("Edit");
    listShow.style.display = "show"; */
  }
  /* } */
  render() {
    return (
      <>
        <div id="App">
          <h2 id="Headline">What's the plan for Today?</h2>
          <div className="inputTodo">
            <div className="AddTodo">
              <input
                className="inputbox"
                type="text"
                placeholder="Add a todo"
                autoComplete="off"
                value={this.state.Input}
                onChange={(item) => this.updateInput(item.target.value)}
              ></input>
            </div>

            <div className="Todobtn">
              <button
                type="button"
                className="btn"
                onClick={() => this.addname()}
              >
                Add todo
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
