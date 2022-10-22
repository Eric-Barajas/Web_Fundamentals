var count = 3

function add1(){
    count ++;
    var countElement = document.querySelector(".uplikes");
    countElement.innerText = count + "like (s)"
    console.log(count);
}