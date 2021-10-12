function getAllWorkers(): any {
    let workers = [
    {name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
    {name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
    {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
    {name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300}
    ]
    return workers
}
function logFirstAvailable(workers: []): void {
    let amounfOfWorkers = workers.length
    console.log("Amount of workers:", amounfOfWorkers)
    for (let worker of workers)
    {
        if (worker["available"])
        {
            console.log(worker["name"], worker["surname"])
        }
    }
}
logFirstAvailable(getAllWorkers())