import React from "react";
import "./Header.css";

interface IProps {
  generateArray: () => void
}

export default class Header extends React.Component<IProps> {
  render(){
    return (
      <header>
        <h1 id="title">Sorting Visualizer</h1>
        <button onClick={this.props.generateArray}>Generate A New Array</button>
      </header>
    );
  }
}