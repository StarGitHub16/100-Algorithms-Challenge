export function switchLights(a: number[]): number[] {

    let originalLights = [...a]; //Creating refrence.


    for(let i = 0; i < originalLights.length; i++) {
        if(a[i] === 1) {
            originalLights = swapLights(originalLights, i); //Swapping lights when equal to 1.
        }
    }

    return originalLights;
}   

function swapLights(lights: number[], currentIndex: number): number[] {
    for(let i = 0; i < currentIndex + 1; i++) {
        lights[i] = lights[i] === 1 ? 0 : 1;
    }
    
    return lights;
}

 console.log(switchLights([1, 1, 1, 1, 1]));
 console.log(switchLights([0, 0]));