import React from "react";
import Value from "./Components/Value/Value";
import Header from "./Components/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import mergeSortFunction from "./Components/SortingAlgorithms/mergeSort";
import bubbleSortFunction from "./Components/SortingAlgorithms/bubbleSort";
import insertionSortFunction from "./Components/SortingAlgorithms/insertionSort";
import quickSortFunction from "./Components/SortingAlgorithms/quickSort";

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
    return mergeSortFunction(mainArray);
  }

  bubbleSort(mainArray: number[] = this.state.firstGenArray){
    return bubbleSortFunction(mainArray);
  }

  quickSort(mainArray: number[] = this.state.firstGenArray, left = 0, right = mainArray.length - 1){
    return quickSortFunction(mainArray, left, right);
  }

  insertionSort(mainArray: number[] = this.state.firstGenArray){
    return insertionSortFunction(mainArray);
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
