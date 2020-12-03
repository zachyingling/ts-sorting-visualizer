const bubbleSort = (arr: number[]) => {
  let noSwaps: boolean;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j + 1]){
        swap(arr, j, j+1);
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

const swap = (arr: number[], index1: number, index2: number) => {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

export default bubbleSort;