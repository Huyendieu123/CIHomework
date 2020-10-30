// Hãy cài đặt các class sau
import {Vertrical} from "./"

class Car extends Vertrical {
    static wheels = 4;
    about() {
        super.about();
        console.log(`xe hơi ${this.name} chạy với tốc độ là ${this.speed}`);
    }

    static aboutCar() {
        console.log(` Đây là xe hơi được ra đời....`);
    }

    get infor() {
        return ` đây là xe hơi
                 Tên của nó là ${this.name}
                 Nó có thể chạy với tốc độ là ${this.speed}`;
    }

    set preferedSpeed(preferedSpeed) {
        if (isNaN(preferedSpeed)) {
            console.log('Nhập vào 1 số');
        } else {
            this.speed = preferedSpeed;
        }
    }
}

class Bike extends Vertrical {
    static wheels = 2;

}

class Plane extends Vertrical {
    static wheels = 12;

}

// let mercedes = new Car('mercedes', '200', 'Mer');
// console.log(mercedes.name);
// console.log(Car.wheels);

// console.log(Bike.wheels);
// console.log(Plane.wheels);
// Car.aboutCar();


// mercedes.about();


let lexus2020 = new Car('lexus', '120', 'Toyota');
console.log(lexus2020.infor);
lexus2020.preferedSpeed=  200;
console.log(lexus2020.infor)

import {helloByJapanese} from"./hello.js";

helloByJapanese();
helloByJapanese();


// static: Khi đặt static trước thuộc tính hoặc phương thức thì chúng ta k cần khởi tạo đối tượng từ lớp đó mà chúng ta có thể sử dụng luôn 
//  còn non-static thì phải khởi tạo đối tượng từ lớp đó rồi mới sử dụng được
// class dùng để tạo ra object. object là cụ thể của class.

// getter, setter: phương thức đặc biệt
// module: là một chương trình js dùng để giải quyết 1 vấn đề nào đó.
// có thể import và export
// để thằng khác sử dụng thì export còn để dùng của thằng khác thì phải import
// export thằng nào thì mới sử dụng được thằng đó.



