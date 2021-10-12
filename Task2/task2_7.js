class ReferenceItem {
    title;
    year;
    // title: string
    // year: number
    // constructor(newTitle: string, newYear: number) {
    //     console.log("Creating a new ReferenceItem...")
    //     this.title = newTitle
    //     this.year = newYear
    // }
    _publisher;
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log("Creating a new ReferenceItem...");
    }
    printItem() {
        console.log("Title", this.title, "was published in", this.year, "year");
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
}
class Encyclopedia extends ReferenceItem {
    title;
    year;
    edition;
    constructor(title, year, edition) {
        super(title, year);
        this.title = title;
        this.year = year;
        this.edition = edition;
    }
    printItem() {
        console.log("Title", this.title, "was published in", this.year, "year");
        console.log("Edition:", this.edition);
    }
    printCitation() {
        console.log(this.title, "—", this.year);
    }
}
let refBook = new Encyclopedia("Reference Book", 1999, 2);
refBook.printCitation();
/*
1. Внесіть зміни в клас ReferenceItem - зробіть його абстрактним. Закоментуйте
код, який відноситься до змінної ref, оскільки не можна створювати екземпляри
абстрактного класу.
2. Додайте абстрактний метод printCitation(), який не приймає параметрів і не
повертає значення. У цього методу не повинно бути реалізації. Після цього Ви
отримаєте помилку в класі Encyclopedia, яка повідомить, що не реалізований
абстрактний метод.
3. Додайте реалізацію методу printCitation в клас Encyclopedia. Метод повинен
виводити в консоль рядок «title - year».
*/ 
