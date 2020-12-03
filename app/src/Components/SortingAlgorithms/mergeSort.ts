const mergeSort = (mainArray: number[]) => {
  if(mainArray.length <= 1) return mainArray;
  let mid = Math.floor(mainArray.length / 2);
  let left: number[] = mergeSort(mainArray.slice(0, mid));
  let right: number[] = mergeSort(mainArray.slice(mid));
  let tempArr: number[] = merge(left, right); 
  return tempArr;
}

const merge = (arr1: number[], arr2: number[]) => {
  let results = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j])
      j++;
    }
  }

  while(i < arr1.length) {
    results.push(arr1[i])
    i++;
  }

  while(j < arr2.length) {
    results.push(arr2[j])
    j++;
  }

  return results;
}

export default mergeSort;