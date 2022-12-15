// 1) Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту,
// кількість і куплений він чи ні, ціну за одиницю товару, сума.
let shoppingList = [
    {name: 'milk', quantity: 2, status: 'bought', price: 35, amount: 70},
    {name: 'eggs', quantity: 20, status: 'notBought', price: 7, amount: 140},
    {name: 'bread', quantity: 1, status: 'bought', price: 35, amount: 35},
    {name: 'butter', quantity: 4, status: 'notBought', price: 80, amount: 320},
    {name: 'oil', quantity: 2, status: 'bought', price: 70, amount: 140},
    {name: 'cheese', quantity: 3, status: 'bought', price: 70, amount: 210},
    {name: 'yoghurt', quantity: 6, status: 'notBought', price: 25, amount: 150},
    {name: 'napkins', quantity: 4, status: 'bought', price: 20, amount: 80},
    {name: 'oranges', quantity: 6, status: 'notBought', price: 15, amount: 90},
    {name: 'mandarins', quantity: 8, status: 'notBought', price: 10, amount: 80}
];
console.log(shoppingList)


//   a) Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
//   що ще не придбані, а потім - ті, що вже придбали.
shoppingList.sort(function (b, a) {
    if (a.status > b.status) {
        return 1;
    }
    if (a.status < b.status) {
        return -1;
    }
    return 0;
});
console.log(shoppingList)


//   b) Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
let choice = prompt('Введіть позицію зі списку'); {
    if (item.choice == bought) {
        console.log(bought);
    }
    else {
        console.log(notBought);
    }
}

//  2) Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву,
//  в якому продукт, що ми шукаємо, буде відсутнім)
shoppingList.splice(5,5)
console.log(shoppingList)

//  3) Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом,
//  необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна
//  змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
shoppingList.push({name: 'milk', quantity: 2, status: 'bought', price: 35, amount: 70},)
console.log(shoppingList)

// 4) Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
const summ = shoppingList.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.amount;
}, 0);

    console.log(summ)


// 5) Підрахунок суми всіх (не) придбаних продуктів.



// 6) Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого,
// в залежності від параметра функції, який вона приймає)