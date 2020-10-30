class Document {
    id;
    name;
    author;
    price;
    publishDate;
    constructor(id, name, author, price, publishDate) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.publishDate = publishDate;
    }

    get info() {
        return `Đây là tài liệu với mã ${this.id}
                Tên là ${this.name}
                Tác giả ${this.author}
                Giá ${this.price}
                Xuất bản ngày ${this.publishDate}`
    }
    set setInfo(data) {
        this.id = data.id;
        this.name = data.name;
        this.author = data.author;
        this.price = data.price;
        this.publishDate = data.publishDate;
    }
}

class EBook extends Document {
    discount;
    gia;
    constructor(id, name, author, price, publishDate, discount) {
        super(id, name, author, price, publishDate);
        this.discount = discount;
        this.gia = price - (price * discount);
    }
    get info() {
        return `Đây là tài liệu ${this.id}
                Tên là ${this.name}
                Tác giả ${this.author}
                Giá ${this.gia}
    }
    Xuất bản ngày ${ this.publishDate } `
    }
}

class HardCopy extends Document {
    source;
    constructor(id, name, author, price, publishDate, source) {
        super(id, name, author, price, publishDate);
        this.source = source;
    }

    get info() {
        return `Đây là bản hardcopy được dịch từ ${ this.source } `
    }
}

let sach = new Document("1", "Nàng công chúa", "Nguyễn Nhật Minh", 125000, "23/4/2010");
console.log(sach.info);
let sach1 = new Document("2", "Chàng hoàng tử", "Nguyễn Hoài Linh", 125000, "25/4/2010");
sach.setInfo = sach1;
console.log(sach.info);
let truyenhay = new EBook('1', 'Nàng công chúa nhỏ', 'Bùi Mạnh tuấn', 135000, '22/10/1978', 0.2);
console.log(truyenhay.info);
let truyendo= new HardCopy ('3', 'Nàng công chúa to', 'Bùi Mạnh Ninh', 135000, '22/10/1978', "Nàng phù thủy");
console.log(truyendo.info);


class DocumentCase {
    id;
    name;
    documents;
    owner;
    dateModified;
    constructor(id, name, documents, owner, dateModified) {
        this.id = id;
        this.name = name;
        this.documents = documents;
        this.owner = owner;
        this.dateModified = dateModified;
    }
    set addDocument(document) {
        this.id = document.id;
        this.name = document.name;
        this.author = document.author;
        this.price = document.price;
        this.publishDate = document.publishDate;
    }

}

