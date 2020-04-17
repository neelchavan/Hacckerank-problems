


function getSecondLargest(nums) {
    // get the largest number
    const max = Math.max(...nums);
    
    // filter out largest number 
    nums = nums.filter(i => i !== max);
    
    // return new largest number 
    return Math.max(...nums);
}


//OR



// let arr = [1,2,3,4,3,5,7,8,6,8,4,5,6,7,8,8,8,9,9,9,9,10,21,11,23,5];

// arr = arr.sort((a,b) => {return a-b});
// arr = arr.filter((v,i,self) => i == self.indexOf(v));
// console.log(arr);
// console.log(arr[arr.length-2]);

