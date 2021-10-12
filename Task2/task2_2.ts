enum Category {
    BusinessAnalyst, Developer, Designer, QA, ScrumMaster
}
interface PrizeLogger {
    (prize: string): void
}
interface _Worker {
    id: number
    name: string
    surname: string
    available: boolean
    salary: number
    category: Category
    markPrize: PrizeLogger
}
let logPrize: PrizeLogger = (prize: string) => console.log("Prize:", prize)
let worker = {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000,
category: Category.Developer, markPrize: logPrize}
worker.markPrize("100i")