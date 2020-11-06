export default class Contact {
    name;
    numberphone;
    address;
    email;
    constructor(name, numberphone, address, email) {
        this.name = name;
        this.numberphone = numberphone;
        this.address = address;
        this.email = email;
    }
    showInfor() {
        console.log(`
Name: ${this.name}
Numberphone: ${this.numberphone}
Address: ${this.address}
Email: ${this.email}`);
    }
    set sName(name) {
        if (name.trim() == "") {
            return;
        }
        this.name = name;
    }
    set sEmail(email) {
        if (email.trim() == "") {
            return;
        }
        this.email = email;
    }
    set sNumberphone(numberphone) {
        if (numberphone.trim() == "" || numberphone.length != 10 || isNaN(Number(numberphone))) {
            this.numberphone = numberphone;
        }
    }
        set sAddress(address) {
            if (address.trim() == "") {
                return;
            }
            this.address = address;
        }
    }