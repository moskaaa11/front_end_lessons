let inp =document.querySelector ('.input');
let btn = document.querySelector ('.button');
let out = document.querySelector ('.out');

btn.onclick = () => {
    if (inp.value <= 11) {
        out.innerHTML = ('Ти дитина');
    }
    else if (inp.value >= 12 && inp.value <= 17 ) {
        out.innerHTML = ('Ти підліток');
    }

    else if (inp.value >= 18 && inp.value <= 59 ) {
        out.innerHTML = ('Ти дорослий');
    }

    else if (inp.value >= 60) {
        out.innerHTML = ('Ти пенсіонер');
    }
 }

// first end

let inp1 =document.querySelector ('.input1');
let btn1 = document.querySelector ('.button1');
let out1 = document.querySelector ('.out1');

btn1.onclick = () => {
    if (inp1.value == 0 ) {
        out1.innerHTML = (')');
    }
    else if (inp1.value == 1 ) {
        out1.innerHTML = ('!');
    }

    else if (inp1.value ==2 ) {
        out1.innerHTML = ('@');
    }

    else if (inp1.value == 3) {
        out1.innerHTML = ('#');
    }

    else if (inp1.value == 4) {
        out1.innerHTML = ('$');
    }

    else if (inp1.value == 5) {
        out1.innerHTML = ('%');
    }

    else if (inp1.value == 6) {
        out1.innerHTML = ('^');
    }

    else if (inp1.value == 7) {
        out1.innerHTML = ('&');
    }

    else if (inp1.value == 8) {
        out1.innerHTML = ('*');
    }

    else if (inp1.value == 9) {
        out1.innerHTML = ('(');
    }
 }

 // second ends

let inp2 =document.querySelector ('.input2');
let btn2 = document.querySelector ('.button2');
let out2 = document.querySelector ('.out2');

btn2.onclick = () => {
    if (inp2.value < 200) {
        out2.innerHTML = (inp2.value);
    }

    else if (inp2.value>= 200 , inp2.value <=300) {
        out2.innerHTML = (inp2.value * 0.97);
    }

    else if (inp2.value> 300 , inp2.value <=500) {
        out2.innerHTML = (inp2.value * 0.95);
    }

    else if (inp2.value> 500 ) {
        out2.innerHTML = (inp2.value * 0.93);
    }
}

//third task 
 
