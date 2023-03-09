//If the indexes are not the same and our values match, what is the math absoulte of i - j is less than equal to k, if none of them work its false.

export function containsCloseNums(nums: number[], k: number): boolean {
  
    for(let i = 0; i < nums.length; i++) {
        for( let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if(nums[i] === nums[j]) {
                    if(Math.abs( i - j) <= k) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

 console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
 console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));