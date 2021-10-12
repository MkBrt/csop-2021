class ReferenceItem {
    // title: string
    // year: number
    // constructor(newTitle: string, newYear: number) {
    //     console.log("Creating a new ReferenceItem...")
    //     this.title = newTitle
    //     this.year = newYear
    // }
    private _publisher: string
    constructor(public title: string, private year: number) {
        console.log("Creating a new ReferenceItem...")
    }
    printItem(): void {
        console.log("Title", this.title, "was published in", this.year, "year")
    }
    get publisher(): string {
        return this._publisher.toUpperCase()
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher
    }
}
let ref = new ReferenceItem("BookTitle", 2007)
ref.printItem()
ref.publisher ="John Smith"
console.log(ref.publisher)