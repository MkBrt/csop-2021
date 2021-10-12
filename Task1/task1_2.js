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
            category: Category.Developer },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500,
            category: Category.ScrumMaster },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600,
            category: Category.Developer },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300,
            category: Category.Designer }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    var amounfOfWorkers = workers.length;
    console.log("Amount of workers:", amounfOfWorkers);
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker["available"]) {
            console.log(worker["name"], worker["surname"]);
            break;
        }
    }
}
function getWorkerNamesByCategory(workers, category) {
    var surnames = [];
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
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
var workers = getAllWorkers();
console.log("\nFirst available worker is:");
logFirstAvailable(workers);
var category = Category.ScrumMaster;
var categoryName = Category[category];
console.log("\nПрацівники категорії", categoryName + ":");
logWorkerNames(getWorkerNamesByCategory(workers, category));
