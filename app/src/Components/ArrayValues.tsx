import React from "react";
import Value from "./Value";

interface IProps {}

interface ArrayState {
  firstGenArray: number[],
  semiSortedArray: number[],
  sortedArray: number []
}

export default class Array extends React.Component<IProps, ArrayState> {
  constructor(props: IProps){
    super(props);
    this.state = {
      firstGenArray: [],
      semiSortedArray: [],
      sortedArray: []
    };
  }

  componentWillMount(){
    this.generateArray();
  }

  generateArray(){
    let tempArr = [];
    for(let i = 0; i < 100; i++){
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      tempArr.push(randomNumber);
    }
    this.setState({
      firstGenArray: tempArr
    });
  }

  render(){
    return this.state.firstGenArray.map(x => <Value passedNumber={x} />);
  }
}