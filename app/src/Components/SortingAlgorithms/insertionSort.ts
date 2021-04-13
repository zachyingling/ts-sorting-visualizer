const getInsertionSortAnimations = (mainArray: number[]) => {
  let animations = insertionSort(mainArray);
  console.log(mainArray);
  return animations;
};

const insertionSort = (arr: number[]) => {
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

export default getInsertionSortAnimations;