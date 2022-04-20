let red1 = document.querySelector('#bgRed')
let green1 = document.querySelector('#bgGreen')
let blue1 = document.querySelector('#bgBlue')
let w = document.querySelector('#w')
let red2 = document.querySelector('#bdRed')
let green2 = document.querySelector('#bdGreen')
let blue2 = document.querySelector('#bdBlue')
let change = document.querySelector('#button')
let paragraph = document.querySelector(".paragraph")

change.addEventListener("click", () => {
    if(red1 < 0 || red2 < 0 || blue1 < 0 || blue2 < 0 || green1 < 0 || green2 < 0 || red1 > 255 || red2 > 255 || blue1 > 255 || blue2 > 255 || green1 > 255 || green2 > 255){
        alert ("Color selection illegal: need to be between 0-255!");
    }else{
        paragraph.style.backgroundColor = 'rgb(' +red1.value + ',' + green1.value + ',' + blue1.value + ')'
        paragraph.style.borderColor = 'rgb(' +red2.value + ',' + green2.value + ',' + blue2.value + ')'
        paragraph.style.borderWidth = w.value + 'px'
    }
})