let raceNumber = Math.floor(Math.random() * 1001);

let runnerEarly = true;

let runnerAge = 30;

if(runnerAge > 18 && runnerEarly) {
    raceNumber += 1000;
} 

if(runnerAge > 18 && runnerEarly) {
    console.log(`Race will start at 9:30 ${raceNumber}`);
    } else if(runnerAge > 18 && !runnerEarly) {
    console.log(`Late adults run at 11:00 am ${raceNumber}`);
}
else if(runnerAge < 18) {
    console.log(`Youth registrants run at 12:30 am ${raceNumber}`);
}

console.log (runnerAge);
console.log(runnerEarly);