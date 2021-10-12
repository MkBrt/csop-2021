abstract class ReferenceItem {
    // title: string
    // year: number
    // constructor(newTitle: string, newYear: number) {
    //     console.log("Creating a new ReferenceItem...")
    //     this.title = newTitle
    //     this.year = newYear
    // }
    private _publisher: string
    constructor(public title: string, protected year: number) {
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
    abstract printCitation(): void
}
class Encyclopedia extends ReferenceItem {
    constructor(public title: string, protected year: number, public edition: number) {
        super(title, year)
    }
    printItem(): void {
        console.log("Title", this.title, "was published in", this.year, "year")
        console.log("Edition:", this.edition)
    }
    printCitation(): void {
        console.log(this.title, "—", this.year)
    }
}
let refBook = new Encyclopedia("Reference Book", 1999, 2)
refBook.printCitation()