import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap"

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
  sorting: boolean,
  speedButtonText: string | null,
  arraySizeText: string | null
}

export default class Header extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);

    this.state = {
      sorting: false,
      speedButtonText: "Select Sorting Speed (Default: 5ms)",
      arraySizeText: "Select Array Size (Default: 25)"
    };
  }

  changeSortingState(){
    this.setState({
      sorting: !this.state.sorting
    });
  }

  render(){
    return (
      <header>
        <h1 id="title">Sorting Visualizer</h1>
        {this.state.sorting ? <h1 id="sorting-title">Sorting</h1> : 
          <>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => {
              this.changeSortingState();
              this.props.mergeSort((event.target as any).index);
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

            {/* Code for Dropdown of Speed for sorting algorithm */}
            <DropdownButton
              id="dropdown-item-button"
              title={this.state.speedButtonText}
            >
              <Dropdown.Item eventKey="1" onClick={(e) => {
                let tempTarget = e.target as HTMLElement;
                this.setState({
                  speedButtonText: tempTarget.textContent
                });
              }}>5</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={(e) => {
                let tempTarget = e.target as HTMLElement;
                this.setState({
                  speedButtonText: tempTarget.textContent
                });
              }}>10</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={(e) => {
                let tempTarget = e.target as HTMLElement;
                this.setState({
                  speedButtonText: tempTarget.textContent
                });
              }}>20</Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={(e) => {
                let tempTarget = e.target as HTMLElement;
                this.setState({
                  speedButtonText: tempTarget.textContent
                });
              }}>40</Dropdown.Item>
              <Dropdown.Item eventKey="4" onClick={(e) => {
                let tempTarget = e.target as HTMLElement;
                this.setState({
                  speedButtonText: tempTarget.textContent
                });
              }}>100</Dropdown.Item>
            </DropdownButton>

            {/* Code for Array Size */}
            <DropdownButton
              id="dropdown-item-button"
              title={this.state.arraySizeText}
            >
              <Dropdown.Item eventKey="1" onClick={(e) => {
                let tempTarget = e.target as HTMLElement;
                this.setState({
                  arraySizeText: tempTarget.textContent
                }, this.props.generateArray);
              }}>10</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={(e) => {
                let tempTarget = e.target as HTMLElement;
                this.setState({
                  arraySizeText: tempTarget.textContent
                }, this.props.generateArray);
              }}>25</Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={(e) => {
                let tempTarget = e.target as HTMLElement;
                this.setState({
                  arraySizeText: tempTarget.textContent
                }, this.props.generateArray);
              }}>50</Dropdown.Item>
              <Dropdown.Item eventKey="4" onClick={(e) => {
                let tempTarget = e.target as HTMLElement;
                this.setState({
                  arraySizeText: tempTarget.textContent
                }, this.props.generateArray);
              }}>100</Dropdown.Item>
            </DropdownButton>
          </>
        }
      </header>
    );
  }
}