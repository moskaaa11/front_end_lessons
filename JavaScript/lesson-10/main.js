let out1 = document.querySelector('.out1');
let out2 = document.querySelector('.out2');
let inp = document.querySelector('.inp');
let res= 'Hello,world!';


let par = document.createElement ('p');
par.classList.add('text');
par.innerHTML= res;
out1.appendChild(par);

;

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        inp.style.opacity='1';
        out1.style.opacity= '0';
        inp.setAttribute('value', `${res}`);
        event.preventDefault()
    }
    if (event.code == 'KeyS'  && (event.ctrlKey || event.metaKey)) {
      inp.style.opacity='0';
      out1.style.opacity='0';``
      let par = document.createElement ('p');
      par.classList.add('text');
      par.innerHTML= inp.value;
      out2.appendChild(par);
      event.preventDefault()
    }
  });