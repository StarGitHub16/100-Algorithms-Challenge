export function makeArrayConsecutive2(statues: number[]): number {

    let count = 0;
    const sortedStatues = statues.sort((a, b) => a -b); //First sort the area to find min and max value.

    const min = sortedStatues[0];

    const max = sortedStatues[sortedStatues.length - 1];



    for(let i = min; i < max; i++) {
        if(!statues.includes(i)) {  //Find if it is in there and if not add to count.
            count++;
        }
    }

    return count;
}  


 console.log(makeArrayConsecutive2([6, 2, 3, 8]));