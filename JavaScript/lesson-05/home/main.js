//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    let out1 = document.querySelector('.out-1')
    let res = '';
    let i = '*';

    for (y=1; y<=3; y++){
        for (i=1; i<=3; i++) {
        res +='*';
        }
        res += '_';
    }
    
    out1.innerHTML= res;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>
let out2 = document.querySelector ('.out-2')
let res1 = '';

function t2() {
    for (i=1; i <= 3; i++){
        res1+= i+"<br>";
        for (y=1; y<=3; y++) {
        res1 +='*' + '_';
        }
        res1 +='<br>'
    }
    

    out2.innerHTML= res1;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>

let out3= document.querySelector ('.out-3');
let res2 = '';

function t3() {
    for (i=1; i<=4; i++) {
        for (y=1;y<=3; y++){
            res2 += '*' + '_';
        }
        res2 += '<br>';
    }

    out3.innerHTML= res2;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *

let out4 = document.querySelector ('.out-4');
let res3 = '';

function t4() {
    for (i=1; i<=3; i++) {
        res3 += i + '_';
        for (y=1; y<=5;y++){
            res3 += y + "*";
        }
    }
    out4.innerHTML= res3;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>
let out5 = document.querySelector ('.out-5');
let res4 = '';

function t5() {
    for (i=1;i<=3; i++){
        for (y=1;y<=6;y++){
            if (y%2>0) {
                res4 += '1';
            }
            else if (y%2==0) {
                res4 +='0';
            }
        }
        res4 += '<br>'
    }
    out5.innerHTML=res4;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x
let out6 = document.querySelector ('.out-6');
let res5 = '';

function t6() {
    for (i=1; i<=3;i++){
        for (y=1;y<=4;y++){
            if (y%2==0) {
                res5 +='x';
            }
            else if (y%3==0) {
                res5 +='01';
            }
            else {
                res5 += '10';
            }
        }
        res5 += '<br>'
    }
    out6.innerHTML=res5;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****
let out7 = document.querySelector ('.out-7');
let res6 = '';

function t7() {
    for (i=1; i<=4; i++){
        if (i%4==0) {
            for (j=1; j<=4;j++) {
                res6 += "*";
            }
            res6 += '<br>';
        } else if (i%3==0) {
            for (y=1; y<=3;y++) {
                res6 += "*";
            }
            res6 += '<br>';
        } else if (i%2 == 0){
            for (k=1; k<=2;k++){
                res6 += '*';
            }
            res6 += '<br>';
        } else {
            res6 += '*' + '<br>';
        }
    }
    out7.innerHTML=res6;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

function t8() {

}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function t9() {

}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_
let out10 = document.querySelector ('.out-10');
let res10='';

function t10() {
    for (i=1; i<=50; i++) {
        if (i%10==0) {
            res10 += i +'_'+ '<br>';
        } else if (i<10) {
            res10 +='0' + i + '_';
        } else {
            res10 += i + '_';
        }
    }
    out10.innerHTML=res10;
}

document.querySelector('.b-10').onclick = t10;