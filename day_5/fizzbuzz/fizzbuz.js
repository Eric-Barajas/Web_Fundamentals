// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"

for(var i=1;i<100;i++){
    if(i%5===0){
        console.log(Fizz);
    }
    else if(i%10===0){
        console.log(Buzz);
    }
    else if(i%5===0 && i%10===0) {
        console.log(FizzBuzz);
    }
    else {
    console.log(i);
    }
}
// for(var i=1; i<101; i++) {
//     if(i % 15 == 0) {
//         console.log("FizzBuzz");
//     } else if(i % 5 == 0) {
//         console.log("Buzz");
//     } else if(i % 3 == 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }