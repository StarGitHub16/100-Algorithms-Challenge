export function ratingThreshold(threshold: number, ratings: number[][]): number[] {

    const review: number[] = [];  


    for(let i = 0; i < ratings.length; i++) {
        let totalRating = 0;

        ratings[i].forEach((rating: number) => { //Keeps track of total ratings
            totalRating += rating;
        });

        if(totalRating / ratings[i].length < threshold) { //Divide by that length to get the average, if less than the threshold than push the rating.
            review.push(i);
        }
    }
    return review;
}  
 

 console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));