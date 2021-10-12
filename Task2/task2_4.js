var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
var favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "Emma Miller";
favoriteLibrarian.assistCustomer("Bill Smith");
/*
1. Створіть клас UniversityLibrarian, який реалізує інтерфейс Librarian і
реалізуйте всі необхідні властивості. Метод assistCustomer повинен виводити
в консоль рядок `$ {this.name} is assisting $ {custName}`.
2. Закоментуйте код, який відноситься до змінної favoriteLibrarian
3. Оголосіть змінну favoriteLibrarian використовуючи інтерфейс Librarian і
проініціалізуйте її за допомогою об'єкта, створеного класом
UniversityLibrarian().
Ніяких помилок при цьому не повинно виникати. Проініціалізіруйте властивість
name і викличте метод assistCustomer().
*/ 
