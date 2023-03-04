export function addTwoDigits(n: any): number {
    const nums = n.toString().split('');

    return parseInt(nums[0]) + parseInt(nums[1]); //The parseInt turns them back into Integers so they can be added as numbers.
}

console.log(addTwoDigits(29));