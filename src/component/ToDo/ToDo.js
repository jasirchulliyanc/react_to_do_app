import React, { Component } from "react";
import "./ToDo.css";

export default class ToDo extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  storeValues = (event) => {
    event.preventDefault();
    const { input } = this.state;
    // const  allItems = this.state.items;
    // allItems.push(input);
    this.setState({
      items: [...this.state.items, input],
      input: [],
    });
  };
  deleteItem = (key) => {
    const allItems = this.state.items;
    allItems.splice(key, 1);
    this.setState({
      items: this.state.items.filter((data,index)=>index !== key),
    });
  };
  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeValues}>
          <h1>ToDo App</h1>
          <input type="text" value={input} onChange={this.handleChange} />
          {/* <button>Add</button> */}
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i class="fa-solid fa-trash" onClick={this.deleteItem}></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
