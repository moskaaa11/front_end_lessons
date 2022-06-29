//minimum start

let a=0.1;
let b=0.2;

console.log (a + b);

//first task

let num = "1";
let num2 = 2;

console.log (+num + +num2);

//second task

let inp=document.querySelector('.input')
let res = document.querySelector('.res');
let out = document.querySelector('.out');

res.onclick = () => {
   out.innerHTML = (+inp.value / 0.82);
}

//third task

//minimum ends
//norm starts

//first task
let inp1 = document.querySelector ('.money');
let inp2 = document.querySelector ('.value');
let but = document.querySelector ('.result')
let chock = document.querySelector ('.chocolate');
let rest = document.querySelector ('.rest');

but.onclick = () => {
    chock.innerHTML = (Math.trunc(inp1.value / inp2.value));
    rest.innerHTML = (inp1.value % inp2.value);
}

