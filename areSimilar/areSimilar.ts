//Some will find this one a bit more on the challenge side.

export function areSimilar(a: number[], b: number[]): boolean {

        const c: number[] = [];
        let d: number[] = [];

        if( a.toString() === b.toString()) { //Handling the case of if they are exactly the same.
            return true;
        }

        for(let i = 0; i < a.length; i++){ //Now you iterate and push values to new arrays
            if (a[i] !== b[i]) {
                c.push(a[i]);
                d.push(b[i]);
            }
        }

        d = d.reverse();  //Then reverse d and this checks to see if the swapped values will still match


        if (c.length === 2 && (c.toString() === d.toString())) {  //If they are now equal? Then it is true.
            return true;
        }

        return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
