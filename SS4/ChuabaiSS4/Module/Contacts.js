import Contact from "./Contact.js";

export default class Contacts {
    lists = [];
    constructor(lists = []) {
        this.lists = lists;
    }
    addContact(name, numberphone, address = "", email = "") {
        if (name.trim() === "" || numberphone.lenghth != 10 || isNaN(Number(numberphone)))// hàm trim xóa hết dấu cách đầu cuối
            return "Vui lòng nhập đúng dữ liệu"; // return ở đâu chương trình dừng ngay ở đó nghĩa là code dưới k chạy
        let contact = new Contact(name, numberphone, address, email);
        this.lists.push(contact);
    }
    editContact(numberphone, contact) {
        let index = this.lists.findIndex(function (contact) {
            return contact.numberphone === numberphone;
        });

        if (index != -1) {
            if ("name" in contact) {
                this.lists[index].sName = contact.name;
            }
            if ("numberphone" in contact) {
                this.lists[index].sNumberphone = contact.numberphone;
            }
            if ("email" in contact) {
                this.lists[email].sEmail = contact.email
            }
            if ("address" in contact) {
                this.lists[address].sAddress = contact.address;
            }

        }
    }

    deleteContact(numberphone) {
        let contactsFilter = this.lists = this.lists.filter(function (contact) {
            return contact.numberphone != numberphone;
        });
        this.lists = contactsFilter
    }
    showContact() {
        console.log(this.lists);
    }
    search(key) {
        let contactsFilter = this.lists.filter(function (contact) {
            return contact.name.indexOf(key) != -1 || contact.numberphone.indexOf(key) != -1;
        })
        console.log(contactsFilter);
    }

}