var favoriteAuthor = { name: "John Doe", email: "john-doe@example.com",
    numBooksPublished: 5 };
var favoriteLibrarian = { name: "Emily Smith",
    email: "e.s@example.com", department: "King County", assistCustomer: function (customerName) { return console.log("Librarian", favoriteLibrarian.name, "assisted", customerName); } };
favoriteLibrarian.assistCustomer("John Smith");
/*
1. Оголосіть інтерфейс Person, який містить дві властивості - name і email.
2. Об'явіть інтрефейс Author на основі інтерфейсу Person, який розширює
вказаний інтерфейс числоою властивістю numBooksPublished.
3. Оголосіть інтерфейс Librarian на основі інтерфейсу Person, який розширює
вказаний інтерфейс двома властивостями:
a. Строкова властивість department
b. Функція assistCustomer, яка приймає строковий параметр custName і нічого
не повертає.
4. Оголосіть змінну favoriteAuthor використовуючи інтерфейс Author, задайте
значення у вигляді літерала об'єкта.
5. Оголосіть змінну favoriteLibrarian використовуючи інтерфейс Librarian,
задайте значення у вигляді літерала об'єкта.
*/ 
