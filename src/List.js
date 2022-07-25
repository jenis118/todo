import React from "react";

class List extends React.Component {
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
  render() {
    return (
      <>
        <div id="listing">
          {this.state.list.map((item) => {
            return (
              <li id="icn">
                <div id="newlist">
                  <div className="."></div>
                  <div id="value">
                    <p id="click">{item.value}</p>
                  </div>
                  <div id="dlticn">
                    <i
                      className="material-icons"
                      onClick={() => this.deleteName(item.id)}
                    >
                      &#xe888;
                    </i>
                  </div>
                  <div id="editicn">
                    <i className="fas" onClick={() => this.edit()}>
                      &#xf044;
                    </i>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </>
    );
  }
}
export default List;
