console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for(let i = 1; i <= count; i++) {
        if(i % 2 != 0){
            console.log(i);
        }

    }
}
 printOdds(50);       

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let oldEnough = `${userName} you now can enjoy driving!`;
    let toYoung = `Sorry ${userName} not old enough yet!`;
        
    if(age < 16) {
            console.log(toYoung);
    } else {
        console.log(oldEnough);
    }
}
checkAge("Shay", 15);
checkAge("Mitch", 16);

// Exercise 3 Section
console.log("EXERCISE 3:\n===========\n");
function cartesianPlane(x, y, ){
    let xAxis = 1;
    let yAxis = 2;
    let Quandrant1 = 0;
    let Quandrant2 = -1;{
        
        if(x > 0 && y > 0)
            return xAxis;
        else if(x < 0 && y > 0)
            return yAxis
        else if(x == 0 && y == 0)
            return Quandrant1;
        else
        return Quandrant2;
    } 

}
console.log(cartesianPlane(10,0));
console.log(cartesianPlane(-1,10));
console.log(cartesianPlane(1,-10));
console.log(cartesianPlane(-0,0));

// Exercise 4 Section
console.log("EXRECISE 4:\n==========");
function triangle(x, y, z){
    if(x ==z || y == z || x == y)
        return `Equilateral triangle`;
}
console.log(triangle(10, 10, 10));//Equilateral Triangle