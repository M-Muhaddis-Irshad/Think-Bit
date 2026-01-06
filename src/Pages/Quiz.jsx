import React from 'react'
import { useParams } from 'react-router-dom'

const Quiz = () => {

  const { category } = useParams();

  console.log(category);

  return (
    <div>{
      (category === 'javascript') ? category.toUpperCase()
        : category[0].toUpperCase()
    }</div>
  )
}

export default Quiz





// function findSecondLargest(arr) {
//   let largest = Number.MIN_SAFE_INTEGER;
//   let secondLargest = Number.MIN_SAFE_INTEGER;

//   for (const num of arr) {
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num < largest) {
//       secondLargest = num;
//     }
//   }
//   return secondLargest;
// }




// Source - https://stackoverflow.com/a/57708400
// Posted by Dhruv Thakkar, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-06, License - CC BY-SA 4.0

function getSecondLargest(nums) {
  var flarge = 0;
  var slarge = 0;
  for (var i = 0; i < nums.length; i++) {
    if (flarge < nums[i]) {
      slarge = flarge;
      flarge = nums[i];
    } else if (nums[i] > slarge) {
      slarge = nums[i]

    }
  }
  return slarge;
}

let arr = [10, 20, 20, 4, 2, 3, 4, 2, 3, 3, 3, 3, 10, 100, 100, 100, 100, 100, 100,];
let filtered_array = arr.filter((values, index, array) => {
  return array.indexOf(values) === index
})
console.log(filtered_array.sort((a, b) => a - b).at(-2));