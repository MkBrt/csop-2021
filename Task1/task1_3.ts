enum Category {
    BusinessAnalyst, Developer, Designer, QA, ScrumMaster
}
function getAllWorkers(): any {
    let workers = [
    {name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000,
    category: Category.Developer, id: 1},
    {name: 'Petro', surname: 'Petrov', available: true, salary: 1500,
    category: Category.ScrumMaster, id: 2},
    {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600,
    category: Category.Developer, id: 3},
    {name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300,
    category: Category.Designer, id: 4}
    ]
    return workers
}
function getWorkerNamesByCategory(workers: [], category: Category):
Array<string> {
    let surnames: Array<string> = []
    for (let worker of workers) {
        if (worker["category"] == category) {
            surnames.push(worker["surname"])
        }
    }
    return surnames
}
function logWorkerNames(workerNames: string[]): void {
    for (let workerName of workerNames) {
        console.log(workerName)
    }
}
function getWorkerByID(workers, id: number): any {
    let worker = workers.find(_worker => _worker["id"] == id)
    return worker
}
let f = (worker, category: Category): boolean => worker["category"] == category
for (let worker of getAllWorkers()) {
    if (f(worker, Category.Developer)) {
        console.log(worker["name"], worker["surname"])
    }
}
console.log(getWorkerByID(getAllWorkers(), 3))