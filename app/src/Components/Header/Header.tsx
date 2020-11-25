import React from "react";
import "./Header.css";

interface IProps {
  generateArray: () => void
}

export default class Header extends React.Component<IProps> {
  render(){
    return (
      <header>
        <button onClick={this.props.generateArray}>Generate A New Array</button>
      </header>
    );
  }
}