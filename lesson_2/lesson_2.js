// 6) Создать переменные всех основных типов данных *(можно использовать прошлое ДЗ)*
// 7) Для каждой переменной вывести в консоль её тип с помощью typeof

  "use strict";
//                        Задание 7 (Вывести в консоль все объявленные переменные через оператор typeof)
//                                                            Вариант №1 
//

let declared_variable_Infinity = 1 / 0; 
let declared_variable_NaN = "не число" / 2;
let declared_variable_string = 'строка';
let declared_variable_number = 55;
let declared_variable_object = {};
let declared_variable_symbol = Symbol("id");
let declared_variable_undefined;
let declared_variable_Boolean = (10 < 1);
let declared_variable_BigInt = 9997000254740991n;
let declared_variable_promise = new Promise(function(resolve, reject) { resolve("Я мгновенный промис") });
let declared_variable_function = () => { 8 + 1} // колбэк
let declared_variable_array = [...Array(3)].map((el, ind) => ind + 1)


let arr = [
  declared_variable_Infinity,
  declared_variable_NaN,
  declared_variable_string,
  declared_variable_number,
  declared_variable_object, 
  declared_variable_undefined,
  declared_variable_symbol,
  declared_variable_Boolean,
  declared_variable_BigInt,
  declared_variable_promise,
  declared_variable_function, 
  declared_variable_array
]
arr.forEach(el => console.log(typeof el))
//                                                    Вариант №2 (Без переменных)
let a
console.log(`
  ${typeof {}} 
  ${typeof 1 / 0}
  ${typeof ''} 
  ${typeof [...Array(4)]}
  ${typeof (3 == 3)} 
  ${typeof BigInt(9997000254999999)}
  ${typeof 445} 
  ${typeof null} 
  ${typeof (() => {})}
  ${typeof Symbol("id")}
  ${typeof a}
`);   

//                                             Вариант №3 (С использованием интераций)
//                                     
console.log('\t\t\tВывести в консоль все типы данных \n')
  let obj = {
    ['Number']: [
      [ 1 / 0 , 'Нельзя делить на 0, а то будет бесконечность'],
      [ "не число" / 2, 'нельзя делить на другие типы данных только на числа'],
      [80171, 'Обычное число'],
    ],
    ['bigint']: [BigInt(9997000254999999), 'Очень большое число!!! имеет в конце символ n до'],
    ['String']: ['строка', 'Просто строка'],
    ['symbol']: [Symbol("id"), Symbol("Это уникальный индификатор, точно такого же больше нет").description],
    ['Boolean']: [(10 == 10), 'Логическое значение, он необходим для условий и их ветлений'],
    ['undefined']: [a, 'Переменная не была присвоина не какому типу данных, а значит пустая'],
    ['Object']: [ 
      [{}, 'Просто объект. На нем базируеться весь JS'], 
      [null, 'Null Это отдельный тип данных который содержит только значение null'], 
      [[...Array(4)],'Array Это тоже самый объект но называеться Ассоциативный массив. В дополненеие, объекты позволяют хранить данные со строковыми ключами.'],
    ],
    ['Function']: [(() => {}), 'стрелочная функция '],
  }

  Object.entries(obj).forEach((global_el, ind) =>{
    console.log(` \t\t\t Тип данных ${global_el[0]} \n ${(typeof global_el[1][1]) == "object" ? global_el[1].map((el) => `Под тип :${typeof el[0]}  Описание: ${el[1]} \n`).join(' '): global_el[1].map((el, ind) => ind == 0 ? `Тип :${typeof el}`: `Описание: ${el} \n`).join(' ')}`) 
  }) 
//                                       9) Простые примеры неявного преобразования

true + false + null; // 1 (Преобразовани булевых типов всегда даёт только 0 или 1. а null всегда 0 )
undefined + 1 || undefined * 1 || undefined / 1 // undefined - не преобразуеться в другой тип данных. Особенность языка.
"number" + 10 + 2; // number102 произойдет склеивание с левым операндом всех последуюших 
10 + 2 + "number"; // 12number с начало произойдет сумма а потом склеивание.
+"4" + "10px" // 410px c начало произойдет преобразование числа потом склеивание.
+"4" * "10px" // NaN не число
+"4" / "10px" // NaN не число
10 / "5" // 2 пребразование в число потом операция \
"2" * "3" // 6 пребразование в число потом операция \
"4px" - 2  // NaN
"-10  " + 5 // -10  5 склеивание 
"-10  " - 5 // NaN
" \t \n" - 2 // -2 Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число.
[1]+[2] // Строка 12
                                     
//                                        10) Простые примеры операторов сравнения 
console.log( 2 < 1)   // false                                       
console.log( 2 > 1 );  // true (верно)
console.log( 2 == 1 ); // false (неверно)
console.log( 2 != 1 ); // true (верно)
// Сравнение строк
console.log( 'Я' > 'А' ); // true
console.log( 'Коты' > 'Кода' ); // true
console.log( 'Сонный' > 'Сон' ); // true
// Сравнение разных типов
console.log('2' > 1 ); // true, строка '2' становится числом 2
console.log( '01' == 1 )
console.log( true == 1 ); // true
console.log( false == 0 ); // true

console.log(0 === false) // false (неверно)
console.log( null === undefined )// false (неверно)

console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)

console.log([] == []) // false
console.log({} == {}) // false

//                                     8)Добавить примеры явного преобразования типов, используя
//                                      
String(123) // '123'
String(-12.3) // '-12.3'
String(null) // 'null'
String(undefined) // 'undefined'
String(true) // 'true'
String(false) // 'false'
String(function () {}) // 'function () {}'
String({}) // '[object Object]'
String({ key: 42 }) // '[object Object]'
String([]) // ''
String([1, 2]) // '1,2'

Number('123') // 123
Number('123.4') // 123.4
Number('123,4') // NaN
Number('') // 0
Number(null) // 0
Number(undefined) // NaN
Number(true) // 1
Number(false) // 0
Number(function () {}) // NaN
Number({}) // NaN
Number([]) // 0
Number([1]) // 1
Number([1, 2]) // NaN

Boolean('') // false
Boolean('string') // true
Boolean('false') // true
Boolean(0) // false
Boolean(42) // true
Boolean(-42) // true
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(function () {}) // true
Boolean({}) // true
Boolean({ key: 42 }) // true
Boolean([]) // true
Boolean([1, 2]) // true


const dataType = [
  [Boolean('true'), 'true'], 
  [Boolean(''), ''], 
  [Boolean(5), 5], 
  [Boolean(0), 0], 
  [Boolean(["Я"]), ["Я"]],
  [Boolean([]), []],
  [Boolean({I:"Я"}), {I:"Я"}],
  [Boolean({}), {}]
]

dataType.forEach(el => {
    if(el[0]){
       console.log(`Истина логическое значение будет ${el[0]} тип данных ${typeof el[1]}`)
    }else{
       console.log(`Лож логическое значение будет ${el[0]} тип данных ${typeof el[1]}`)
    }
});

//                  Пример использования методов явнаго преобразования String Number Boolean
//                                          
let dateTypeObj = {
  ["stringType"]: "Просто строка",
  ["numberType"]: 666,
  ["booleanType"]: false,
  ["objType"]: {},

  [Symbol.toPrimitive](dateType) {
    console.log(`dateType: ${dateType}`);
    return (dateType == "string") ? `{stringType: "${this.stringType}"}`: 
           (dateType == "number") ? this.numberType : 
           (dateType == "bullian") ? `{booleanType: "${this.booleanType}"}`:
           (dateType == "objType") ? this.objType:   
           (dateType == "default") ? this.stringType : 'Такого типа данных в списке нет'
  }
};
console.log(String(dateTypeObj), Number(dateTypeObj), Boolean(dateTypeObj))

