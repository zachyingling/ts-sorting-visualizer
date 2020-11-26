import React from "react";
import "./Header.css";

interface IProps {
  generateArray: () => void,
  mergeSort: () => void,
  bubbleSort: () => void,
  quickSort: () => void,
  insertionSort: () => void
}

export default class Header extends React.Component<IProps> {
  render(){
    return (
      <header>
        <h1 id="title">Sorting Visualizer</h1>
        <button onClick={this.props.mergeSort}>Merge Sort</button>
        <button onClick={this.props.bubbleSort}>Bubble Sort</button>
        <button onClick={this.props.quickSort}>Quick Sort</button>
        <button onClick={this.props.insertionSort}>Insertion Sort</button>
        <button onClick={this.props.generateArray}>Generate A New Array</button>
      </header>
    );
  }
}