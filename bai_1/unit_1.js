
let input = [2, 3, -5, -2, 4];

function checkMax (array){
    let temp = 0;
    let index=0;
    for (let i = 0; i < array.length-1; i++) {
        let volume = array[i] *array[i+1]
        if (volume > temp){
            temp = volume;
            index = i;
        }
    }
    console.log(`Max Volume: ${temp} (element: ${array[index]} and ${array[index+1]})`);
}

checkMax(input);