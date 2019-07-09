/**
 * - Write a function that takes in a sorted array and returns the same array randomly shuffled
 */

const shuffleArray = arr => {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function shuffleArray2015(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(array);
}

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
shuffleArray2015(myArr);
