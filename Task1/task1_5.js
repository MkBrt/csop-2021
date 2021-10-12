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
function createCustomer(name, age, city) {
    if (age && city) {
        console.log(name, age, city);
    }
    else if (age) {
        console.log(name, age);
    }
    else {
        console.log(name);
    }
}
function getWorkerNamesByCategory(workers, category) {
    if (category === void 0) { category = Category.Designer; }
    var surnames = [];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker["category"] == category) {
            surnames.push(worker["surname"]);
        }
    }
    return surnames;
}
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllWorkers(); }
    var amounfOfWorkers = workers.length;
    console.log("Amount of workers:", amounfOfWorkers);
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        if (worker["available"]) {
            console.log(worker["name"], worker["surname"]);
            break;
        }
    }
}
function getWorkerByID(workers, id) {
    var worker = workers.find(function (_worker) { return _worker["id"] == id; });
    return worker;
}
function checkOutWorkers(customer, workerIDs) {
    console.log("Customer:", customer);
    var availableWorkers = [];
    var workers = getAllWorkers();
    for (var _i = 0, workerIDs_1 = workerIDs; _i < workerIDs_1.length; _i++) {
        var workerID = workerIDs_1[_i];
        var worker = getWorkerByID(workers, workerID);
        if (worker["available"]) {
            availableWorkers.push([worker["name"], worker["surname"]]);
        }
    }
    return availableWorkers;
}
console.log();
createCustomer("M1");
createCustomer("M2", 50);
createCustomer("M", 25, "Veres");
console.log();
console.log(getWorkerNamesByCategory(getAllWorkers()));
console.log();
logFirstAvailable();
console.log();
var myWorkers = checkOutWorkers("Ann", [1, 2, 4]);
for (var _i = 0, myWorkers_1 = myWorkers; _i < myWorkers_1.length; _i++) {
    var myWorker = myWorkers_1[_i];
    var name_1 = "";
    for (var _a = 0, myWorker_1 = myWorker; _a < myWorker_1.length; _a++) {
        var partOfName = myWorker_1[_a];
        name_1 += partOfName + " ";
    }
    console.log(name_1);
}
