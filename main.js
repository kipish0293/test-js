'use strict'; 
// Директива, которая ставится первой строкой в файле скрипта и обозначает, 
// что используется новый стандарт EP6, старые ошибки тут не работают.

var leftBord = 33;
console.log (leftBord);

// alert("Hello world!");

let person = {
    name: "John",
    age: 25,
}

console.log (person["name"]);

let answer = prompt("Вам есть 18?" , "");

console.log(typeof(answer));

let incr = 10,
    decr = 10;

// incr++;
// decr--;


// Инкримент увеличивает на 1
// Префиксная форма(впереди переменной)-выводит значение после операции
console.log(++incr);

// декримент уменьшает на 1
// Постфиксная форма(в конце) выводит значение до изменения
console.log(decr--);
// Остаток от деления чисел
console.log(5%2);

console.log("2" == 2);

// Один оператор "=" - присваивание;
// Два оператора "==" - сравнение;
// Три оператора "===" - Строгое сравнение по типу данных


// Оператор && Обозначает значение "И" и является правдой только когда оба значения истина.
let isChecked = true,
    isClose = true;

console.log(isChecked && isClose);

// Оператор && Обозначает значение "И" и является правдой только когда оба значения истина.
let isCheckedsa = true,
    isClosesa = false;

console.log(isCheckedsa && isClosesa);

// Оператор "||" "ИЛИ" выводит true в случае если хотя бы одно значение правдиво.

let isPocket = true,
    isChpocket = false;

console.log(isPocket || isChpocket);

// Знак отрицание "!" переводит правду в лож и обратно.
let isPockets = false,
    isChpockets = false;

console.log(isPockets || !isChpockets);

