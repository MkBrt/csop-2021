var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
var logPrize = function (prize) { return console.log("Prize:", prize); };
var worker = { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000,
    category: Category.Developer, markPrize: logPrize };
worker.markPrize("100i");
/*
1. Визначіть інтерфейс PrizeLogger, який буде описувать тип для функції,
що приймає один строковий параметр і нічого не повертає.
2. Внесіть зміни в інтерфейс Worker: використовуйте оголошений інтерфейс
для поля markPrize.
3. Визначіть змінну logPrize використовуя визначений раніше інтерфейс.
Створіть функцію, яка задовольняє цьому інтерфейсу, присвойте оголошену
змінну. Визовіть функцію.
*/ 
