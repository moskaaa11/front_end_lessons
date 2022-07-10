// Task 1
// При нажатии кнопки .b-1 срабатывает функция f1. Функция должна прочитать содержимое .i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в .out-1.

let i1 = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');
let x= 4;


function f1(){
    if (x == i1.value){
        out1.innerHTML=('true');
    }
    else if (x<i1.value, i1.value>x) {
        out1.innerHTML=('false');
    };
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки .b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в .out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;
let out2= document.querySelector ('.out-2')

function f2(){
    if (a21>a22){
        out2.innerHTML= (a21);
    } else if (a22>a21) {
        out2.innerHTML= (a22);
    }
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - .i-31 и .i-32, оба - input[type=number]. При нажатии кнопки .b-3 срабатывает функция f3. Функция должна сравнить числа из input, вывести в  .out-3 большее число.
// Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.


function f3(){

    let out3= document.querySelector ('.out-3');
    let in1= document.querySelector ('.i-31');
    let in2= document.querySelector ('.i-32')

    if (in1.value > in2.value) {
        out3.innerHTML= (in1.value);
    } else if (in1.value <in2.value) {
        out3.innerHTML = (in2.value);
    }
}

document.querySelector('.b-3').onclick = f3;


// Task 4. 
// Пользователь вводит в .i-4 год своего рождения. Есть кнопка .b-4 которая запускает функцию f4. Функция должна вывести в .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

function f4(){
    let in4 = document.querySelector ('.i-4');
    let out4 = document.querySelector ('.out-4')

    if (in4.value >= 18) {
        out4.innerHTML = ('1');
    } else if ( in4.value < 18) {
        out4.innerHTML = ('0');
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5. 
// На странице есть input c классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ 'm' если число меньше нуля, 0 если число равно нулю и число 1 если больше.

function f5(){
    let in5 = document.querySelector ('.i-5');
    let out5 = document.querySelector ('.out-5');

    if (in5.value < 0) {
        out5.innerHTML = ('m');
    }
    else if (in5.value == 0 ) {
        out5.innerHTML= ('0');
    }
    else if (in5.value > 0){
        out5.innerHTML= ('1');
    }
}

document.querySelector('.b-5').onclick = f5;


// Task 6.
// На странице есть input с классом i-6, куда пользователь может ввести число. Есть кнопка .b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

function f6(){

    let in6 = document.querySelector ('.i-6');
    let out6 = document.querySelector ('.out-6');

    if (in6.value % 2==0) {
        out6.innerHTML= ('even');
    }
    else if (in6.value %2 > 0) {
        out6.innerHTML = ('odd');
    }
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - .i-71 и .i-72, оба - input[type=number]. При нажатии кнопки .b-7 срабатывает функция f7. Функция должна число из .i-71 возвести в степень .i-72, вывести результат в  .out-7. Для возведения в степень можно использовать **, или Math.pow.

function f7(){
    let in71 = document.querySelector ('.i-71');
    let in72 = document.querySelector ('.i-72');
    let out7 = document.querySelector ('.out-7');

    out7.innerHTML= (Math.pow(in71.value,in72.value));
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с 1, 2, 3. И если число выбрано - 1, то вывести в .out-8 строку one, если 2 - two, если 3 - three. Напоминаю - это программирование. Как указано в задании - так и выводим. Т.е. Three с большой буквы - ошибка!!!

function f8(){
    let s8 = document.querySelector ('.s-8');
    let out8 = document.querySelector ('.out-8')

     if (s8.value == 1) {
        out8.innerHTML= ('one');
     } else if (s8.value == 2){
        out8.innerHTML = ('two');
     } else if (s8.value == 3) {
         out8.innerHTML = ('three');
     }
       
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Есть input с классом .i-9, куда пользователь может ввести номер квартиры. Есть кнопка .b-9 которая запускает функцию f9. Функция должна вывести в .out-9 номер подъезда, в котором находится квартира.
//  если от 1 включительно до 32 включительно - то вывести цифру 1
//  если от 33 (включительно) до 43(включительно) - то вывести 2
//  если от 44(включительно) до 64 (всключительно) - то 3.
//  В противном случае, вывести 0.

function f9(){
    let inp9 = document.querySelector ('.i-9');
    let out9 = document.querySelector ('.out-9');

    if (inp9.value>= 1, inp9.value <= 32){
        out9.innerHTML= ("1");
    }
    else if (inp9.value >= 33, inp9.value <=43) {
        out9.innerHTML= ("2");
    }
    else if (inp9.value>=44, inp9.value<=64) {
        out9.innerHTML = ("3");
    } 
    else {
        out9.innerHTML = ("0");
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Дан select .s-100. По нажатию кнопки, выведите value выбранного option в .out-10.

function f10(){
    let s100 = document.querySelector ('.s-100')
    let out10 = document.querySelector ('.out-10')

    if (s100.value == 6) {
        out10.innerHTML = ('six');
    } 
    else if (s100.value == 7) {
        out10.innerHTML = ('seven')
    }
    else if (s100.value == 11) {
        out10.innerHTML = ('eleven')
    }
    else if (s100.value == 9){
        out10.innerHTML = ('nine')
    }  

}

document.querySelector('.b-10').onclick = f10;

// Task 11
// Дан select .s-110. По изменению состояния select (событие onchange) выведите value выбранного option в .out-11.

function f11(){
    let s110 = document.querySelector ('.s-110')
    let out11 = document.querySelector ('.out-11')

    if (s110.value == 6) {
        out10.innerHTML = ('six');
    } 
    else if (s110.value == 7) {
        out11.innerHTML = ('seven')
    }
    else if (s110.value == 11) {
        out11.innerHTML = ('eleven')
    }
    else if (s110.value == 9){
        out11.innerHTML = ('nine')
    }  
}

document.querySelector('.s-110').onchange = f11;

// Task 12
// Дан input .i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в .out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12(){
   let v = i120.value;
   document.querySelector('.out-12').innerHTML = (typeof v);

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?
    let in130 = document.querySelector ('.i-130')

function f13(){
    let s = in130.value;
    document.querySelector('.out-13').innerHTML = (typeof s);
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Дан input .i-141 и .i-142, type=number.  Дан select .s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в .out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.

let inp141 = document.querySelector ('.i-141');
let inp142 = document.querySelector ('.i-142');
let sel143 = document.querySelector ('.s-143');
let out14 = document.querySelector ('.out-14')

function f14(){
    if (sel143.value == '+') {
        out14.innerHTML= (inp141.value + inp142.value);
    } else if (sel143.value == "-" ) {
        out14.innerHTML= (inp141.value - inp142.value);
    } else if (sel143.value == '/') {
        out14.innerHTML= (inp141.value / inp142.value);
    } else if (sel143.value == '*') {
        out14.innerHTML= (inp141.value * inp142.value);
    }
}

document.querySelector('.b-14').onclick = f14;


// Task     15
// Дан select .s-151 и .s-152, каждый из которых содержит 1 и 0.  Дан select .s-153, который содержит две операции - && и || . Дана кнопка .b-15, при нажатии на которую срабатывает функция f15. Функция выводит в .out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.
let s151 = document.querySelector ('.s-151');
let s152 = document.querySelector ('.s-152');
let s153 = document.querySelector ('.s-153');
let out15 = document.querySelector ('.out-15');
function f15(){
    if (s153.value == '&&') {
        out15.innerHTML = (s151.value&&s152.value);
    }
    else if (s153.value == '||') {
        out15.innerHTML = (s151.value||s152.value);
    }
}

document.querySelector('.b-15').onclick = f15;
