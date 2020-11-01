import Document from "./Document.js";

export default class DocumentCase {
    id;
    name;
    documents;
    owner;
    dateModified;
    constructor(name, owner) {
        this.id = uuid.v4();
        this.name = name;
        this.owner = owner;
        this.documents = [];
        this.dateModified = new Date().toISOString();
    }

    addDocuments(document) {
        if (document instanceof Document) {
            this.documents.push(document);
        } else {
            console.log("truyền tham số linh tinh");
        }
    }

    findDocuments(name) {
        // cách 1    let result = [];
        //     for(let document of this.documents) {
        //         if(document.name == name) {
        //             result.push(document);
        //         }
        //     }
        //     return result;



        // forEach: k break được
        // for of: break được
        //filter: hàm tiện ích lọc
        //cách 2
        let result = this.documents.filter(function (document) {
            return document.name == name;
        });
        return result;
    }


    showDocuments() {
        this.documents.forEach(function (document) {
            console.log(document.info);
        });
    }
    deleteDocument(id) {
        // let foundIndex = -1;
        // for (leti = 0; i < this.documents.length; i++) {
        //     if (this.document[i].id == id) {
        //         foundIndex = i;
        //     }
        // }

        let foundIndex = this.documents.findIndex(function (document) {
            return document.id == id;
        });

        if (foundIndex >= 0) {
            this.documents.splice(foundIndex, 1);
        }
    }
    updateDocument(id, data) {
        let found = this.documents.find(function (document) {
            return document.id == id;
        });
        if (found != null) {
            found.info = data;
        }
    }
}

// findIndex: Nếu k tìm thấy sẽ trả về giá trị - 1
// find: Nếu k tìm thấy sẽ trả về giá trị null
