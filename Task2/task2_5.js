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
let ref = new ReferenceItem("BookTitle", 2007);
ref.printItem();
ref.publisher = "John Smith";
console.log(ref.publisher);
