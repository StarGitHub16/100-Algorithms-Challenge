export function lateRide(n: number): number {

    const hours = Math.floor(n / 60); //We dont want the remainder here.
    const minutes = n % 60; //This is where the remainder goes which is the minutes.

    const time = hours.toString().concat(minutes.toString()).split('').map((char) => parseInt(char));


    return time.reduce((a, b) => a + b);
}      


 console.log(lateRide(240));
 console.log(lateRide(808));
