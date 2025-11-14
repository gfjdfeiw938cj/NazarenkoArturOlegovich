                                            // Задача 1
/**
 * Дана сложная структура данных - массив объектов пользователей.
 * Нужно преобразовать её в новую структуру, сгруппировав по отделам
 * и вычислив агрегированные данные.
 */

const users = [
  {
    id: 1,
    name: "Alice",
    department: "Engineering", // Отдел
    skills: ["JavaScript", "React", "Node.js"],
    projects: [
      { name: "Project A", hours: 40, completed: true },
      { name: "Project B", hours: 25, completed: false }
    ],
    salary: 80000 // зарплата
  },
  {
    id: 2,
    name: "Bob",
    department: "Engineering",
    skills: ["JavaScript", "Django", "AWS"],
    projects: [
      { name: "Project A", hours: 30, completed: true },
      { name: "Project C", hours: 50, completed: true }
    ],
    salary: 90000
  },
  {
    id: 3,
    name: "Charlie",
    department: "Design",
    skills: ["Figma", "AWS", "Photoshop"],
    projects: [
      { name: "Project B", hours: 20, completed: false },
      { name: "Project D", hours: 35, completed: true }
    ],
    salary: 70000
  }
];

function usersNew(users){
                               // 1) Фильтуем на депортаменты. Убираем повторяющиеся депортаменты. 
  let arrDepartments = users.map(el => el.department).filter((el, ind, arr) => ind === arr.indexOf(el))
  let arrFilteredDepartment = []
                               //2) Интерируем по депортаментам 
  arrDepartments.forEach(strDepartment => {
    arrFilteredDepartment.push(users.filter( user => user.department === strDepartment))
                               //3) Интерируем по users 
    let arrGroupedDepartmentDate = arrFilteredDepartment.map((users) => {
                             //  4) Вычисляем промежуточные данные из users для конкретного депортамента
      let arrCalculateData = users.reduce((arrCalculateData, elemUser) => {
        arrCalculateData[0] = arrCalculateData[0] + 1;  //arrCalculateData[1] = колличесво работников
        arrCalculateData[1] = arrCalculateData[1] + elemUser.salary // arrCalculateData[2] = Общая заработная плата
        arrCalculateData[2] = arrCalculateData[1] / arrCalculateData[0]// arrCalculateData[3] = средняя арифметическая заработная плата
        arrCalculateData[3].push(...elemUser.skills);  // Скилы всех сотрудников 
        elemUser.projects.forEach(project => arrCalculateData[4].push(project)); // Все проекты.
        arrCalculateData[5] = elemUser.department
        return arrCalculateData
      }, [0, 0, 0, [], [], ''])
                             // 5) отфильтровываем для депортамента на skills на уникальность. 
      arrCalculateData[3] = arrCalculateData[3].filter((el, ind, arr) => ind === arr.indexOf(el))
                            //  6)Групируем одинаковые projects в депортаменте. Пример: {Project A: [{ completed: true, truehours: 40, name: "Project A"}, {completed: true, truehours: 40, name: "Project A"}], 
       //                                                                                Project B: [{…}], 
       //                                                                                Project C: [{…}])}
      let objGroupedProjectData = {...arrCalculateData[4].reduce((prev, elemUser) => ({
        ...prev,
        [elemUser.name]: [...(prev[elemUser.name] || []), elemUser],
      }), [])};
                             // 7) Вычисляем общее количество hours. И преобразуем обратно в obj.
      arrCalculateData[4] = Object.fromEntries(
        Object.entries(objGroupedProjectData).map(([key, value]) => {
          return [key, {
            completed: value['0'].completed,
            hours: value.reduce((acc, el) => acc + el.hours, 0),}]
        })
  
      );
      return arrCalculateData
    })
    arrDepartments = arrGroupedDepartmentDate
  });
  console.log(arrDepartments)
                              //  8 Передаем все вычитанные данные в map для преобразования его в законченную форму. 
  return {...arrDepartments.map((departmentDate) => {
    return { 
      [`${departmentDate[5]}`]: {
        Engineering: {
          employeeCount: departmentDate[0],
          totalSalary: departmentDate[1],
          avgSalary: departmentDate[2],
          skills: departmentDate[3],
          projects: {...departmentDate[4]}
        }
      }
    }
  })} 
}
//console.log(usersNew(users)) 



// Задача: Преобразовать в структуру:
// {
//   departments: {
//     Engineering: {
//       employeeCount: 2,
//       totalSalary: 170000,
//       avgSalary: 85000,
//       skills: ["JavaScript", "React", "Node.js", "Python", "Django", "AWS"],
//       projects: {
//         "Project A": { totalHours: 70, completed: true },
//         "Project B": { totalHours: 25, completed: false },
//         "Project C": { totalHours: 50, completed: true }
//       }
//     },
//     // ... другие отделы
//   }
// }

                                                     // Задача 2

/**
 * Дано дерево категорий товаров. Нужно выполнить несколько преобразований:
 * 1. Удалить категории с isActive: false
 * 2. Для категорий с discount > 0 применить скидку к price
 * 3. Преобразовать структуру, добавив вычисляемые поля
 * 4. Отсортировать подкатегории по price
 */

const categories = [
  {
    id: 1,
    name: "Electronics",
    isActive: true,
    products: [
      { id: 101, name: "Laptop", price: 1000, discount: 10, inStock: true },
      { id: 102, name: "Phone", price: 500, discount: 0, inStock: false }
    ],
    subcategories: [
      {
        id: 2,
        name: "Computers",
        isActive: true,
        products: [
          { id: 201, name: "Gaming PC", price: 12000, discount: 15, inStock: true },
          { id: 202, name: "Monitor", price: 14000, discount: 5, inStock: true }
        ],
        subcategories: [
          {
            id: 3,
            name: "Components",
            isActive: true, // Должна быть удалена
            products: [
              { id: 301, name: "GPU", price: 11000, discount: 0, inStock: true },
              { id: 302, name: "GPU", price: 7000, discount: 5, inStock: true }
            ],
            subcategories: [
              {
                id: 4,
                name: "Components",
                isActive: true, // Должна быть удалена
                products: [
                  { id: 401, name: "mobile", price: 10000, discount: 0, inStock: true },
                  { id: 402, name: "GPU", price: 6000, discount: 5, inStock: true }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

// Ожидаемая структура после преобразований

function Task2(categories){
  let counter = 0
  function sortingRecursion(arrSubcategories, products, objUpper, averageNumberUpper) {
    console.log(++counter)
    arrSubcategories.forEach((obj) => {
      if (obj.isActive === false) {
        delete objUpper.subcategories
        return
      }
      let averageNumber = 0
      products.forEach((obgProduct) => {
        obgProduct.discountPrice = obgProduct.discount !== 0 ? obgProduct.price - obgProduct.price * Number(obgProduct.discount / 100): obgProduct
        averageNumber = averageNumber + obgProduct.price
      });
      averageNumber = averageNumber / products.length
      if(averageNumberUpper < averageNumber){
        arrSubcategories[0].products = objUpper.products
        objUpper.products = products
        sortingRecursion(categories, categories[0].products, objUpper, averageNumber)
      }
      if(obj.subcategories === undefined) {
        return 
      }
      sortingRecursion(obj.subcategories, obj.subcategories[0].products, obj, averageNumber)
    })
  }
  sortingRecursion(categories, categories[0].products)
} 

Task2(categories)

console.log(categories)
//----------------------------------------------------------------
//                         Второй вариант

function transformCategories(categories) {
  // Рекурсивная функция обработки категории
  function processCategory(category) {
    // 1. Проверяем isActive — если false, возвращаем null (удаляем)
    if (!category.isActive) return null;

    // 2. Обрабатываем продукты: применяем скидку и добавляем вычисляемые поля
    const processedProducts = category.products
      .map(product => {
        const finalPrice = product.price * (1 - product.discount / 100);
        return {
          ...product,
          finalPrice, // цена со скидкой
          isAvailable: product.inStock, // вычисляемое поле
          discountAmount: product.price - finalPrice // сумма скидки
        };
      })
      // Сортируем по finalPrice
      .sort((a, b) => a.finalPrice - b.finalPrice);

    // 3. Обрабатываем подкатегории рекурсивно
    const processedSubcategories = category.subcategories
      .map(processCategory)
      .filter(subcat => subcat !== null); // удаляем null (неактивные)

    // 4. Сортируем подкатегории по средней цене продуктов
    processedSubcategories.sort((a, b) => {
      const avgPriceA = a.products.reduce((sum, p) => sum + p.finalPrice, 0) / a.products.length;
      const avgPriceB = b.products.reduce((sum, p) => sum + p.finalPrice, 0) / b.products.length;
      return avgPriceA - avgPriceB;
    });

    // Возвращаем преобразованную категорию
    return {
      ...category,
      products: processedProducts,
      subcategories: processedSubcategories,
      // Дополнительные вычисляемые поля
      totalProducts: processedProducts.length,
      averagePrice: processedProducts.length > 0
        ? processedProducts.reduce((sum, p) => sum + p.finalPrice, 0) / processedProducts.length
        : 0
    };
  }

  // Применяем преобразование ко всем категориям
  return categories
    .map(processCategory)
    .filter(cat => cat !== null); // удаляем null (неактивные корневые категории)
}

// Применение преобразования
const result = transformCategories(categories);

console.log(JSON.stringify(result, null, 2));

/**
 * Анализ данных о продажах за разные периоды с множественными условиями
 */

const salesData = [
  {
    date: "2024-01-15",
    region: "North",
    products: [
      { category: "Electronics", name: "Laptop", price: 1000, quantity: 2 },
      { category: "Electronics", name: "Phone", price: 500, quantity: 5 },
      { category: "Books", name: "JS Guide", price: 40, quantity: 10 }
    ],
    discountApplied: true
  },
  {
    date: "2024-01-16",
    region: "South",
    products: [
      { category: "Electronics", name: "Tablet", price: 300, quantity: 3 },
      { category: "Clothing", name: "Shirt", price: 25, quantity: 8 }
    ],
    discountApplied: false
  },
  // ... больше данных
];

// Задачи:
// 1. Сгруппировать продажи по месяцам и регионам
// 2. Вычислить общую выручку по каждой категории
// 3. Найти категории с наибольшим количеством проданных товаров
// 4. Рассчитать средний чек с учётом discountApplied
// 5. Построить матрицу: регионы × категории × общая выручка

// Ожидаемый результат - сложная агрегированная структура

//--------------------------------------------------------------------------------
// 1. Сгруппировать продажи по месяцам и регионам

let  groupByMonthAndRegion = (data) => {
  const grouped = {};
  data.forEach(objItemSales => {
    const month = objItemSales.date.slice(0, 7); // "2024-01"
    const region = objItemSales.region;
    if(!grouped[month]){
      grouped[month] = {};
    } 
    if(!grouped[month][region]){
      grouped[month][region] = [];
    } 
    grouped[month][region].push(objItemSales);
  });

  return grouped;
}

const salesByMonthAndRegion = groupByMonthAndRegion(salesData);
 // Пример
// {
//     "2024-01": {
//         "North": [
//             {
//                 "date": "2024-01-15",
//                 "region": "North",
//                 "products": [
//                     {
//                         "category": "Electronics",
//                         "name": "Laptop",
//                         "price": 1000,
//                         "quantity": 2
//                     },
//                     {
//                         "category": "Electronics",
//                         "name": "Phone",
//                         "price": 500,
//                         "quantity": 5
//                     },
//                     {
//                         "category": "Books",
//                         "name": "JS Guide",
//                         "price": 40,
//                         "quantity": 10
//                     }
//                 ],
//                 "discountApplied": true
//             }
//         ],
//         "South": [
//             {
//                 "date": "2024-01-16",
//                 "region": "South",
//                 "products": [
//                     {
//                         "category": "Electronics",
//                         "name": "Tablet",
//                         "price": 300,
//                         "quantity": 3
//                     },
//                     {
//                         "category": "Clothing",
//                         "name": "Shirt",
//                         "price": 25,
//                         "quantity": 8
//                     }
//                 ],
//                 "discountApplied": false
//             }
//         ]
//     }
// }
//--------------------------------------------------------------------------------
// 2. Вычислить общую выручку по каждой категории

let calculateRevenueByCategory = (data) => {
  const obj = {}
  data.forEach((sales) => {
    sales.products.forEach((product) => {
      if(obj[`${product.category}`] || obj[product.category] === 0){
        obj[product.category] = obj[product.category] + product.price * product.quantity
      } else {
        obj[product.category] = product.price * product.quantity
      } 
    })
  })
  return obj
}
 console.log(calculateRevenueByCategory(salesData)) 



// {
//     "Electronics": 5400,
//     "Books": 400,
//     "Clothing": 200
// }

//--------------------------------------------------------------------------------
// 3. Найти категории с наибольшим количеством проданных товаров

let getTopCategoriesByQuantity = (data, top_N) => {
  const obj = {};
  // for(let i = 0;  i < top_N; i++){}
  data.forEach((sales) => {
    sales.products.forEach((products) => {
      if(obj[products.category] || obj[products.category] === 0){
        obj[products.category] = obj[products.category] + products.quantity
      } else {
        obj[products.category] = products.quantity
      } 
    });
  });
  return Object.entries(obj).sort((a, b) => b[1] - a[1]).map(([category, quantity]) => ({ category, quantity }));
}

getTopCategoriesByQuantity(salesData)

// [
//     {
//         "category": "Electronics",
//         "quantity": 10
//     },
//     {
//         "category": "Books",
//         "quantity": 10
//     },
//     {
//         "category": "Clothing",
//         "quantity": 8
//     }
// ]
//--------------------------------------------------------------------------------

// 4. Рассчитать средний чек с учётом discountApplied

 let calculateAverageCheck = (data, discountPercent) => {
  let totalRevenue = 0;
  let totalOrders = data.length;
  // 
  data.forEach(item => {
    let orderRevenue = 0;
    item.products.forEach(product => {
      orderRevenue = orderRevenue + product.price * product.quantity;
    });
    // Применяем скидку discountPercent, если discountApplied === true
    if (item.discountApplied) {
      orderRevenue = orderRevenue * (discountPercent / 100 - 1);
    }
    totalRevenue = totalRevenue + orderRevenue;
  });

  return totalOrders > 0 ? totalRevenue / totalOrders : 0;
}

const averageCheck = calculateAverageCheck(salesData, 30);

//4. Средний чек: 2755.00
//--------------------------------------------------------------------------------
// 5. Построить матрицу: регионы × категории × общая выручка

let buildRegionCategoryRevenueMatrix = (data) => {
  const matrix = {};

  data.forEach(item => {
    const region = item.region;
    if (!matrix[region]) matrix[region] = {};

    item.products.forEach(product => {
      const category = product.category;
      const revenue = product.price * product.quantity;

      if (!matrix[region][category]) {
        matrix[region][category] = 0;
      }
      matrix[region][category] = matrix[region][category] + revenue;
    });
  });

  return matrix;
}

const regionCategoryMatrix = buildRegionCategoryRevenueMatrix(salesData);

// {
//     "North": {
//         "Electronics": 4500,
//         "Books": 400
//     },
//     "South": {
//         "Electronics": 900,
//         "Clothing": 200
//     }
// }

const analysisResult = {
  salesByMonthAndRegion,
  revenueByCategory,
  topCategories,
  averageCheck: averageCheck.toFixed(2),
  regionCategoryMatrix
};

console.log("Итоговый результат анализа:", analysisResult);


