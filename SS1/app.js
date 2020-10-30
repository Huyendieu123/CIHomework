// Class: Bản thiết kế 1 đối tượng. Tên Class luôn viết hoa chữ cái đầu
// Object: Đối tượng cụ thể được tạo từ object
// class Person {
//     name;
//     age;
//     adress;
//     sex;
//     marriage;
//     // Phương thức đặc biệt gọi new person. New person và constructor là 1.
//     constructor(name, age, adress, sex, marriage) {
//         this.name = name;
//         this.age = age;
//         this.adress = adress;
//         this.sex = sex;
//         this.marriage = marriage;
//         console.log(this);
//     }
//     run() {
//         console.log('I am runnung');
//     }
//     walk() {
//         console.log("I am walking");
//     }
//     goTo(destination) {
//         console.log(`I am going to ${destination}`);
//     }
//     introduce() {
//         console.log(`Xin chào mọi người
//                       Mình là ${name}
//                       Quê quán ${this.adress}`)
//     }
// }


// let hoanganh = new Person('Hoanganh', '20', 'Bắc Giang', "single");
// hoanganh.goTo('Quất Lâm');
// hoanganh.introduce();
// let Tung = new Person('Tung', '29', 'Phú Thọ', 'single');

// console.log(this);

// let long = new Person();
// long.name = "vịt";
// long.age = "20";
// long.adress = "Hà Tây";
// long.sex = "female";
// long.marriage = "single";
// console.log(long);

// class Animal {
//     name;
//     gender;
//     species;
//     color;
//     legs;
//     constructor(name, gender, species, color, legs) {
//         this.name = name;
//         this.gender = gender;
//         this.species = species;
//         this.color = color;
//         this.legs = legs;
//     }
//     speak() {
//         console.log(`${name} biết nói`);
//     }
//     walk() {
//         console.log(` con này có +${leg} chân`);
//     }
// }

// let cho = new Person('Ki', 'Male', 'Begie', 'yellow', '4');
// cho.speak();
// let ga = new Person('Ga', 'Female', 'Tay', 'yellow', '2');
// let meo = new Person('Miu', 'Female', 'Tay', 'black', '4');
// console.log(this);

// Tính kế thừa:
class Person {
    name;
    sex;
    age;
    slogan;
    constructor(name, sex, age, slogan) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.slogan = slogan;
    }
}

class Goodboy extends Person {
    rich;
    constructor(name, sex, age, slogan,rich) {
        super(name, sex, age, slogan);
        this.rich = rich;
        
    }

}
let long = new Goodboy('Long', 'male', '20', 'Em an com chua', 'ngheo');
