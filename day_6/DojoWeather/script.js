function popUp(){
    alert("loading weather report...")
}

function dropdown(element){
    console.log(element.value)
    // USER SELECTED CELSIUS
    if(element.value === "C°"){
        var changeDegree = document.querySelector('.f1')
        changeDegree.innertext("75° 65°")
    }
    else{

    }
}


function disappear(){
    var element = document.querySelector('.bottomBanner')
    element.remove()
}
