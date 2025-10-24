                      console.log('\t\t\t\t Простой уровень')                       
                      console.log('\t\t\t\t Задание 1.1')

console.log('Цель — отработать синтаксис функций, аргументы, return, циклы for и while.')
console.log(`Сумма чисел от 1 до N \n
             Напиши функцию sumTo(n), которая возвращает сумму всех чисел от 1 до n.\n
             Пример: sumTo(5) → 15`)

                      console.log('\t\t\t\t Вариант №1')

let sumTo = (n) => {
  for(let i = 1, acc = 0; i <= n; i++){
    acc = acc + i 
    if(i >= n){
      return console.log(acc)  
    }
  }
}
sumTo(4)
                      console.log('\t\t\t\t Вариант №2')

let sumTo2 = (n) => console.log([...Array(n)].map((el, id) => id + 1).reduce((acc, el) => acc + el, 0));  
sumTo2(4)

                      console.log('\t\t\t\t Вариант №3')

let sumTo3 = (n) => {
  if(n === 0){
    return 0
  }else{
    return n + sumTo3(n - 1) 
  }
 
}
console.log(sumTo3(3)) 

                      console.log('\t\t\t\t Задание 1.2')

console.log(`Степень числа \n 
             Напиши функцию pow(base, exponent), которая возводит base в степень exponent.\n
             Пример: pow(2, 3) → 8`)

                      console.log('\t\t\t\t Вариант №1')

let pow = (base, exponent) => {
  for(let i = 0, acc = 1; i <= exponent - 1; i++){
    acc = acc * base
    if(i >= exponent - 1){
      return console.log(acc) 
    }
  }
}
pow(2,3)

                      console.log('\t\t\t\t Вариант №2')

let pow2 = (base, exponent) => console.log([...Array(exponent)].map(() => base).reduce((acc, el) => acc * el, 1));  
pow2(2,3)

                      console.log('\t\t\t\t Вариант №3')

let pow3 = (base, exponent) => {
  if(exponent === 0){
    return 1
  }else{
    return base * pow3(base, exponent - 1) 
  }
}
console.log(pow3(3, 3)) 

                      console.log('\t\t\t\t Задание 1.3')
                 
console.log(`Подсчёт чётных чисел \n
             Функция countEven(n) должна вернуть количество чётных чисел от 1 до n.\n
             Пример: countEven(10) → 5`) 

                      console.log('\t\t\t\t Вариант №1')

let countEven = (n) => {
  for(let i = 1, j = 0; i <= n; i++){
    if(i % 2 === 0){
      j++
      if(i >= n){
        return console.log(j)
      }
    } else {
      continue
    }
  }
}
countEven(12)

                      console.log('\t\t\t\t Вариант №2')

let countEven2 = (n) => console.log([...Array( Math.floor(n / 2))].map((el, ind) => ind + 2).length) 
countEven2(12)

                      console.log('\t\t\t\t Вариант №3')

let countEven3 = (n, i = 0) => {
  if(n === 0){
    return console.log(i)
  }else if(n % 2 === 0){
    return pow3(n - 1, i + 1)
  }else{
    return pow3(n - 1, i)
  }
 
}
countEven3(12)

                      console.log('\t\t\t\t Задание 1.4')
                      console.log('\t\t\t\t Вариант №1')
//
console.log(`Факториал числа \n
             Реализуй factorial(n) с помощью цикла.\n
             Пример: factorial(5) → 120`)                                            

                      console.log('\t\t\t\t Вариант №1')

let factorial = (n) => {
  for(let i = 1, acc = 1; i <= n; i++){
    acc = acc * i
    if(i >= n){
      return console.log(acc)
    }
  }
}
factorial(5)

                      console.log('\t\t\t\t Вариант №2') //Вариант №2 с помощью рекурсивного цикла.

let factorial2 = (n) => console.log([...Array( Math.floor(n))].map((el, ind) => ind + 1).reduce((acc, el) => acc * el, 1))
factorial2(5)

                      console.log('\t\t\t\t Вариант №3') //Вариант №3 с помощью рекурсивного цикла.
//                                     
let factorial3 = (n) => { 
  if (n === 0) {
    return 1;
  }
  return n * countEven3(n - 1);
  //  x === 0 ? 1 : x * factorial2(x-1)        
}
console.log(factorial3(5));

                      console.log('\t\t\t\t Задание 1.5')
    
console.log(`Повтор строки \n
             Напиши функцию repeatText(text, count), которая возвращает строку,\n
             повторённую count раз подряд (без String.repeat).\n
             Пример: repeatText('Hi', 3) → 'HiHiHi'`)                            

                      console.log('\t\t\t\t Вариант №1')             

let repeatText = (text, count) => {
  for(let i = 1, acc = ''; i <= count; i++){
    acc = acc + text
    if(i >= count){
      return console.log(acc)
    }
  }
}
repeatText('Hi', 3)                                    
                      console.log('\t\t\t\t Вариант №2')

let repeatText2 = (text, count) => console.log([...Array(count)].map(() => text).reduce((el, acc) => acc + el, ''))
repeatText2('Hi', 3)

                      console.log('\t\t\t\t Вариант №3')

let repeatText3 = (text, count) => {
  if(1 === count){
    return text
  }else{
    return text + repeatText3(text, count - 1)
  }
}
console.log(repeatText3('Hi', 4)) 

                      console.log('\t\t\t\t Средний уровень')                       
                      console.log('\t\t\t\t Задание 2.1')

console.log(` Числа в диапазоне \n
              Функция printRange(start, end) выводит все числа от start до end,\n
              (включительно).\n
              Пример: printRange(3, 7) → 3 4 5 6 7`)   

                      console.log('\t\t\t\t Вариант №1')

let printRange = (start, end) => {
  for(let i = start; i <= end; i++){
    console.log(i)
  }
}
printRange(3,7)

                      console.log('\t\t\t\t Вариант №2')

let printRange2 = (start, end) => console.log([...Array(end - start + 1)].map((el, ind) => start + ind))
printRange2(3,7)

                      console.log('\t\t\t\t Вариант №3')

let printRange3 = (start, end, arr = []) => {
  if(end === start){
    arr.push(start)
    return console.log(arr.join(' ')) 
  } else {
    arr.push(start)
    return printRange3(start + 1 , end, arr)
  }
}
printRange3(3, 7)                      

                      console.log('\t\t\t\t Задание 2.2')
                
console.log(`Подсчёт цифр \n
             Функция countDigits(num) возвращает, сколько цифр в числе num.\n
             Пример: countDigits(12345) → 5`) 

                      console.log('\t\t\t\t Вариант №1')

let countDigits1 = (num) => {
 let strLength = String(num).length
  for(let i = 0; i <= strLength; i++){
    if(i === strLength){
      return console.log(i)
    }   
  }
}
countDigits1(434555656456456)

                      console.log('\t\t\t\t Вариант №2')

let countDigits2 = (num) => {
  for(let i = 1; 10 < num; i++){
    num = parseInt(num / 10)
    if(10 > num){
      return console.log(i + 1)
    }
  }
}
countDigits2(434555656456456)

                      console.log('\t\t\t\t Вариант №3')

let countDigits3 = (num) => console.log([...Array(String(num).length)].map((el, ind) => ind + 1).length)
countDigits3(434555656456456)

                      console.log('\t\t\t\t Задание 2.3')
                      console.log('\t\t\t\t Вариант №1') 

console.log(`Сумма цифр числа \n
             Функция sumDigits(num) находит сумму всех цифр числа (используя % и Math.floor.\n
             Пример: sumDigits(123) → 6`) 

let sumDigits1 = (num) => {
  for(let i = 0, acc = 0; i <= String(num).length; i++){
    acc = acc + i 
    if(i >= String(num).length){
      return console.log(acc)  
    }
  }
}
                      console.log('\t\t\t\t Вариант №2')  

let sumDigits2 = sum => String(sum).split('').reduce((acc, el) => acc + Number(el), 0)
console.log(sumDigits2(123)) 

                      console.log('\t\t\t\t Задание 2.4')

console.log(`Таблица умножения \n
             Функция printTable(n) выводит таблицу умножения для числа n (от 1 до 10).\n
              ' 3 × 1 = 3 ' \n
              ' 3 × 2 = 6 '\n
              ' ... \n '
              ' 3 × 10 = 30 ' `)                                

                      console.log('\t\t\t\t Вариант №1')

let printTable = (n) => {
  for(let i = 1; i <= 10; i++){
    console.log(`${n} × ${i} = ${n * i}`)
  }
}
printTable(5)

                      console.log('\t\t\t\t Вариант №2')

let printTable2 = (n) => [...Array(10)].map((el, ind) => `${n} × ${ind + 1} = ${n * (ind + 1)}`).forEach( el => console.log(el))  
printTable2(3)   

                      console.log('\t\t\t\t Задание 2.5')

console.log(`Обратный отсчёт \n
             Функция countdown(from) выводит все числа от from до 1..\n
             Пример: countdown(5) → 5 4 3 2 1 \n`) 

                      console.log('\t\t\t\t Вариант №1')

let countdown = (from) => {
  for(let i = from; 1 <= i; i--){
    console.log(`${i}`)
  }
}
countdown(5)

                      console.log('\t\t\t\t Вариант №2')

let countdown2 = (n) => console.log(...[...Array(n)].map((el, ind) => n - ind)) 
countdown2(5) 

                      console.log('\t\t\t\t Сложный уровень')                       
                      console.log('\t\t\t\t Задание 3.1') 

console.log(` Числа Фибоначчи\n
              Функция fibonacci(n) возвращает n-е число Фибоначчи.\n
              Пример: fibonacci(6) → 8\n`) 
              
                      console.log('\t\t\t\t Вариант №1')

let fibonacci = (n) => {
  for(let acc = 0, i = 1, j = 0, arr = []; arr.length <= n; ){
    acc = i + j;
    i = acc;
    j = i + j;
    arr.push(...[i,j]);
    if( arr.length >= n && n % 2 === 0){
      return console.log(arr[arr.length - 1]);
    }else if(arr.length >= n && n % 2 !== 0){
      return console.log(arr[arr.length - 2]);
    }
  }
}
fibonacci(6)

                      console.log('\t\t\t\t Вариант №2')

let fibonacc2 = (n, i = 0, j = 1) => {
  if(n === 0 || n === 1){
    let number =  n === 0 ? i : j
    return console.log(number)  
  }else{
    return fibonacc2(n - 2, i = i + j, j + i)
  }
}
fibonacc2(6)

                      console.log('\t\t\t\t Вариант №2. В обратном порядке, передаем число фибоначчи и получаем его номер.')

let fibonacc3 = (n, i = 0, j = 1, p = 0, arr = []) => {
  if(n === j || n === i){
    let number =  n === j ? 2 : 1
    arr.push([i,j])
    arr[0].splice(0,1)
    return console.log(` ${p*2 + number - 1} число Фибоначчи из последовательного ряда ${arr.flat().join(' ')}`)
  }else{
    arr.push([i,j])
    return fibonacc3(n, i = i + j, j + i, p + 1, arr)
  }
}
fibonacc3(13)

                      console.log('\n\t\t\t\t Задание 3.2') 
                     
console.log(` Реверс числа\n
              Функция reverseNumber(num) возвращает число в обратном порядке цифр.\n
              Пример: reverseNumber(1234) → 4321`)  

                      console.log('\t\t\t\t Вариант №1')  

function reverseNumber1(num){
  let stringNumber = String(num)
  for(let i = 0; i < stringNumber.length; i++){
    stringNumber[i] = stringNumber[i + 1]
  }
  console.log(stringNumber)
}
reverseNumber1(1234)

                        console.log('\t\t\t\t Вариант №2')  

let reverseNumber2 = num => Number(String(num).split()[0].reverse())

                        console.log('\t\t\t\t Задание 3.3') 
                        
console.log(` Проверка на палиндром\n
              Функция isPalindrome(num) возвращает true, если число читается одинаково в обе стороны.\n
              Пример: isPalindrome(121) → true`)  

                        console.log('\t\t\t\t Вариант №1')  

const isPalindrome1 = (text, str1 = '', str2 = '') => {
  if(typeof text !== 'string') {
    return console.log('Строка не должна быть пустой!!');
  }
  for(let i = 0; i < text.length; i++){
    if(i <= text.length / 2 - 1){
      str2 =  str2 + text[(Math.floor(text.length / 2) - 1) - i]
    }else if(text.length % 2 !== 0){
      if(Math.floor(text.length / 2) == i){
        continue
      }
      str1 =  str1 + text[i]
    } else {
      str1 =  str1 + text[i]
    }
  }
  return str2 == str1 ? `Число ${text} палиндромом` : `Число ${text} не являеться палиндром`
}
console.log(isPalindrome1(`1255421`))

                      console.log('\t\t\t\t Вариант №2')  

const isPalindrome2 = (text) => {
  if(typeof text !== 'string') {
    return console.log('Строка не должна быть пустой!!');
  }
  if(text.length <= 1) {
    return console.log(true);
  }
  if(text[0] !== text[text.length - 1]){
    return console.log(false);
  } else {
    return isPalindrome2(text.slice(1, text.length - 1));
  }
}
isPalindrome2(`1331`)

                      console.log('\t\t\t\t Задание 3.4') 

console.log(` Нахождение делителей\n
              Функция divisors(n) выводит все числа, на которые делится n без остатка.\n
              Пример: divisors(12) → 1 2 3 4 6 12`)                                     

function divisors(n){
  for(let i = 0, j = n; i < n; i++, j--){
    if(n % j === 0){
      console.log(j)
    } else {
      continue
    }
  }
}
divisors(12)

                      console.log('\t\t\t\t Задание 3.5') 

console.log(` Простое число\n
              Функция isPrime(n) возвращает true, если число простое.\n
              Пример: isPrime(7) → true, isPrime(9) → false`)                                       

function isPrime(n){
  for(let i = 0; i < n; i++){
    if(n % j === 0){
      console.log(true)
    } else {
      console.log(false)
    }
  }
}
                      console.log('\t\t\t\t Задачи со звёздочкой (для продвинутых)') 
                      console.log('\t\t\t\t Задание 4.1') 

console.log(` Сумма всех нечётных чисел от 1 до 99. Используй цикл for и условие if\n`)
             
let sumAllNumbers = () => {
  for(let i = 1, acc = 0, arr = []; i <= 99; i++){
    if(i % 2!== 0){
      arr.push(i)
      acc = acc + i
      if(i === 99){
        return console.log(`Сумма всех нечётных чисел = ${acc} \n Все слагаемые = (${arr.join(' ')})`)  
      }
    }
  }
}
sumAllNumbers()
                        console.log('\t\t\t\t Задание 4.2') 
                        console.log('\t\t\t\t Вариант №1')  

console.log(` Подсчёт количества нулей в числе\n
              Пример: countZeros(10020) → 3\n`)   

let countZeros = (number) => {
  for(let i = 0, j = 0; 1 < String(number).length; i++){
    if(number % 10 !== 0){
      number = parseInt(number/10)
    } else {
      j++
      number = parseInt(number/10) 
      if(1 === String(number).length){
        return console.log(j)  
      }
    }
  }
}
countZeros(4030400770066) 

                        console.log('\t\t\t\t Вариант №2')  
let countZeros2 = (number) => {
  if(number == 0){
    return 0
  } else if(number % 10 !== 0){
    return countZeros2(parseInt(number / 10)) 
  }else{
    return 1 + countZeros2(parseInt(number / 10))
  }
}
console.log(countZeros2(4030400770066)) 

                        console.log('\t\t\t\t Вариант №3')  
                   
let countZeros3 = (number) => {
  let str = String(number);
  let result = str.match(/[0]/gi);
  return console.log(result.length)  
}
countZeros3(4030400770066)

                        console.log('\t\t\t\t Задание 4.3') 
                        
console.log(` Найти первую цифру числа\n
              Пример: firstDigit(9876) → 9\n`)   

                        console.log('\t\t\t\t Вариант №1')   

let firstDigit = (number) => {
  for(let i = 0, j = 0; 1 < String(number).length; i++){
    if(number % 10 !== 0){
      number = parseInt(number/10)
    } else {
      number = parseInt(number/10) 
      if(1 === String(number).length){
        return number
      }
    }
  }
}
firstDigit(9876)
                        console.log('\t\t\t\t Вариант №2')  
                                         
let firstDigit2 = (number) => {
  for(let i = 0; 1 <= parseInt(number / 10); i++){
    number = parseInt(number / 10)
    if(1 === String(number).length){
      return console.log(number)
    } 
  }
}
firstDigit2(9876)

                        console.log('\t\t\t\t Вариант №3') 
                                           
let firstDigit3 = (number) => {
  if(number <= 9){
    return number
  } else {
    return firstDigit3(parseInt(number / 10))
  }
}
firstDigit3(9876)

                        console.log('\t\t\t\t Вариант №4') 

let firstDigit4 = (number) => console.log(Number(String(number)[String(number).length - 1]))  
firstDigit4(9876)

                        console.log('\t\t\t\t Задание 4.4') 
                     
console.log(` Сколько раз число делится на 2, пока не станет нечётным\n
              Пример: countDivisions(40) → 3 (40 → 20 → 10 → 5)\n`)  

                        console.log('\t\t\t\t Вариант №1')     
                               
let countDivisions = (number) => {
  for(let i = 0; (number / 2) >= 1; i++){
    if(number % 2 === 0){
      number = number / 2
      // continue
    }else{
      return console.log(`Число делиться на два ${i} раз. После деления на число ${number} цикл остановился`)
    }
  }
}
countDivisions(40)

                        console.log('\t\t\t\t Вариант №2')
                                      
let countDivisions2 = (number, i = 0) => {
  if(number % 2 !== 0){
    console.log(`Число делиться на два ${i} раз. После деления на число ${number} цикл остановился`)
    return i
  } else {
    return countDivisions2(number / 2, i + 1)
  }
}

countDivisions2(40000)

                        console.log('\t\t\t\t Замыкание: счётчик вызовов')
                        console.log('\t\t\t\t Задание 4.5') 
           
function createCounter() { 
  let count = 0; 
  return function(request) { 
    if(request === 'reset'){
      count = 0
      return console.log(`Счётчик обнулился`)  
    }else if(request === 'get') { 
      return console.log(`Текущее значение ${count}`)
    }
    count++
    console.log(`Вызов №${count}`); 
  }; 
} 

const counter = createCounter(); 

counter(); 
counter(); 
counter(); 
counter('get')
counter('reset')
counter()
counter()
counter()
counter('reset')
counter('get')
counter()
counter()
counter()
counter()


