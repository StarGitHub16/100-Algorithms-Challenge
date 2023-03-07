export function composeRanges(nums: number[]): string[] {
    
    if(nums.length < 1) {
        return [];
    }
    const ranges: any[] = [{start: nums[0], end: nums[0]}]; //Storing a start and end point.


    for(let i = 1; i < nums.length; i++) {
        if(ranges[ranges.length - 1].end + 1 === nums[i] ){ //If the end value is equal to the next value, update the end value. 
            ranges[ranges.length - 1].end = nums[i]
        } else {
            ranges.push({start: nums[i], end: nums[i]}); //If not create a new value.
        }
    }

    for(let i=0; i < ranges.length; i++) {  //Applying the transformation we want through another for loop.
        if(ranges[i].start !== ranges[i].end) {
            ranges[i] = `${ranges[i].start}->${ranges[i].end}`;
        } else {
            ranges[i] = ranges[i].start.toString();
        }
    }
    return ranges;
}  

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));