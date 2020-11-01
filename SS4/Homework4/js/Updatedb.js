import Danhba from "./Danhba.js";
export default class Updatedb {
    numberphone;
    name;
    workplace;
    danhbas;

    constructor(numberphone, name, workplace, danhba) {
        this.numberphone = numberphone;
        this.name = name;
        this.workplace = workplace;
        this.danhbas = [];

    }
    //Thêm
    addDanhbas(danhba) {
        if (danhba instanceof Danhba) {
            this.danhbas.push(danhba);
        } else {
            console.log(" Cập nhật lại thông tin");

        }
    }
    //Sửa
    upDateDanhbas(number, data) {
        let found = this.danhbas.find(function (danhba) {
            return danhba.numberphone == numberphone;
        });
        if (found != null) {
            found.info = data;
        }
    }

    // Xóa
    deleteDanhbas(numberphone) {
        let foundIndex = this.danhbas.findIndex(function (danhba) {
            return danhba.numberphone == numberphone;
        });

        if (foundIndex >= 0) {
            this.documents.splice(foundIndex, 1);
        }
    }

    //Liệt kê danh bạ
    showDanhbas() {
        this.danhbas.forEach(function (danhba) {
            console.log(danhba.info);
        });
    }

    //Tìm contact
    findDanhbas(name) {
        let result = this.danhbas.filter(function (danhba) {
            return danhba.name == name;
        });
        return result;
    }
} 
let so2= new Danhba ("0915488070", "Thân", "Yết Kiêu");
so2.addDanhbas();
console.log(so2.infor);