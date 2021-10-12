interface Person {
    name: string
    email: string
}
interface Author extends Person {
    numBooksPublished: number
}
interface Librarian extends Person {
    department: string
    assistCustomer: (custName: string) => void
}
let favoriteAuthor: Author = {name: "John Doe", email: "john-doe@example.com",
numBooksPublished: 5}
let favoriteLibrarian: Librarian = {name: "Emily Smith",
email: "e.s@example.com", department: "King County", assistCustomer:
(customerName) => console.log("Librarian", favoriteLibrarian.name,
"assisted", customerName)}
favoriteLibrarian.assistCustomer("John Smith")