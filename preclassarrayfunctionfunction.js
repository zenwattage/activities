var nums = [2,4,6,8];

function add(nums) {
  for( var i = 0; i < nums.length; i++) {
    nums[0] + nums[1]
  }
}


function filter(arr, cb) {
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    const output = cb(arr[i]);
    if(output) {
      result.push(output);
    }
  }

  return result;
}

