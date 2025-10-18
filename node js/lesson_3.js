// Домашнее задание №3 - Условные и логические операторы, циклы.

const readline = require('node:readline');  

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
                                               // 1 Простые 
                                              // Задание 1.1 
            // Так как node.js не поддерживает браузерерные методы alert, prompt и confirm.
            // Я использовал readline модуль. Не зря ведь пользуем node.js
            // Напишити программу, которая спрашивает возрас пользователя через prompt() и выводит
            // Если < 18 
                                                // №1 Варинт 
                                 
         
const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Сколько вам лет? ', (age) => {
       if(age < 18) resolve('Доступ запрещён!')
       else console.log('Доступ разрешён!')
       resolve()
    })
  })
}    
                                               // Задание 1.2 
                         // Перепишите преведушию задачу используя тернарный оператор  
const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Сколько вам лет? ', (age) => {
       age < 18 ? console.log('Доступ запрещён!'): console.log('Доступ разрешён!')
       resolve()
    })
  })
}
//                                                 Задание 1.3 
                        // Напишите код, тороый принимает через prompt день недели (число от 1 до 7) и вывыодит название дня 
                        // 1 - Понедельник, 2 - Вторник, 3 - среда, ... 7 - Воскресение 
                        // Если введено число вне диапазона - выведи "Ошибка: такого дня нет"

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите (число от 1 до 7) определяющий день недели ', (dayWeek) => {
        switch(Number(dayWeek)){
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
       resolve()
    })
  })
}
//                                              Задание 1.4 
                         // Напишите цикл, который выводит числа от 1 до 5 включительно.
let outputsNumber = () => {
  let numberMin = 0                         
  while(numberMin < 5){
    console.log(++numberMin)
  }
}
//                                             Задание 1.5 
            // Напишите цикл for, который выводит квадратные числа от 1 до 10 (Например 1 4 9 16)

let outputSquareNumbers = async () => {
  for(let i = 1; i <= 10; i++){
    console.log(i**2)
  }
}
                                        //     Задание 2.1
// Напиши код, который определяет, может ли пользователь войти на сайт:
//если пользователь админ или имееет токен, вывести "Доступ разрешён" иначе - "Нет доступа"

const question4 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Вы админ? Ответьте должен быть да или нет ', (age) => {
      resolve(age === 'да')
    })
  })
}

const question5 = () => {
  return new Promise((resolve, reject) => {
    rl.question('У вас есть токен? Ответ должен быть да или нет ', (age) => {
      resolve(age === 'да')
    })
  })
}

let adminAccess = async (booleanTocen,  booleanAdmin) => {
  if(booleanTocen || booleanAdmin){
    console.log('Доступ разрешен')
  }else {
    console.log('Нет доступа')  
  }
};                                     // Задание 2.2
//Напиши выражение, которое вернёт true , если переменная x находиться в диапозоне от 10 до 20 включительно и не равна 15.
// Проверь работу кода с несколькими значениями. 
                                       // Вариант №1

const question6 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите начальное число ', (numberMin) => {
      resolve(Number(numberMin))
    })
  })
};

const question7 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите конечное число ', (numberMax) => {
      resolve(Number(numberMax))
    })
  })
};

const question8 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите число которе должно входить, или не входить в диапозон ', (number) => {
      resolve(Number(number))
    })
  })
};

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
                                       // Вариант №2 
                                // При помощи методов массивов

let rangeNumbers2 = (a, b, x) => {
  let boolean = [...Array(b - a + 1)].map((el, ind) => a + ind).some(el => (el <= x && x <= b) && el !== Math.round(b -((b - a)/2)));  
  console.log(`Среднее число между выбранными диапазоном = ${Math.round(b -((b - a)/2))}`)
  if(boolean) {
    return console.log(`Числовое значение ${x} входит в диапозон от ${a} до ${b}`)
  } else {
    return console.log(`Числовое значение ${x} не входит в диапозон от ${a} до ${b}`)
  } 
}
//                                            Задание 2.3
// Пользователь вводит число N. Используя while, выведи все числа от N до 0 в консоль.
                                            // Вариант №1. Цикл while
   
const question9 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите число ', (n) => {
      while(Number(n) >= 0){
        console.log(n)
        n = n - 1
      }
    resolve()
  })})
}
                                            // Вариант №2 Числа вряд arr
                                          
const question10 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите число ', (n) => {
      let arr = []
      while(Number(n) >= 0){
        arr.push(n)
        n = n - 1
      }
      console.log(...arr)                  
      resolve()
    })
  })
}        

   //                                          Задание 2.4
   // Используя цикл for, вывести все числа от 1 ло 10, но 
   // если число равно 7 - пропустить интерацию (continue)
   // если число равно 9 - прерви цикл (break)
                                             // Вариант №1 цикл for

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
                                            //  Задание 2.5
                                    // Вариант №1. Переребор по массиву
// Задано три числа a,b,c
// Определи и выведи длину наибольшего из трёх отрезков. 

const question11 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите длину отрезка а ', (a) => {
      resolve(Number(a))
    })
  })
}

const question12 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите длину отрезка b ', (b) => {
      resolve(Number(b))
    })
  })
}

const question13 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите длину отрезка c ', (c) => {
      resolve(Number(c))
    })
  })
}

let maxElement1 = (...maxNum) => {
  for (let i = 0; i < maxNum.length; i++) { // В качесве сравнения в начале используеть 0 элемент массива 
    if(maxNum[i] > maxNum[0]){ // Если число больше то, переставляем его в начало массива. И так все попорядку. 
      maxNum[0] = maxNum[i]; // 
    }
  }
  console.log(`Наибольший из трех отрезков = ${maxNum[0]}`)  // Возращаем нулевой о элемент массива. Что являеться максимальным в массве после прохождения цикла. 
}
//                                            Вариант №2 Библиотека Math 
                                  
let maxElement2 = (...arr) => console.log(`Наибольший из трех отрезков = ${Math.max(...arr)}`);  

                                        
//                                            Вариант №3  С Использованием условия ветлений (Ограниченый!!! Колличество вводимых параметров = 3)
let maxElement3 = (a, b, c) => {
  let number1 = a < b ? b : a;
  let number2 = b < c ? c : b;
  let maxNumber = number1 < number2 ? number2 : number1;
  console.log(maxNumber)
}

//                                            Вариант №4 C использованием рекурсии (Ограниченый!!! Колличество вводимых параметров = 3)
//                                    
let maxElement4 = (a, b, c) => {
  if(a < b){
    return maxElement4(b, a, c)
  }else if(b < c){
    return maxElement4(a, c, b)
  }else {
    return c
  }
}
 //                                           Вариант №5 C использованием рекурсии. Но ввода для любого колличества аргументов. 
let maxElement5 = (arr) => {
  if(arr.length === 1){
    return arr[0];
  }else if(arr[0] < arr[1]){
    arr.splice(0, 1);
    return f(arr);
  } else {
    arr.splice(1, 1);
    return f(arr)
  }
}
                                        // 3 Сложные 
                                        // Задание 3.1
// Создай переменную temperature(в градусах Цельсия)
//Выведи рекомендацию по температуре:

// let temperature = 24

const question14 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите числовое значение температуры. ', (С) => {
      if(isNaN(С)){
        console.log('не число')
      }else{
        resolve(Number(С))
      }
    })
  })
}

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

                                                    // Задание 3.2
//Пусть есть переменная role, принимающая одно из значений:
// "admin", "manager", "user", "quest"   
// C помощью switch выведи персонализированное сообщение, например:                                                  
// let role 

const question15 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите вашу роль ', (role) => {
      console.log(role)
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
  resolve()
  })
 })
}
  //                                                     Задание 3.3
//                                             Вариант №1 с помошью оператора for 
//В автосалоне есть N автомобилей. Каждый день количество машин уменьшаеться в 2 раза.
//Оперделить на какой день количество автомобилей станет меньше M. 
//Выведи результат в виле: "На X-й день количество машин стало меньше M"

const question16 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите число машин в автосалоне ', (cars) => {
      resolve(Number(cars))
    })
  })
}

const question17 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите минимальное число машин которое должно остаться в автосолоне ', (cars) => {
      resolve(Number(cars))
    })
  })
}
  
let numberCars1 = (number_Cars_Showroom, minimum_Number_Cars) => {
  for(let i = 1; number_Cars_Showroom > minimum_Number_Cars; i++){
    number_Cars_Showroom = Math.floor(number_Cars_Showroom / 2);
    if(number_Cars_Showroom < minimum_Number_Cars){
      console.log(`На ${i}-й день количество машин стало меньше ${minimum_Number_Cars}. Всего осталось ${number_Cars_Showroom} машин`)
    }
  }
}
 
                                            //    Вариант №2 с помошью рекурсии
let numberCars2 = (number_Cars_Showroom, minimum_Number_Cars, i = 0) => {
  if(number_Cars_Showroom < minimum_Number_Cars){
      console.log(`На ${i}-й день количество машин стало меньше ${minimum_Number_Cars}. Всего осталось ${number_Cars_Showroom} машин`)
      return number_Cars_Showroom
  } else {
      return numberCars2(Math.floor(number_Cars_Showroom / 2), minimum_Number_Cars, ++i)
  }
}
// //                                      Вариант №3  С помошью логарифмической формулы 

let numberCars3 = (number_Cars_Showroom, minimum_Number_Cars) => {
  let number = Math.ceil(Math.log2(number_Cars_Showroom/minimum_Number_Cars));
  console.log(`На ${number}-й день количество машин стало меньше ${minimum_Number_Cars}. Всего осталось ${Math.floor(number_Cars_Showroom/(2**number))} машин`);                      
}

//                                                     Задание 3.4
//Найти: 1)Год первого полёта человека в космос(1961)
//       2)Количество високосных лет между 1800 и 2020г
// Исрользуя цикл for и счётчик интераций.

// let dateIntervalMax = 2020
// let dateIntervalMin = 1800
// const yearSpaceGagarin = 1961

const question18 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите начальную дату ', (dateMin) => {
      resolve(Number(dateMin))
    })
  })
}

const question19 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Введите конечную дату ', (dateMax) => {
       resolve(Number(dateMax))
    })
  })
}

let SearchYears = (dateIntervalMaxLocale, dateIntervalMinLocale, dateIntervalMin) => {
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

const main = async () => {
  console.log(`\t\t\t\tУровень первый. Простой`)
  console.log(`\t\t\t\tЗадание 1.1`)
  console.log(`Напишите программу, которая спрашивает возраст пользователя через prompt() и выводит\n Если < 18 "Доступ запрещён" иначе "Доступ разрещён!" `) 
  await question1()
  console.log(`\t\t\t\tЗадание 1.2`)
  console.log(`Перепишите преведушию задачу используя тернарный оператор `)
  await question2()
  console.log(`\t\t\t\tЗадание 1.3`)
  console.log(`Напишите код, тороый принимает через prompt день недели (число от 1 до 7) и вывыодит название дня\n
         1 - Понедельник, 2 - Вторник, 3 - среда, ... 7 - Воскресение\n  
         Если введено число вне диапазона - выведи "Ошибка: такого дня нет `) 
  await question3()
  console.log(`\t\t\t\tЗадание 1.4`)
  console.log(`Напишите цикл, который выводит числа от 1 до 5 включительно.`)
  outputsNumber()
  console.log(`\t\t\t\tЗадание 1.5`)
  console.log(` Напишите цикл for, который выводит квадратные числа от 1 до 10 (Например 1 4 9 16).`)
  await outputSquareNumbers()
//----------------------------------------------------------------------------------------------------
  console.log(`\t\t\t\tУровень второй. Умеренный`)
  console.log(`\t\t\t\tЗадание 2.1`)
  console.log(`Напиши код, который определяет, может ли пользователь войти на сайт:\n
               если пользователь админ или имееет токен, вывести "Доступ разрешён" иначе - "Нет доступа"
  `)
  let booleanTocen = await question4()
  let booleanAdmin = await question5()
  adminAccess(booleanTocen, booleanAdmin)
  console.log(`\t\t\t\tЗадание 2.2`)
  console.log(`Напиши выражение, которое вернёт true , если переменная x находиться в диапозоне от 10 до 20 включительно и не равна 15.\n
              Проверь работу кода с несколькими значениями.`)
  let numberStart = await question6()
  let numberEnd = await question7()
  let x = await question8()
  rangeNumbers(numberStart, numberEnd, x)
  console.log("Вариант 2")
  rangeNumbers2(numberStart, numberEnd, x)
  console.log(`\t\t\t\tЗадание 2.3`)
  console.log(`Пользователь вводит число N. Используя while, выведи все числа от N до 0 в консоль.`)  
  await question9()
  console.log(`Вариант №2 Числа вряд`)
  await question10()
  console.log(`\t\t\t\tЗадание 2.4`)                                   
  console.log(`
    Используя цикл for, вывести все числа от 1 ло 10, но \n
    если число равно 7 - пропустить интерацию (continue) \n
    если число равно 9 - прерви цикл (break)
   `)
  rangeNumbersFor()
  console.log(`\t\t\t\tЗадание 2.5`)
  console.log(`Задано три числа a b c.\n Определи и выведи длину наибольшего из трёх отрезков.`)
  let segmentA = await question11();
  let segmentB = await question12();
  let segmentC = await question13();
  console.log(`t\t\t\tВариант первый. Переребор по массиву`)  
  maxElement1(segmentA, segmentB, segmentC);
  console.log(`t\t\t\tВариант второй. С использованием библиотеки Math`)  
  maxElement2(segmentA, segmentB, segmentC);   
  console.log(`t\t\t\tВариант третий. \nС ипользованием условия ветлений (Ограниченый!!! Колличество вводимых параметров = 3)`)
  maxElement3(segmentA, segmentB, segmentC); 
  console.log(`t\t\t\tВариант третий. C использованием рекурсии (Ограниченый!!! Колличество вводимых параметров = 3)`)
  console.log(maxElement4(segmentA, segmentB, segmentC));
  console.log(`t\t\t\tВариант четвертый. C использованием рекурсии. Но ввода для любого колличества аргументов. `)
  console.log(maxElement5([segmentA, segmentB, segmentC]));
//----------------------------------------------------------------------------------------------------
  console.log(`\t\t\t\tУровень третий. Сложный`)
  console.log(`\t\t\t\tЗадание 3.1`)
  console.log(`Создай переменную temperature(в градусах Цельсия)\n Выведи рекомендацию по температуре:`)
  let temperature = await question14()
  temperatureDetector1(temperature)
  console.log(`// Вариант второй. С использованием оператора ?`)
  temperatureDetector2(temperature)
  console.log(`\t\t\t\tЗадание 3.2`)
  console.log(`Пусть есть переменная role, принимающая одно из значений:  "admin", "manager", "user", "quest"\n 
    C помощью switch выведи персонализированное сообщение, например: let role   
  `)
  await question15()
  console.log(`\t\t\t\tЗадание 3.3`)
  console.log(`В автосалоне есть N автомобилей. Каждый день количество машин уменьшаеться в 2 раза.\n
    Оперделить на какой день количество автомобилей станет меньше M. \n
    Выведи результат в виле: "На X-й день количество машин стало меньше M"\n
  `)
  let number_Cars_Showroom = await question16()
  let minimum_Number_Cars = await question17()
  numberCars1(number_Cars_Showroom, minimum_Number_Cars)
  console.log('\t\t\t\tВариант второй. С использованием рекурсии')
  numberCars2(number_Cars_Showroom, minimum_Number_Cars)
  console.log('\t\t\t\tВариант третий. С использованием логарифмической формулы')
  numberCars3(number_Cars_Showroom, minimum_Number_Cars)
  console.log(`\t\t\t\tЗадание 3.4`)
  let dateIntervalMinLocale = await question18()
  let dateIntervalMaxLocale = await question19()
  SearchYears(dateIntervalMaxLocale, dateIntervalMinLocale, dateIntervalMinLocale)
  rl.close()
}                               
main()  