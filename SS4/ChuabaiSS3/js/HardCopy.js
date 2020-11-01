import Document from "./Document.js";
export default class HardCopy extends Document {
    source;
    constructor(name, author, price, publishDate, source) {
        super(name, author, price, publishDate);
        this.source = source;
    }
    get info() {
        return `
        Id: ${this.id},
        Name: ${this.name}
        Author: ${this.author}
        Price: ${this.price},
        PublishDate: ${this.publishDate}
        Source: ${this.source}
 `
    }
}