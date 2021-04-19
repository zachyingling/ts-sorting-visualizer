const getInsertionSortAnimations = (mainArray: number[]) => {
  let animations = insertionSort(mainArray);
  return animations;
};

const insertionSort = (arr: number[]) => {
  let returnedArr: number[][] = [];

  for(let i = 0; i < arr.length; i++){
    let currentVal = arr[i];
    let j = i;
    let subArr: number[];
    subArr = [j+1, j];

    while(j > 0 && arr[j - 1] > currentVal){
      arr[j] = arr[j-1];
      j = j - 1;
      returnedArr.push(subArr);
      subArr = [j+1, j];
    }

    arr[j] = currentVal;
    returnedArr.push(subArr);
  }

  // Nested arrays indeces 0=i, 1=j, doneSwapping=0(false)/1(true)
  return returnedArr;
}

export default getInsertionSortAnimations;