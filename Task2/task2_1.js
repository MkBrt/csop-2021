var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
function getAllWorkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000,
            category: Category.Developer },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500,
            category: Category.ScrumMaster },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600,
            category: Category.Developer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300,
            category: Category.Designer }
    ];
    return workers;
}
function getWorkerByID(workers, id) {
    var worker = workers.find(function (_worker) { return _worker.id == id; });
    return worker;
}
function printWorker(worker) {
    console.log(worker.name, worker.surname, "got salary", worker.salary);
}
printWorker(getWorkerByID(getAllWorkers(), 2));
/*
    1. Визначіть інтерфейс Worker, який містить наступні поля:
        a. id - число
        b. name - строка
        c. surname - строка
        d. available - булеан
        e. salary – категория
    Внесіть зміни в функцію getAllWorkers(), укажіть тип повертаємого
    значення, використовуючи оголошену вище інтерфейс Worker. Видаліть
    тимчасово id в робітниках і дивіться, що з'явиться помилка.
    3. Створіть функцію getWorkerByID(), вкажіть тип отримуваного значення,
    використовуючи оголошений вище інтерфейс. Можливо, понадобиться додати
    об'єднання типів undefined, оскільки метод find, якщо не знайде елемент,
    поверне undefined.
    4. Створіть функцію PrintWorker(), яка на вход приймає робітника і
    виводить в консоль фразу worker.name + worker.surname + ‘got salary’
    + worker.salary. Для типа параметра используйте интерфейс Worker.
*/ 
