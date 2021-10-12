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
}
let refBook = new Encyclopedia("Reference Book", 1999, 2);
refBook.printItem();
