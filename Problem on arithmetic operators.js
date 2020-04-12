//Calculate the area and the perimeter of a rectangle.
function area()
{
    var length = 3;
    var width = 4.5;

    var areaofrectangle = length*width;
    var perimeter = 2*(length + width);

    return [areaofrectangle, perimeter];        
}
let x = area()
console.log(x[0])
console.log(x[1]);




