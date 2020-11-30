import React from "react";
import "./Header.css";

interface IProps {
  generateArray: () => void,
  mergeSort: (mainArray: number[]) => number[],
  bubbleSort: (arr: number[]) => number[],
  quickSort: (arr: number[], left: number, right: number) => number[],
  insertionSort: (arr: number[]) => number[],
  setArray: (arr: number[]) => void
}

export default class Header extends React.Component<IProps> {
  render(){
    return (
      <header>
        <h1 id="title">Sorting Visualizer</h1>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => {
          let arr = this.props.mergeSort((event.target as any).index);
          this.props.setArray(arr);
        }}>Merge Sort</button>
        <button onClick={() => this.props.bubbleSort}>Bubble Sort</button>
        <button onClick={() => this.props.quickSort}>Quick Sort</button>
        <button onClick={() => this.props.insertionSort}>Insertion Sort</button>
        <button onClick={this.props.generateArray}>Generate A New Array</button>
      </header>
    );
  }
}