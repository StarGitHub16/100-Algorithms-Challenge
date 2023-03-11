//This is the final algorithm solved actually, come back to it after getting to the end of this.

export function flattenArray(arr: any[]): any[] {
    const oneArray = [];  

    flatten(arr);

    function flatten(arr: any[]) { //This will be recursion aka calling a function within itself till it is done.
        arr.forEach((element) => {
            if(Array.isArray(element)) {
                flatten(element)
            } else {
                oneArray.push(element);
            }
        }); 
    }

    return oneArray;
}    

 console.log(flattenArray([[["a"]], [["b"]]]));
 console.log(flattenArray([1, [2], [3, [[4]]]]));
