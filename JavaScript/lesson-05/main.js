//first
let inp1 = document.querySelector('.inp-1');
let inp2 = document.querySelector ('.inp-2');
let btn1 = document.querySelector ('.btn-1');
let out1 = document.querySelector ('.out-1');
function t1() {
    if (inp1.value < inp2.value){
        out1.innerHTML=('-1');
    } else if (inp1.value > inp2.value) {
        out1.innerHTML= ('1');
    } else if (inp1.value == inp2.value) {
        out1.innerHTML = ('0');
    }
}

btn1.onclick = t1;

// second 
let inp3 = document.querySelector ('.inp-3');
let inp4 = document.querySelector ('.inp-4');
let inp5 = document.querySelector ('.inp-5');
let btn2 = document.querySelector ('.btn-2');
let out2 = document.querySelector ('.out-2');


function t2() {
    let out = "";

    out = inp3.value + inp4.value + inp5.value;
    
    out2.innerHTML=out;
}

btn2.onclick=t2

//third

let inp6 = document.querySelector ('.inp-6');
let inp7 = document.querySelector ('.inp-7');
let btn3 = document.querySelector ('.btn-3');
let out3 = document.querySelector ('.out-3');

function t3() {

    if (inp6.value == false) {
        out3.innerHTML = inp7.value*inp7.value;
    } else if (inp7.value == false) {
        out3.innerHTML = inp6.value * inp6.value;
    } else {
        out3.innerHTML= inp6.value * inp7.value;
    }
}

btn3.onclick=t3