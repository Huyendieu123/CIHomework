export default class Danhba {
    numberphone;
    name;
    workplace;

    constructor(numberphone, name, workplace) {
        this.numberphone = numberphone;
        this.name = name;
        this.workplace = workplace;

    }
    get infor() {
        return `
        numberphone: ${this.numberphone}
        name: ${this.name}
        workplace: ${this.workplace}`
    }

    set infor(data) {
        this.numberphone = data.numberphone;
        this.name = data.name;
        this.workplace = data.workplace;
    }
}

let so1 = new Danhba("0946803624", "Diệu", "Thái Hài");
console.log(so1.infor);
