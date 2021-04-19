const getInsertionSortAnimations = (mainArray: number[]) => {
  let animations = insertionSort(mainArray);
  return animations;
};

const copyArray = (arr: number[]) => {
  return arr.slice(0);
};

const insertionSort = (arr: number[]) => {
  let returnedArr: number[][] = [];
  let copiedArr = copyArray(arr);
  returnedArr.push(copiedArr);
  let tempArr = arr;

  for(let i = 0; i < tempArr.length; i++){
    let currentVal = tempArr[i];
    let j = i;

    while(j > 0 && tempArr[j - 1] > currentVal){
      tempArr[j] = tempArr[j-1];
      j = j - 1;
    }

    tempArr[j] = currentVal;
  }

  returnedArr.push(tempArr);
  // Nested arrays indeces 0=i, 1=j, doneSwapping=0(false)/1(true)
  return returnedArr;
}

export default getInsertionSortAnimations;