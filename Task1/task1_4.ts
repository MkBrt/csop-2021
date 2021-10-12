function createCustomerID(name: string, id: number): string {
    let customerID: string = name + " " + id
    return customerID
}
let myID: string = createCustomerID("Ann", 10)
console.log(myID)
let IDGenerator = (name: string, id: number): string => name + " " + id
console.log(IDGenerator("Ann", 10))