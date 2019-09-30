import React, { Component } from "react";
import data from "./data/data";

var index = 0;
export default class App extends Component {
  state = {
    items: data.items,
    item: data.items[index]
  };

  handleOnClickNext = () => {
    if (this.state.items.length-1 === index) {
      return ;
    }
    else{
      index++;
      this.setState(prevState => ({
        item: prevState.items[index]
      }));
      console.log(index);
    }
  };

  handleOnClickPrev =()=>{
    if (0 === index) {
      return ;
    }
    else{
      index--;
      this.setState(prevState => ({
        item: prevState.items[index]
      }));
    }
  }

  render() {
    const { id, item } = this.state.item;
    return (
      <div>
        <div>
          <div>{id}</div>
          <div>{item}</div>
          <button onClick={this.handleOnClickNext}>Next</button>
          <button onClick={this.handleOnClickPrev}>prev</button>
        </div>
      </div>
    );
  }
}
