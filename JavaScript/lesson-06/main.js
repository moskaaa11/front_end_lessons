let inp1= document.querySelector('.inp-1');
let out1 = document.querySelector ('.out-1');
let btn1 = document.querySelector ('.btn-1');
let inp2= document.querySelector('.inp-2');
let out2 = document.querySelector ('.out-2');
let btn2 = document.querySelector ('.btn-2');
let inp3= document.querySelector('.inp-3');
let out3 = document.querySelector ('.out-3');
let out4 = document.querySelector ('.out-4');
let btn3 = document.querySelector ('.btn-3');
let res= '';
let inc = '';
let time= '';
let x = '';

const car = {
    producer: 'mazda',
    model: 'cx-5',
    year: '2014',
    avSpeed: '100',
    fuel: '52',
    spend: '10',
};

car.operator = inp1.value;


btn1.onclick = () => {
    for (let key in car) {
    res +=`<li class=out-1__list>${car[key]}</li>`;
}
    out1.innerHTML= res;
}

btn2.onclick = () => {
 
    for (let key in car) {
        if (inp2.value == key) {
            for (let arr in car[key]) {
                inc += car[key][arr];
            }
            break;
        }
    }
    out2.innerHTML = inc;  
}

btn3.onclick = () => {
    out3.innerHTML = ('Необхідно' + ' ' + ((inp3.value / 100) * car.spend)+ ' ' + 'л палива' );

    if (inp3.value<4){
        time= inp3.value / car.avSpeed; 
    } else if ( inp3.value>4) {
        x =Math.trunc ((inp3.value / car.avSpeed)/4);
        time = ((inp3.value/ car.avSpeed) + x)
    }
    out4.innerHTML= ('Ти витратиш на дорогу'+ ' '+time+ ' ' + 'годин');
}