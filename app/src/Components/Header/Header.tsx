import React from "react";
import "./Header.css";

interface IProps {
  generateArray: () => void,
  mergeSort: (mainArray: number[]) => void,
  bubbleSort: (arr: number[]) => number[],
  quickSort: (arr: number[], left: number, right: number) => number[],
  insertionSort: (arr: number[]) => number[],
  setArray: (arr: number[]) => void,
  currentArray: number[]
}

interface IState {
  sorting: boolean
}

export default class Header extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);

    this.state = {
      sorting: false
    };
  }

  render(){
    return (
      <header>
        <h1 id="title">Sorting Visualizer</h1>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => {
          let arr = this.props.mergeSort((event.target as any).index);
          console.log(arr);
        }}>Merge Sort</button>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => {
          let arr = this.props.bubbleSort((event.target as any).index);
          this.props.setArray(arr);
        }}>Bubble Sort</button>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => {
          let arr = this.props.quickSort((event.target as any).index, 0, this.props.currentArray.length);
          this.props.setArray(arr);
        }}>Quick Sort</button>
        <button onClick={(event: React.MouseEvent<HTMLElement>) => {
          let arr = this.props.insertionSort((event.target as any).index);
          this.props.setArray(arr);
        }}>Insertion Sort</button>
        <button onClick={this.props.generateArray}>Generate A New Array</button>
      </header>
    );
  }
}