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
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000,
            category: Category.Developer, id: 1 },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500,
            category: Category.ScrumMaster, id: 2 },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600,
            category: Category.Developer, id: 3 },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300,
            category: Category.Designer, id: 4 }
    ];
    return workers;
}
function getWorkerNamesByCategory(workers, category) {
    var surnames = [];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker["category"] == category) {
            surnames.push(worker["surname"]);
        }
    }
    return surnames;
}
function logWorkerNames(workerNames) {
    for (var _i = 0, workerNames_1 = workerNames; _i < workerNames_1.length; _i++) {
        var workerName = workerNames_1[_i];
        console.log(workerName);
    }
}
function getWorkerByID(workers, id) {
    var worker = workers.find(function (_worker) { return _worker["id"] == id; });
    return worker;
}
var f = function (worker, category) { return worker["category"] == category; };
for (var _i = 0, _a = getAllWorkers(); _i < _a.length; _i++) {
    var worker = _a[_i];
    if (f(worker, Category.Developer)) {
        console.log(worker["name"], worker["surname"]);
    }
}
console.log(getWorkerByID(getAllWorkers(), 3));
