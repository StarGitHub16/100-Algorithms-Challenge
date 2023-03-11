//Familiar with ASCII format.

export function newNumeralSystem(number: string): string[] {
    const numerals: string[] = [];

    let startCharCount = 65;  //65 is what "A" is in the ASCII chart.

    let endCharCount = number.charCodeAt(0); 

    while(startCharCount <= endCharCount) {
        const numeral = `${String.fromCharCode(startCharCount)} + ${String.fromCharCode(endCharCount)}}`;
        numerals.push(numeral);
        startCharCount++;
        endCharCount--;
    }


    
    return numerals;
}





 console.log(newNumeralSystem('G'));