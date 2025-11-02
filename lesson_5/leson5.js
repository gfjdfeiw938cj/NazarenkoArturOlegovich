                                                          console.log('\t\t Практика 1' )

//  1) Создайте объект myFavoriteFilm, описывающий ваш любимый фильм.
//  Объект должен содержать свойства с названием фильма, с датой
//  выпуска, именем режиссера и страной выпуска.
//  2) Добавить свойство содержащее значение выручки фильма в прокате.
//  3) Добавить метод, который который будет выводить название фильма в
//  консоль.
//  4) Удалить свойство содержащее год выпуска.
//  5) Вывести вконсоль объект myFavoriteFilm и проанализировать его
//  структуру.

let myFavoriteFilm = {
  ['Названием фильма']: 'Мёртвые души',
  ['Дата выпуска']: 1984,
  ['Режисер']: 'Михаил Швейцер',
  ['Страна выпуска'] : 'CCCР',
}
console.log(myFavoriteFilm['Дата выпуска'])

myFavoriteFilm['Выручки фильма в прокате'] = 'Нет информации'

myFavoriteFilm['Вывести название фильма из obg = myFavoriteFilm'] = function Metod(){ console.log(this['Названием фильма'])}.bind(myFavoriteFilm)
                                    // Второй вариант 
// myFavoriteFilm['Выыести название фильма из obg = myFavoriteFilm'] = () => console.log(myFavoriteFilm['Названием фильма'])
myFavoriteFilm['Вывести название фильма из obg = myFavoriteFilm']()

delete myFavoriteFilm["Дата выпуска"]

console.log(myFavoriteFilm)

                                                          console.log('\t\t Практика 2' )

//  Практика
//  1) Реализовать функцию которая будет принимать числовой диапазон в
//  качестве параметров [min, max] и будет возвращать случайное целое
//  число из данного диапазона.
//  2) Реализовать функцию которая будет определять, в каком регистре
//  записан n элемент переданной строки, если в верхнем то вернуть true, в
//  противном случае вернуть false.
//  3) Реализовать функцию которая заменяет в строке str, все вхождения
//  подстроки find, на подстроку replace.

//  console.log(`Задание 1: Реализовать функцию которая будет принимать числовой диапазон в
//  качестве параметров [min, max] и будет возвращать случайное целое
//  число из данного диапазона.\n`)
                                
//                                 console.log('\t\tРешение 1\n')

function getRandomIntInclusive(min, max){
  return console.log(Math.floor(Math.random() * (max - min + 1) + min))  
}
// getRandomIntInclusive(4, 7)
                                      //Второй вариант. Асинхронный
function getRandomIntInclusive2(min, max) {
  return new Promise( (resolve) => {
    let timerId = setInterval(() => console.log(Math.floor(Math.random() * (max - min + 1) + min)), 500);
    setTimeout(() => {clearInterval(timerId); console.log('Стоп'); resolve()}, 5000);
  })
};
// getRandomIntInclusive2(4, 7)
                               
// console.log(`\nЗадание 2: Реализовать функцию которая будет определять, в каком регистре
//  записан n элемент переданной строки, если в верхнем то вернуть true, в
//  противном случае вернуть false.\n`)             

                                // console.log('\n\t\t\t\Решение 1\n')

function determinantRegisterText(ElemStr, text){
  if(text[ElemStr] === text[ElemStr].toUpperCase()){
    console.log(`Этот "${text[ElemStr]}" символ находиться в верхнем регистре`);
    return true;
  } else {
    console.log( `Этот "${text[ElemStr]}" символ находиться в нижнем регистре`);
    return false;
  }
}  
// determinantRegisterText(0,'Строка Строка Строка')

                                // console.log('\n\t\t\tРешение 2\n')

function determinantRegisterText2(text){
  let arr = []
  let i = 0
  for(ElemStr of text){
    let indexStr = text.indexOf(ElemStr, i++)
    if(text[indexStr] === text[indexStr].toUpperCase() && text[indexStr] !== " "){
      arr.push(...[ElemStr, indexStr])
    } 
  }
  let arr2 =  arr.filter((el, ind) => (((ind + 1) % 2) === 0)) // Индексы 
  arr = arr.filter((el, ind) => (((ind + 1) % 2) !== 0) ) // Элементы 
  if(arr.length === 0){
    console.log(`В этой строке нет символов, которые бы находились в верхнем регистре.`);
    return false
  } else {
    console.log(`Все индексы {${arr2.join(" ")}} где находиться элементы строки в верхнем регистре`) 
    console.log(`Все символов в верхнем регистре {${arr.join(" ")}}. И их колличесво ${arr.length}`)
    return true
  }
} 
// determinantRegisterText2('Строка Строка Строка')

                                // console.log('\n\t\t\tРешение 3\n')

function determinantRegisterText3(text){
  let arr = [[],[]]
  text.split('').forEach((el, ind) => {
    if(text[ind] === text[ind].toUpperCase() && text[ind] !== " "){
      arr[0].push(el); arr[1].push(ind);
    }
  })
  if(arr.length === 0){
    console.log(`В этой строке нет символов, которые бы находились в верхнем регистре.`);
    return false
  } else {
    console.log(`Все индексы {${arr[1].join(" ")}} где находиться элементы строки в верхнем регистре`) 
    console.log(`Все символов в верхнем регистре {${arr[0].join(" ")}}. И их колличесво ${arr[0].length}`)
    return true
  }
}
// determinantRegisterText3('Овввы Рвв РР Р ыыы йуРТт')

// alert("Хо-Хо-хо".replace(/хо/gi, (match, offset) => offset)); // 0-3-6

// console.log(`\nЗадание 3: Реализовать функцию которая заменяет в строке str, все вхождения
//  подстроки find, на подстроку replace.\n`)   

                                // console.log('\n\t\t\tРешение 1\n')

function replacingSubstrings(strFind, strReplacing, text) {
  let changeText
  if(text.includes(strFind)){
    changeText = text.replace(strFind, strReplacing)
    console.log(`То что было: ${text}\nТо что стало: ${changeText}`)
  }else{
    console.log("Такой подстроки нет в тексте")
  }
}
// replacingSubstrings('Тихо', "Громко", 'Тихо, очень тихо падали листья на землю')

                                // console.log('\n\t\t\tРешение 2\n')

function replacingSubstrings2(strFind, strReplacing, text){
  let regexp = new RegExp(`${strFind}`,'gi');
  let changeText = text.replace(regexp, strReplacing)
  changeText === text ? console.log("Такой подстроки нет в тексте") : console.log(`То что было: ${text}\nТо что стало: ${changeText}`)
}  
// replacingSubstrings2('Тихо', "Громко", 'Тихо, очень тихо падали листья на землю')

async function main(){
  console.log(`Задание 1: Реализовать функцию которая будет принимать числовой диапазон в
  качестве параметров [min, max] и будет возвращать случайное целое
  число из данного диапазона.\n`)
  await new Promise(resolve => setTimeout(() => {resolve()}, 1000))
  console.log('\t\tРешение 1\n')

  getRandomIntInclusive(4, 7)

  console.log('\t\t\tРешение 2.(Генерация рандомных чисел в определенном диапазоне за 5 сек.)\n')
  await getRandomIntInclusive2(4, 7)

  console.log(`\nЗадание 2: Реализовать функцию которая будет определять, в каком регистре
  записан n элемент переданной строки, если в верхнем то вернуть true, в
  противном случае вернуть false.\n`)  
  await new Promise(resolve => setTimeout(() => {resolve()}, 1000))  
  console.log('\n\t\t\t\Решение 1\n')

  determinantRegisterText(0,'Строка Строка Строка')
  await new Promise(resolve => setTimeout(() => {resolve()}, 1000)) 
  console.log('\n\t\t\tРешение 2\n')

  determinantRegisterText2('Строка Строка Строка')
  await new Promise(resolve => setTimeout(() => {resolve()}, 1000)) 
  console.log('\n\t\t\tРешение 3\n')

  determinantRegisterText3('Овввы Рвв РР Р ыыы йуРТт')
  await new Promise(resolve => setTimeout(() => {resolve()}, 1000)) 
  console.log(`\nЗадание 3: Реализовать функцию которая заменяет в строке str, все вхождения
  подстроки find, на подстроку replace.\n`) 
  await new Promise(resolve => setTimeout(() => {resolve()}, 1000)) 
  console.log('\n\t\t\tРешение 1\n')

  replacingSubstrings('Тихо', "Громко", 'Тихо, очень тихо падали листья на землю')
  await new Promise(resolve => setTimeout(() => {resolve()}, 1000)) 
  console.log('\n\t\t\tРешение 2\n')

  replacingSubstrings2('Тихо', "Громко", 'Тихо, очень тихо падали листья на землю')
}
main()



                              
