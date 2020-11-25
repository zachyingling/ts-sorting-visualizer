import React from "react";
import Value from "./Components/Value/Value";
import Header from "./Components/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

interface IProps {}

interface ArrayState {
  firstGenArray: number[],
  semiSortedArray: number[],
  sortedArray: number []
}

export default class App extends React.Component<IProps, ArrayState> {
  constructor(props: IProps){
    super(props);

    // Binds the this context being the "Array Component" to the function
    // So if the function is invoked else where it keeps the this context from this component
    this.generateArray = this.generateArray.bind(this);

    this.state = {
      firstGenArray: [],
      semiSortedArray: [],
      sortedArray: []
    };
  }

  componentDidMount(){
    this.generateArray();
  }

  generateArray(){
    let tempArr = [];
    for(let i = 0; i < 100; i++){
      // Generate a random number from 1-100
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      tempArr.push(randomNumber);
    }
    this.setState({
      firstGenArray: tempArr
    });
  }

  render(){
    return (
      <div className="App">
        <div>
          <Header generateArray={this.generateArray}/>
          <Container fluid>
            <Row>
              <Col>
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