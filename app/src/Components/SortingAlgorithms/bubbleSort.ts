const getBubbleSortAnimations = (mainArray: number[]) => {
  let animations = bubbleSort(mainArray);
  console.log(mainArray);
  return animations;
};

const bubbleSort = (arr: number[]) => {
  let noSwaps: boolean;
  let comparisons: number[][] = [];
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      let tempArr = [j, j + 1, 0];
      if(arr[j] > arr[j + 1]){
        swap(arr, j, j+1);
        noSwaps = false;
        tempArr[2] = 1;
      }
      comparisons.push(tempArr);
    }
    if(noSwaps) break;
  }
  return comparisons;
}

const swap = (arr: number[], index1: number, index2: number) => {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

export default getBubbleSortAnimations;