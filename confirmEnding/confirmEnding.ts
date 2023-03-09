export function confirmEnding(str: string, target: string) {
  
    const start = str.length - target.length; //Gives the gap we need.

    
    
    return str.substr(start) === target;


}

 console.log(confirmEnding("Abstraction", "action"));
 console.log(confirmEnding("Open sesame", "pen"));