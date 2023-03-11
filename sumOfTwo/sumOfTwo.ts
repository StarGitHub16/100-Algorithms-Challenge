//Another Interview Question from Google on CodeFights.

export function sumOfTwo(a: number[], b: number[], v: number): boolean {
    const hashMap = {};  //Create object to store values you need.

    for( let num of a) {
        const difference = v - num;
        hashMap[difference] = difference;
    }


    for (let num of b) {  //Find out if it matches any of the keys in the object.
        if(hashMap.hasOwnProperty(num)) {
            return true;
        }
    }
    return false;
}    


console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));