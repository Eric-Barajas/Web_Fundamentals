for(i=1; i<21; i+=2) {
    console.log(i);
}
// good

for(i=100; i>-1; i-=3) {
    console.log(i);
}
// good

for(i=4; i>-4; i-=1.5) {
    console.log(i);
}
// good

let i = sum
for(i=1; i<101; i++) {
    console.log(i += sum);
}
// unsure

// for(i=1; i<101; i++) {
//     console.log(i);
// }
// let i=factorialize
// factorialize(100)
// ask for clarification!