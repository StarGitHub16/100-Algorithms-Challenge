//This one is quite difficult, I do wonder if there is a better and cleaner way. Normally nested for loops feel like not a great convention, but this does work.

export function boxBlur(image: number[][]): number[][] {

    const res = [];


    for( let y = 0; y < image.length - 2; y++) {  //Handle the edge cases
        const line = [];

        for(let x = 0; x < image[y].length - 2; x++) {
            let sum = 0 ;                         
            let count = 0;  //Keeping track of count

            for(let a = y; a < y + 3; a++) {    //9 by 9 area
                for(let b = x; b < x + 3; b++) {
                    sum += image[a][b]
                    count++;
                }
            } 
            line.push(Math.floor(sum/count));
        }
        res.push(line);
    }

    return res;
}  

 console.log(boxBlur([[1, 1, 1], 
                    [1, 7, 1], 
                    [1, 1, 1]]));