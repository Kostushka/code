// Переменные
const str = 'Солнышко светит. Птички поют.';
let num = 45;
num = 87;
console.log(str, num);
// -----------------------------------------------------------------------------

// switch case
const arr = ['0', '1', '5', '37839'];
const func = (array) => {
    const newArr = [];
    array.forEach((el) => {
        switch (el) {
            case '1':
                newArr.push('Hello');
                break;
            case '5':
                newArr.push('Bye');
                break;
            default:
                newArr.push('1');
        }
    });
    return newArr;
};
console.log(func(arr));
// -----------------------------------------------------------------------------

// создать объект
// Литерал
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};
console.log(obj1);

// Класс
class CreateObj {
    constructor(a, b, c) {
        (this.a = a), (this.b = b), (this.c = c);
    }
    move(x) {
        return this.a + x - this.b * this.c;
    }
}
const obj2 = new CreateObj(1, 2, 3);
console.log(obj2);
console.log(obj2.move(45));

// Объявление функции
function CreateNewObj(a, b, c) {
    (this.a = a), (this.b = b), (this.c = c);
}
const obj3 = new CreateNewObj(1, 2, 3);
console.log(obj3);

CreateNewObj.prototype.move = function (x) {
    return this.a * x - this.b + this.c;
};
console.log(obj3.move(8));
// -----------------------------------------------------------------------------

// Циклы
for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}

let i = 0;
while (i < arr.length) {
    console.log(i, arr[i]);
    i++;
}

// перебрать массив по элементам
for (let el of arr) {
    console.log(el);
}

// перебрать объект по ключам
const number = {
    a: 45,
    b: 76,
    c: 32,
    d: 90,
};
for (let char in number) {
    console.log(char, number[char]);
}
// -----------------------------------------------------------------------------

// Функции
function sumDeclaration(x = 0, y = 0) {
    return x + y;
}
console.log(sumDeclaration(5, 6));
const sumExpression = (x = 0, y = 0) => {
    return x + y;
};
console.log(sumExpression(8));
// -----------------------------------------------------------------------------

// map, filter
const string = arr
    .map((el) => el.charAt(0))
    .reverse()
    .join('');
console.log(string);

const arrString = ['Hello', 'hi', 'hey', 'shalom'];
const array = arrString.map((el, i) => {
    return i % 2 !== 0 ? i : el;
});
console.log(array);

const filterArr = arrString.filter((el) => el.length > 3);
console.log(filterArr);
