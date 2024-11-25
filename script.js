"use strict";

// завдання 1

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('ЛолКек');
    } 
    else if (i % 3 === 0) {
        console.log('Лол');
    }
     else if (i % 5 === 0) {
        console.log('Кек');
    }
     else {
        console.log(i);
    }
}

// завдання 2

//if

function printEvenNumbers(value) {
    if (typeof value !== 'number' || isNaN(value)) {
        console.log('Таке чуство шо Бог десь наказує нас за шось');
        return;
    }

    for (let i = 2; i < value; i += 2) {
        console.log(i);
    }
}

//while

function printEvenNumbersWhile(value) {
    if (typeof value !== 'number' || isNaN(value)) {
        console.log('Таке чуство шо Бог десь наказує нас за шось');
        return;
    }

    let i = 2;
    while (i < value) {
        console.log(i);
        i += 2;
    }
}