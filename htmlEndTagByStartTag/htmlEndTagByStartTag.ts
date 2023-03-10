export function htmlEndTagByStartTag(startTag: string): string {

    const splitString = startTag.split(' '); //Splitting to get the first word.


    const splitTag = splitString[0].toString().split('');

    let endTag = '</';

    for(let i = 1; i < splitTag.length; i++) { //Then we want to omit the first tag.
        endTag += splitTag[i];
    }

    endTag = endTag[endTag.length - 1] === '>' ? endTag : endTag+= '>'; //handles the case of for example <i>.

    return endTag;
}     


console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));