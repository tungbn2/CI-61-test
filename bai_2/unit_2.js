
let input = [60, 40, 55, 75, 64];

function checkMax (array){
    let team_1 = 0;
    let team_2 = 0;
    for (let i = 0; i < array.length; i++) {
       if (i%2==0){
           team_1 += array[i]
       } else { team_2 += array[i]}
    }
    console.log(`Team 1: ${team_1}, Team 2: ${team_2}`);
    return [team_1, team_2]
}

console.log(checkMax(input));;