interface Person {
    name: string
    email: string
}
interface Librarian extends Person {
    department: string
    assistCustomer: (custName: string) => void
}
class UniversityLibrarian implements Librarian {
    name: string
    email: string
    department: string
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`)
    }
}
let favoriteLibrarian: Librarian = new UniversityLibrarian()
favoriteLibrarian.name = "Emma Miller"
favoriteLibrarian.assistCustomer("Bill Smith")