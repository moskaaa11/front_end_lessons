let inp1= document.querySelector('.inp-1');
let inp2= document.querySelector('.inp-2');
let inp3= document.querySelector('.inp-3');
let btn1= document.querySelector('.btn-1');
let out1= document.querySelector('.out-1');
let btn2= document.querySelector('.btn-2');
let res = '';
let hour = 25;
let seconds = 11;
let minutes = 33;

const clock = {
    hours: hour,
    minutes: minutes,
    seconds: seconds,
}

btn1.onclick = () => {

    clock.hours = `${hour}годин`;
    clock.minutes= `${minutes}хвилин`;
    clock.seconds= `${seconds}секунд`;

    for (let key in clock) {
        res+=`<li class=out-1__list>${clock[key]}</li>`;
    }

    out1.innerHTML= res;
}

btn2.onclick = () => {

    if ( (inp2.value + minutes.value) < 60) {
        minutes = minutes.value + inp2.value;
    } else if (inp2.value + minutes.value >= 60) {
        minutes = (minutes.value + inp2.value)%60;
        hour = hour.value + ((minutes.value + inp2.value)-((minutes.value + inp2.value)%60));
    }
}