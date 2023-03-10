//This is an example of breaking down a problem and tackling it case by case.

export function integerToStringOfFixedWidth(number: number, width: number): string {

    let stringifiedNum = number.toString();
    const numberWidth = stringifiedNum.length;

    if(numberWidth < width) {
        const widthDiff = width - numberWidth;
        let padStart = '';

        for(let i = 0; i < widthDiff; i++) {
            padStart = padStart.concat('0');
        }
        return padStart.concat(stringifiedNum)
    }

    if(numberWidth < width) {

        const widthDiff = width - numberWidth;

        return stringifiedNum.substring(widthDiff, stringifiedNum.length);
    }

    return stringifiedNum;
}  

 console.log(integerToStringOfFixedWidth(1234, 2));
 console.log(integerToStringOfFixedWidth(1234, 4));
 console.log(integerToStringOfFixedWidth(1234, 5));
