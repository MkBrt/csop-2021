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
function createCustomer(name: string, age?: number, city?: string) {
    if (age && city) {
        console.log(name, age, city)
    }
    else if (age) {
        console.log(name, age)
    }
    else {
        console.log(name)
    }
}
function getWorkerNamesByCategory(workers: [], category: Category = Category.Designer):
Array<string> {
    let surnames: Array<string> = []
    for (let worker of workers) {
        if (worker["category"] == category) {
            surnames.push(worker["surname"])
        }
    }
    return surnames
}
function logFirstAvailable(workers: [] = getAllWorkers()): void {
    let amounfOfWorkers = workers.length
    console.log("Amount of workers:", amounfOfWorkers)
    for (let worker of workers) {
        if (worker["available"]) {
            console.log(worker["name"], worker["surname"])
            break
        }
    }
}
function getWorkerByID(workers, id: number): any {
    let worker = workers.find(_worker => _worker["id"] == id)
    return worker
}
function checkOutWorkers(customer: string, workerIDs: number[]): Array<any> {
    console.log("Customer:", customer)
    let availableWorkers: Array<any> = []
    let workers = getAllWorkers()
    for (let workerID of workerIDs) {
        let worker = getWorkerByID(workers, workerID)
        if (worker["available"]) {
            availableWorkers.push([worker["name"], worker["surname"]])
        }
    }
    return availableWorkers
}
console.log()
createCustomer("M1")
createCustomer("M2", 50)
createCustomer("M", 25, "Veres")
console.log()
console.log(getWorkerNamesByCategory(getAllWorkers()))
console.log()
logFirstAvailable()
console.log()
let myWorkers: Array<any> = checkOutWorkers("Ann", [1, 2, 4])
for (let myWorker of myWorkers) {
    let name: string = ""
    for (let partOfName of myWorker) {
        name += partOfName + " "
    }
    console.log(name)
}