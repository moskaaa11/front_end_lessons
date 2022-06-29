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
   out.innerHTML = (Math.trunc(+inp.value / 0.82));
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

//second task

let inp3 = document.querySelector ('.three');
let click = document.querySelector ('.math');
let from = document.querySelector ('.results');
let from1 = document.querySelector ('.results1');
let from2 = document.querySelector ('.results2');

click.onclick = () => {
    from.innerHTML =(inp3.value % 10);
    from1.innerHTML= (( (inp3.value % 100) - (inp3.value % 10)) / 10) ;
    from2.innerHTML = ((inp3.value - (inp3.value %100))/100)

}