//This one can be difficult to understand.

export function avoidObstacles(inputArray: number[]): number {
  
    inputArray = inputArray.sort((a, b) => a-b);  //First sort the array
    const largestArrayVal = inputArray[inputArray.length - 1] //Creat value to iterate up to.

    for( let i = 1; i <= largestArrayVal + 1; i++) { 
        if(inputArray.every((element) => element % i !== 0)) { //When we module by the current index value, you find the shortest jump.
            return i;
        }
    }

    return largestArrayVal; //Maybe.
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));