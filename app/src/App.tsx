import * as React from "react";
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
  child: React.RefObject<Header>;
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

    this.child = React.createRef();

    this.state = {
      firstGenArray: []
    };
  }

  componentDidMount(){
    this.generateArray();
  }

  getArraySize(){
    let arraySize = Number(this.child.current?.state.arraySizeText);

    if(isNaN(arraySize)) arraySize = 25;
    return arraySize;
  }

  generateArray(){
    let arraySize = this.getArraySize();
    let tempArr = [];
    for(let i = 0; i < arraySize; i++){
      // Generate a random number from 4-720
      let randomNumber = Math.floor(Math.random() * 720) + 4;
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

  setValuesToRed(){
    const arrayBars = document.getElementsByClassName('valueContainer') as HTMLCollectionOf<HTMLElement>;
    for(let i = 0; i < arrayBars.length; i++){
      arrayBars[i].style.backgroundColor = "red";
    }
  }

  getSortSpeed(){
    // How fast the sorting algorithm will show the comparisons in milliseconds
    let sortSpeed = Number(this.child.current?.state.speedButtonText);
    if(isNaN(sortSpeed)) sortSpeed = 25;
    return sortSpeed;
  }

  mergeSort(mainArray: number [] = this.state.firstGenArray){
    let sortSpeed = this.getSortSpeed();
    let animations = mergeSortFunction.getAnimations(mainArray);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('valueContainer') as HTMLCollectionOf<HTMLElement>;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const tempArr: number | number[] = animations[i];
        // tempArr will always be a number[] but couldn't figure out why it was expecting a number in some instances
        // so added this if statement to get rid of the error
        if(typeof tempArr === "number") continue;
        const barOneStyle = arrayBars[tempArr[0]].style;
        const barTwoStyle = arrayBars[tempArr[1]].style;
        const color = i % 3 === 0 ? "turquoise" : "purple";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          if(i === animations.length - 1) { 
            this.child.current?.setState({sorting: false});
            this.setValuesToRed();
          }
        }, i * sortSpeed);
      } else {
        const tempArr: number | number[] = animations[i];
        // tempArr will always be a number[] but couldn't figure out why it was expecting a number in some instances
        // so added this if statement to get rid of the error
        if(typeof tempArr === "number") continue;
        // eslint-disable-next-line no-loop-func
        setTimeout(() => {
          const barOneStyle = arrayBars[tempArr[0]].style;
          barOneStyle.height = `${tempArr[1]}px`;
          if(i === animations.length - 1) { 
            this.child.current?.setState({sorting: false});
            this.setValuesToRed();
          }
        }, i * sortSpeed);
      }
    }
  }

  // test bubble sort more
  bubbleSort(mainArray: number[] = this.state.firstGenArray){
    let sortSpeed = this.getSortSpeed();
    let animations = bubbleSortFunction(mainArray);
    const arrayBars = document.getElementsByClassName('valueContainer') as HTMLCollectionOf<HTMLElement>;
    for(let i = 0; i < animations.length; i++){
      setTimeout(() => {
      let firstBar = arrayBars[animations[i][0]];
      let secondBar = arrayBars[animations[i][2]];
      let swap = animations[i][4];
      firstBar.style.backgroundColor = "turquoise";
      secondBar.style.backgroundColor = "turquoise";
        setTimeout(() => {
          this.bubbleSortHelper(firstBar, secondBar, swap, i, animations);
        }, sortSpeed);
      }, sortSpeed * i);
    }
  }

  bubbleSortHelper(firstBar: HTMLElement, secondBar: HTMLElement, swap: number, i: number, animations: number[][]){
    if(swap) {
      firstBar.style.height = animations[i][3] + "px";
      secondBar.style.height = animations[i][1] + "px";
    }
    firstBar.style.backgroundColor = "purple";
    if(i === animations.length - 1) { 
      this.child.current?.setState({sorting: false});
      this.setValuesToRed();
    }
  }

  quickSort(mainArray: number[] = this.state.firstGenArray, left = 0, right = mainArray.length - 1){
    // let sortSpeed = this.getSortSpeed();
    return quickSortFunction(mainArray, left, right);
  }
 
  insertionSort(mainArray: number[] = this.state.firstGenArray){
    let sortSpeed = this.getSortSpeed();
    let animations = insertionSortFunction(mainArray);
    console.log(animations);
    const arrayBars = document.getElementsByClassName('valueContainer') as HTMLCollectionOf<HTMLElement>;
    for(let i = 0; i < animations.length; i++){
      setTimeout(() => {
      let firstBar = arrayBars[animations[i][1]];
      let secondBar = arrayBars[animations[i][0]];
      if(secondBar && firstBar){
        firstBar.style.backgroundColor = "turquoise";
        secondBar.style.backgroundColor = "turquoise";
          setTimeout(() => {
            this.insertionSortHelper(firstBar, secondBar, i, animations[i]);
          }, sortSpeed);
      }
      }, sortSpeed * i);
    }
  }

  insertionSortHelper(firstBar: HTMLElement, secondBar: HTMLElement, i: number, animations: number[]){
    let first = animations[1];
    let second = animations[0];
    let tempHeight = firstBar.style.height;
    if(first > second) {
      firstBar.style.height = secondBar.style.height;
      secondBar.style.height = tempHeight;
    }
    firstBar.style.backgroundColor = "green";
    secondBar.style.backgroundColor = "green";
    if(i === animations.length - 1) { 
      this.child.current?.setState({sorting: false});
      this.setValuesToRed();
    }
  }

  render(){
    return (
      <main className="App">
          <Header 
            generateArray={this.generateArray}
            mergeSort={this.mergeSort}
            bubbleSort={this.bubbleSort}
            quickSort={this.quickSort}
            insertionSort={this.insertionSort}
            setArray={this.setArray}
            currentArray={this.state.firstGenArray}
            ref={this.child}
          />
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="auto">
                {this.state.firstGenArray.map((x, index) => <Value passedNumber={x} key={index} />)}
                <br/>
              </Col>
            </Row>
          </Container>
      </main>
    );
  }
}
