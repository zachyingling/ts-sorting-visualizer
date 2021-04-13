const getInsertionSortAnimations = (mainArray: number[]) => {
  let animations = insertionSort(mainArray);
  return animations;
};

const insertionSort = (arr: number[]) => {
  let returnedArr: (number | number[])[][] = [];
  let tempArr = arr;
  console.log(tempArr);
  for(let i = 0; i < arr.length; i++){
    let currentVal = arr[i];
    let j = i;
    let subArr: (number | number[])[];
    subArr = [tempArr, i, j];

    while(j > 0 && arr[j - 1] > currentVal){
      arr[j] = arr[j-1];
      j = j - 1;
      subArr.push(0);
      returnedArr.push(subArr);
      subArr = [tempArr, i, j];
    }

    arr[j] = currentVal;
    subArr.push(1);
    returnedArr.push(subArr);
  }
  return returnedArr;
}

export default getInsertionSortAnimations;