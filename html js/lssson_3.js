 // 1 Простые 
                                              // Задание 1.1 
                   // Так как node.js не поддерживает браузерерные методы alert, prompt и confirm.
                   // Я использовал readline модуль. Не зря ведь пользуем node.js
                                                 // №1 Варинт 
                                 
console.log(`\t\t\t\tУровень первый. Простой`)
console.log(`\t\t\t\tЗадание 1.1`)
console.log(`Напишите программу, которая спрашивает возраст пользователя через prompt() и выводит\n Если < 18 "Доступ запрещён" иначе "Доступ разрещён!" `) 

let age = prompt('Сколько вам лет?', '');        

let ageRequest1 = (age) => {
    if(age < 18){
        console.log('Доступ запрещён!')
    } else { 
        console.log('Доступ разрешён!')
    }
}                                         
ageRequest1(age)  
                                               // Задание 1.2 
                         // Перепишите преведушию задачу используя тернарный оператор  
console.log(`\t\t\t\tЗадание 1.2`)
console.log(`Перепишите преведушию задачу используя тернарный оператор `)

let ageRequest2 = () => {
    age < 18 ? console.log('Доступ запрещён!'): console.log('Доступ разрешён!')
}                    
ageRequest2(age)
//                                                 Задание 1.3 
                        // Напишите код, тороый принимает через prompt день недели (число от 1 до 7) и вывыодит название дня 
                        // 1 - Понедельник, 2 - Вторник, 3 - среда, ... 7 - Воскресение 
                        // Если введено число вне диапазона - выведи "Ошибка: такого дня нет"

console.log(`\t\t\t\tЗадание 1.3`)
console.log(`Напишите код, тороый принимает через prompt день недели (число от 1 до 7) и вывыодит название дня\n
             1 - Понедельник, 2 - Вторник, 3 - среда, ... 7 - Воскресение\n  
             Если введено число вне диапазона - выведи "Ошибка: такого дня нет `)                         
let DayWeekNumber = prompt('Введите (число от 1 до 7) определяющий день недели?', '');    
let determineDayWeek = (DayWeekNumber) => { 
    switch(Number(DayWeekNumber)){
      case 1: console.log('Понедельник');
        break
      case 2: console.log('Вторник');
        break
      case 3: console.log('Cреда');
        break
      case 4: console.log('Четверг');
        break
      case 5: console.log('Пятница');
        break
      case 6: console.log('Суббота');
        break
      case 7: console.log('Воскресенье');
        break
      default: console.log('Ошибка такого дня нет!!!');
    }
}
determineDayWeek(DayWeekNumber)
    //                                         Задание 1.4 
                         // Напишите цикл, который выводит числа от 1 до 5 включительно.
console.log(`\t\t\t\tЗадание 1.4`)
console.log(`Напишите цикл, который выводит числа от 1 до 5 включительно.`)

let outputsNumber = () => {
    let numberMin = 0                         
    while(numberMin < 5){
      console.log(++numberMin)
    }
  }
//                                             Задание 1.5 
            // Напишите цикл for, который выводит квадратные числа от 1 до 10 (Например 1 4 9 16)
console.log(`\t\t\t\tЗадание 1.5`)
console.log(` Напишите цикл for, который выводит квадратные числа от 1 до 10 (Например 1 4 9 16).`)

let outputSquareNumbers = () => {
  for(let i = 1; i <= 10; i++){
    console.log(i**2)
  }
}
                                        //     Задание 2.1
// Напиши код, который определяет, может ли пользователь войти на сайт:
//если пользователь админ или имееет токен, вывести "Доступ разрешён" иначе - "Нет доступа"

console.log(`\t\t\t\tУровень второй. Умеренный`)
console.log(`\t\t\t\tЗадание 2.1`)
console.log(`Напиши код, который определяет, может ли пользователь войти на сайт:\n
               если пользователь админ или имееет токен, вывести "Доступ разрешён" иначе - "Нет доступа"`)
let isAdmin = prompt('Вы админ? Ответьте должен быть да или нет', '');   
let isToken = prompt('У вас есть токен? Ответ должен быть да или нет', '');   
let adminAccess = (isAdmin,  isToken) => {
    if(isAdmin === 'да' || isToken === 'да'){
      console.log('Доступ разрешен')
    } else {
      console.log('Нет доступа')  
    }
};  
adminAccess(isAdmin, isToken)                                   // Задание 2.2
//Напиши выражение, которое вернёт true , если переменная x находиться в диапозоне от 10 до 20 включительно и не равна 15.
// Проверь работу кода с несколькими значениями. 
                                                                 // Вариант №1
console.log(`\t\t\t\tЗадание 2.2`)
console.log(`Напиши выражение, которое вернёт true , если переменная x находиться в диапозоне от 10 до 20 включительно и не равна 15.\n
              Проверь работу кода с несколькими значениями.`)
let numberMin = prompt('Введите начальное число', '');   
let numberMax = prompt('Введите конечное число', '');  

let x = prompt('Придумайте x число для проверки задачи.', ''); 

let rangeNumbers = (a,b,x) => {
  for(let i = a; i <= b; i++){
    if((i <= x && x <= b) && i !== Math.round(b -((b - a)/2))) {
      console.log(`Среднее число между выбранными диапазоном = ${Math.round(b -((b - a)/2))}`)
      console.log(true)
      return console.log(`Числовое значение ${x} входит в диапозон от ${a} до ${b}`)
    }else{
      console.log(Math.round(b -((b - a)/2)))
      return console.log(`Числовое значение ${x} вне диапазона от ${a} до ${b}`)
    }
  }
} 
rangeNumbers(numberMin, numberMax, x)                               
                                       // Вариант №2 
                                // При помощи методов массивов
console.log("Вариант 2")
let rangeNumbers2 = (a, b, x) => {
  let boolean = [...Array(b - a + 1)].map((el, ind) => a + ind).some(el => (el <= x && x <= b) && el !== Math.round(b -((b - a)/2)));  
  console.log(`Среднее число между выбранными диапазоном = ${Math.round(b -((b - a)/2))}`)
  if(boolean) {
    return console.log(`Числовое значение ${x} входит в диапозон от ${a} до ${b}`)
  } else {
    return console.log(`Числовое значение ${x} не входит в диапозон от ${a} до ${b}`)
  } 
}
rangeNumbers2(numberMin, numberMax, x)   
//                                            Задание 2.3
// Пользователь вводит число N. Используя while, выведи все числа от N до 0 в консоль.
                                            // Вариант №1. Цикл while
console.log(`\t\t\t\tЗадание 2.3`)
console.log(`Пользователь вводит число N. Используя while, выведи все числа от N до 0 в консоль.`)  
let N = prompt('Введите число', '');   
let outputNumbers1 = (n) => {
  while(Number(n) >= 0){
    console.log(n)
    n = n - 1
  }
}
outputNumbers1(N)                                  
                                            // Вариант №2 Числа вряд arr
console.log(`Вариант №2 Числа вряд`)                                          
let outputNumbers2 = (n) => {
    let arr = []
    while(Number(n) >= 0){
        arr.push(n)
        n = n - 1
    }
    console.log(...arr)                  
}        

   //                                          Задание 2.4
   // Используя цикл for, вывести все числа от 1 ло 10, но 
   // если число равно 7 - пропустить интерацию (continue)
   // если число равно 9 - прерви цикл (break)
                                             // Вариант №1 цикл for
console.log(`\t\t\t\tЗадание 2.4`)                                   
console.log(`
    Используя цикл for, вывести все числа от 1 ло 10, но \n
    если число равно 7 - пропустить интерацию (continue) \n
    если число равно 9 - прерви цикл (break)`)

let rangeNumbersFor = () => {                                        
  for(let u = 1; u < 10; u++){
    if(u !==7 && u !== 9 ){
       console.log(u)
      }else if(u === 7){
        continue
      }else if(u === 9){
        break
      }
    }
}     
rangeNumbersFor()                                         
                                              //  Задание 2.5
                                    // Вариант №1. Переребор по массиву
// Задано три числа a,b,c
// Определи и выведи длину наибольшего из трёх отрезков. 
console.log(`\t\t\t\tЗадание 2.5`)
console.log(`Задано три числа a b c.\n Определи и выведи длину наибольшего из трёх отрезков.`)
let segmentA = prompt('Введите длину отрезка а', ''); 
let segmentB = prompt('Введите длину отрезка b', ''); 
let segmentC = prompt('Введите длину отрезка c', ''); 
let maxElement1 = (...maxNum) => {
    for (let i = 0; i < maxNum.length; i++) { // В качесве сравнения в начале используеть 0 элемент массива 
      if(maxNum[i] > maxNum[0]){ // Если число больше то, переставляем его в начало массива. И так все попорядку. 
          maxNum[0] = maxNum[i]; // 
      }
    }
    console.log(`Наибольший из трех отрезков = ${maxNum[0]}`)  // Возращаем нулевой о элемент массива. Что являеться максимальным в массве после прохождения цикла. 
  }
maxElement1(Number(segmentA), Number(segmentB), Number(segmentC))
                                                // Вариант №2 Библиотека Math 
console.log(`t\t\t\tВариант второй. С использованием библиотеки Math`)

let maxElement2 = (...arr) => console.log(`Наибольший из трех отрезков = ${Math.max(...arr)}`);  
maxElement2(Number(segmentA), Number(segmentB), Number(segmentC))

                                                // Вариант №3 
                // С Использованием условия ветлений (Ограниченый!!! Колличество вводимых параметров = 3)
console.log(`t\t\t\tВариант третий. \nС ипользованием условия ветлений (Ограниченый!!! Колличество вводимых параметров = 3)`)
let maxElement3 = (a, b, c) => {
  let number1 = a < b ? b : a;
  let number2 = b < c ? c : b;
  let maxNumber = number1 < number2 ? number2 : number1;
  console.log(maxNumber)
}
maxElement3(Number(segmentA), Number(segmentB), Number(segmentC))
//                                                Вариант №3 C использованием рекурсии
// 
console.log(`t\t\t\tВариант четвертый. C использованием рекурсий`)                                   
let maxElement4 = (a, b, c) => {
  if(a < b){
    return maxElement4(b, a, c)
  }else if(b < c){
    return maxElement4(a, c, b)
  }else {
    return c
  }
}
maxElement4(Number(segmentA), Number(segmentB), Number(segmentC))
                                        // 3 Сложные 
                                        // Задание 3.1
// Создай переменную temperature(в градусах Цельсия)
//Выведи рекомендацию по температуре:

// let temperature = 24
console.log(`\t\t\t\tУровень третий. Сложный`)
console.log(`\t\t\t\tЗадание 3.1`)
console.log(`Создай переменную temperature(в градусах Цельсия)\n Выведи рекомендацию по температуре:`)

let temperature = prompt('Введите числовое значение температуры.', '');

let temperatureDetector1  = (temperature) => {
    if(temperature < -30){
        console.log("Оставайтесь дома!!!")
    }else if(temperature <= -30 || temperature <= -10){
        console.log("Сегодня холодно")
    }else if(temperature <= -10 || temperature <= 5){
        console.log("Не холодно")
    }else if(temperature <= 5 || temperature <= 15){
        console.log("Тепло")
    }else if(temperature <= 15 || temperature <= 25){
        console.log("Очень тепло")
    }else if(temperature <= 25 || temperature <= 35){
        console.log("Жарко")
    }else{
        console.log("Пекло")
    }
}
temperatureDetector1(Number(temperature))

console.log(`// Вариант второй. С использованием оператора ?`)

//                                    // Вариант второй. С использованием оператора ?

let temperatureDetector2  = (temperature) => {
  temperature < -30 ? console.log("Оставайтесь дома!!!"): 
  (temperature <= -30 || temperature < -10) ? console.log("Сегодня холодно"):
  (temperature < -10 || temperature < 5) ? console.log("Не холодно"):
  (temperature < 5 || temperature < 15) ? console.log("Тепло"):
  (temperature < 15 || temperature < 25) ? console.log("Очень тепло"):
  (temperature < 25 || temperature <= 35) ? console.log("Жарко"):
  console.log("Пекло")
}

temperatureDetector2(Number(temperature))
                                                    // Задание 3.2
//Пусть есть переменная role, принимающая одно из значений:
// "admin", "manager", "user", "quest"   
// C помощью switch выведи персонализированное сообщение, например:                                                  
// let role 

console.log(`\t\t\t\tЗадание 3.2`)
console.log(`Пусть есть переменная role, принимающая одно из значений:  "admin", "manager", "user", "quest"\n 
    C помощью switch выведи персонализированное сообщение, например: let role `)
let role = prompt('Введите вашу роль.', '');
const defineRoles = (role) => {
    switch(role){
      case 'admin': 
        console.log("Добро пожаловать, администратор!")
        role = 'admin';
        break
      case 'manager': 
        console.log("Привет, менеджер!")
        role = 'manager';
        break
      case 'user': 
        console.log("Рады видеть вас снова!")
        role = 'user';
        break
      case 'quest':
        console.log("Пожалуйста, войдите в систему")
        role = 'quest';
        break
      default:
        role = undefined    
        console.log("Неправильно ввели роль!!!");
    }                                   
}
defineRoles(role)
  //                                                     Задание 3.3
//                                             Вариант №1 с помошью оператора for 
//В автосалоне есть N автомобилей. Каждый день количество машин уменьшаеться в 2 раза.
//Оперделить на какой день количество автомобилей станет меньше M. 
//Выведи результат в виле: "На X-й день количество машин стало меньше M"

console.log(`\t\t\t\tЗадание 3.3`)
  console.log(`В автосалоне есть N автомобилей. Каждый день количество машин уменьшаеться в 2 раза.\n
    Оперделить на какой день количество автомобилей станет меньше M. \n
    Выведи результат в виле: "На X-й день количество машин стало меньше M"\n`)

let number_Cars_Showroom = prompt('Введите число машин в автосалоне.', '');
let minimum_Number_Cars = prompt('Введите минимальное число машин которое должно остаться в автосолоне.', '');  

let calculateNumberCars1 = (number_Cars_Showroom, minimum_Number_Cars) => {
    for(let i = 1; number_Cars_Showroom > minimum_Number_Cars; i++){
      number_Cars_Showroom = Math.floor(number_Cars_Showroom / 2);
      if(number_Cars_Showroom < minimum_Number_Cars){
        console.log(`На ${i}-й день количество машин стало меньше ${minimum_Number_Cars}. Всего осталось ${number_Cars_Showroom} машин`)
       }
    }
}
calculateNumberCars1(Number(number_Cars_Showroom), Number(minimum_Number_Cars))
 
                                            //    Вариант №2 с помошью рекурсии
console.log('\t\t\t\tВариант второй. С использованием рекурсии')

let calculateNumberCars2 = (number_Cars_Showroom, minimum_Number_Cars, i = 0) => {
    if(number_Cars_Showroom < minimum_Number_Cars){
        console.log(`На ${i}-й день количество машин стало меньше ${minimum_Number_Cars}. Всего осталось ${number_Cars_Showroom} машин`)
        return number_Cars_Showroom
    } else {
        return calculateNumberCars2(Math.floor(number_Cars_Showroom / 2), minimum_Number_Cars, ++i)
    }
}
calculateNumberCars2(Number(number_Cars_Showroom), Number(minimum_Number_Cars))
//                                     Вариант №3  С помошью логарифмической формулы 
console.log('\t\t\t\tВариант третий. С использованием логарифмической формулы')

let calculateNumberCars3 = (number_Cars_Showroom, minimum_Number_Cars) => {
    let number = Math.ceil(Math.log2(number_Cars_Showroom/minimum_Number_Cars));
    console.log(`На ${number}-й день количество машин стало меньше ${minimum_Number_Cars}. Всего осталось ${Math.floor(number_Cars_Showroom/(2**number))} машин`);                      
}
calculateNumberCars3(Number(number_Cars_Showroom), Number(minimum_Number_Cars))
//                                                     Задание 3.4
//Найти: 1)Год первого полёта человека в космос(1961)
//       2)Количество високосных лет между 1800 и 2020г
// Исрользуя цикл for и счётчик интераций.

// let dateIntervalMax = 2020
// let dateIntervalMin = 1800
// const yearSpaceGagarin = 1961
 console.log(`\t\t\t\tЗадание 3.4`)
 console.log(` Найти: 1)Год первого полёта человека в космос(1961) \n
                      2)Количество високосных лет между 1800 и 2020г \n
                      Исрользуя цикл for и счётчик интераций.`)
let dateMin = prompt('Введите начальную дату.', '');
let dateMax = prompt('Введите конечную дату.', '');  

let SearchYears = (dateIntervalMaxLocale, dateIntervalMinLocale, dateIntervalMin = dateIntervalMinLocale) => {
  const yearSpaceGagarin = 1961
  for(let i = 0; dateIntervalMaxLocale >= dateIntervalMinLocale; i++){ 
    dateIntervalMinLocale = dateIntervalMinLocale + 4
    if(dateIntervalMaxLocale < dateIntervalMinLocale){
      if(yearSpaceGagarin >= dateIntervalMin && yearSpaceGagarin <= dateIntervalMaxLocale){
        console.log(`В этом временной промежутке c ${dateIntervalMin} по ${dateIntervalMaxLocale} Гагарин уже успел полетать в космос. Количество высокосных лет стоставило ${i}`)
      } else {
        console.log(`В этом временной промежутке c ${dateIntervalMin} по ${dateIntervalMaxLocale} Гагарин еше не летал в космос. Количество высокосных лет стоставило ${i}`)
      }
      }
    }
}
SearchYears(Number(dateMax), Number(dateMax))