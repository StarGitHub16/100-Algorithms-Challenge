export function electionsWinners(votes: number[], k: number): number {

   let inTheRunning: number = 0;
   const mostVotes = Math.max(...votes); //Unwrap and give largest value.
   const sortedVotes = votes.sort((a, b) => b - a);

   if(sortedVotes[0] !== sortedVotes[1] && k === 0) {
        return 1;
   }
   
   votes.forEach((voteCount) => {
    if(mostVotes - voteCount < k) {
        inTheRunning++;
    }
   });


   return inTheRunning;
}  


console.log(electionsWinners([2, 3, 5, 2], 3)); //Saying 2 candidates have potential to win.




