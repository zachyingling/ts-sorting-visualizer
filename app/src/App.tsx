import React from "react";
import Value from "./Components/Value/Value";
import Header from "./Components/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

interface IProps {}

interface ArrayState {
  firstGenArray: number[]
}

export default class App extends React.Component<IProps, ArrayState> {
  constructor(props: IProps){
    super(props);

    // Binds the this context being the "Array Component" to the function
    // So if the function is invoked else where it keeps the this context from this component
    this.generateArray = this.generateArray.bind(this);
    this.mergeSort = this.mergeSort.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
    this.quickSort = this.quickSort.bind(this);
    this.insertionSort = this.insertionSort.bind(this);
    this.setArray = this.setArray.bind(this);

    this.state = {
      firstGenArray: []
    };
  }

  componentDidMount(){
    this.generateArray();
  }

  generateArray(){
    let tempArr = [];
    for(let i = 0; i < 100; i++){
      // Generate a random number from 1-100
      let randomNumber = Math.floor(Math.random() * 700) + 4;
      tempArr.push(randomNumber);
    }
    this.setState({
      firstGenArray: tempArr
    });
  }

  setArray(arr: number[]){
    return this.setState({
      firstGenArray: arr
    });
  }

  mergeSort(mainArray: number [] = this.state.firstGenArray){
    if(mainArray.length <= 1) return mainArray;
    let mid = Math.floor(mainArray.length / 2);
    let left: number[] = this.mergeSort(mainArray.slice(0, mid));
    let right: number[] = this.mergeSort(mainArray.slice(mid));
    let tempArr: number[] = this.merge(left, right); 
    return tempArr;
  }

  // method to merge two sorted arrays/single elements
  // used in merge sorting algo
  merge(arr1: number[], arr2: number[]){
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j])
        j++;
      }
    }

    while(i < arr1.length) {
      results.push(arr1[i])
      i++;
    }

    while(j < arr2.length) {
      results.push(arr2[j])
      j++;
    }

    return results;
  }

  bubbleSort(arr: number[] = this.state.firstGenArray){
    let noSwaps: boolean;
    for(let i = arr.length; i > 0; i--){
      noSwaps = true;
      for(let j = 0; j < i - 1; j++){
        if(arr[j] > arr[j + 1]){
          this.swap(arr, j, j+1);
          noSwaps = false;
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }

  swap(arr: number[], index1: number, index2: number){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  quickSort(arr: number[] = this.state.firstGenArray, left = 0, right = arr.length - 1){
    if(left < right) { 
      let pivotIndex = this.pivot(arr, left, right);
      // left
      // in the call stack the left side of the pivot will finish first
      this.quickSort(arr, left, pivotIndex - 1);
      // right
      // in the call stack the right side of the pivot will finish after the left side
      this.quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }

  pivot(arr: number[], start = 0, end = arr.length - 1){
    // ES2015 Syntax Swap Function
    // Takes an array, and two indeces
    // Just swaps the two values at the two given indeces in the same array
    const swap = (arr: number[], idx1: number, idx2: number) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start to the swapIndex
    swap(arr, start, swapIdx);
    return swapIdx;
  }

  insertionSort(arr: number[] = this.state.firstGenArray){
    for(let i = 1; i < arr.length; i++){
      let currentVal = arr[i];
      let j;
  
      for(j = i - 1; j >= 0 && arr[j] > currentVal; j--){
        arr[j+1] = arr[j];
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }

  render(){
    return (
      <div className="App">
        <div>
          <Header 
            generateArray={this.generateArray}
            mergeSort={this.mergeSort}
            bubbleSort={this.bubbleSort}
            quickSort={this.quickSort}
            insertionSort={this.insertionSort}
            setArray={this.setArray}
            currentArray={this.state.firstGenArray}
          />
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="auto">
                {this.state.firstGenArray.map((x, index) => <Value passedNumber={x} key={index} />)}
                <br/>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
