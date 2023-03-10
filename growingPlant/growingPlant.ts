export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {

    let days = 0;
    let totalHeight = 0; //Current Height

    while(totalHeight < desiredHeight) {
        days++;
        totalHeight += upSpeed;

        if(totalHeight < desiredHeight) //A case where the total height is less than what we would want (aka when it goes through the night cycle).
            {
                totalHeight -= downSpeed;
            }
    }
    
    return days;
}  

 console.log(growingPlant(100, 10, 910))