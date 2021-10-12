enum Category {
    BusinessAnalyst, Developer, Designer, QA, ScrumMaster
}
function getAllWorkers(): any {
    let workers = [
    {name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000,
    category: Category.Developer},
    {name: 'Petro', surname: 'Petrov', available: true, salary: 1500,
    category: Category.ScrumMaster},
    {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600,
    category: Category.Developer},
    {name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300,
    category: Category.Designer}
    ]
    return workers
}
function logFirstAvailable(workers: []): void {
    let amounfOfWorkers = workers.length
    console.log("Amount of workers:", amounfOfWorkers)
    for (let worker of workers) {
        if (worker["available"]) {
            console.log(worker["name"], worker["surname"])
            break
        }
    }
}
function getWorkerNamesByCategory(workers: [],
    category: Category): Array<string> {
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
const workers = getAllWorkers()
console.log("\nFirst available worker is:")
logFirstAvailable(workers)
let category = Category.ScrumMaster
let categoryName = Category[category]
console.log("\nПрацівники категорії", categoryName + ":")
logWorkerNames(getWorkerNamesByCategory(workers, category))