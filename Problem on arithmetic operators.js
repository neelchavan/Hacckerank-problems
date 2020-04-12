// Calculate the area and the perimeter of a rectangle.
// function area()
// {
//     var length = 3;
//     var width = 4.5;

//     var areaofrectangle = length*width;
//     var perimeter = 2*(length + width);

//     return [areaofrectangle, perimeter];        
// }
// let x = area()
// console.log(x[0])
// console.log(x[1]);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = arr.filter(no => no >= 5);
// console.log(result);

// // filtering arr to even numberes
// console.log("Even No.");
// result = arr.filter(no => no%2 == 0);
// console.log(result);

// let d = arr.filter(no => no%2 != 0)
// console.log(d);

// let v = arr.filter(no => no != 2);
// console.log(v);
arr = arr.sort((a,b) => {if(a<b){return a}else{return b}});
arr = arr.filter((v,i,self) => i == self.indexOf(v));
console.log(arr);
console.log(arr[arr.length-2]);


