function getAllWorkers() {
    var workers = [
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 }
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
        }
    }
}
logFirstAvailable(getAllWorkers());
