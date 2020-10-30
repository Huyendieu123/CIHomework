class Company {
    name;
    establishedDate;
    country;
    businessType;
    employees = [];
    constructor(name, establishedDate, country, businessType, employees) {
        this.name = name;
        this.establishedDate = establishedDate;
        this.country = country;
        this.businessType = businessType;
        this.employees = employees;
    }
    showAllEmployees() {
        this.employees.forEach(function (employee, index) {
            console.log(`${index + 1} ${employee.name}`)
        })
    }
    showCEO() {
        this.employees.forEach(function (employee, index) {
            // console.log(employee instanceof CEO);
            if (employee instanceof CEO);
            console.log(`${index + 1} ${employee.name}`)
        })
    }
    showManagers() {
        this.employees.forEach(function(employee, index) {
            if (employee instanceof Managers);
            console.log(`${index + 1} ${employee.name}`)
        })
    }

    showStaffs() {
        this.employees.forEach(function(employee, index) {
            if (employee instanceof Staff);
            console.log(`${index + 1} ${employee.name}`)
        })
    }
}

class Employee {
    name;
    age;
    sex;
    address;
    constructor(name, age, sex, address) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.address = address;
    }
    about() {
        console.log(`My name is ${this.name}, I'm ${this.age} years old`)
    }
}

class CEO extends Employee {
    strategy;
    constructor(name, age, sex, address, strategy) {
        super(name, age, sex, address);
        this.strategy = strategy;
    }
}

class Managers extends Employee {
    managementStyle;
    constructor(name, age, sex, address, managementStyle) {
        super(name, age, sex, address);
        this.managementStyle = managementStyle;
    }
}

class Staff extends Employee {
    experience;
    constructor(name, age, sex, address, experience) {
        super(name, age, sex, address);
        this.experience = experience;
    }
}

let tung = new CEO('Nguyễn Thanh Tùng', 35, "Nam", "Hà Nội", "Cộng đồng Mở")
let hanh = new Managers('Nguyễn Đức Hạnh', 20, "Nam", "Hà Nội", "Thoải mái");
let hung = new Managers('Nguyễn Huy Hùng', 22, "Nam", "Hà Nội", "Hâm");
let thao = new Managers('Nguyễn Thị Thảo', 24, "Nữ", "Hà Nội", "vui vẻ");
let oanh = new Managers('Nguyễn Thị Oanh', 25, "Nam", "Hà Nội", "vui vẻ");

let h1 = new Staff('h1', 20, 'Nam', " Hà Nội", 10);
let h2 = new Staff('h2', 20, 'Nam', " Hà Nội", 10);
let h3 = new Staff('h3', 20, 'Nam', " Hà Nội", 10);
let h4 = new Staff('h4', 20, 'Nam', " Hà Nội", 10);
let h5 = new Staff('h5', 20, 'Nam', " Hà Nội", 10);
let h6 = new Staff('h6', 20, 'Nam', " Hà Nội", 10);
let h7 = new Staff('h7', 20, 'Nam', " Hà Nội", 10);
let h8 = new Staff('h8', 20, 'Nam', " Hà Nội", 10);
let h9 = new Staff('h9', 20, 'Nam', " Hà Nội", 10);
let h10 = new Staff('h10', 20, 'Nam', " Hà Nội", 10);

let employee = [tung, hanh, hung, thao, oanh, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10];
let mindex = new Company("Mindex", "2010-03-15", "Việt Nam", "Open", employee);
// mindex.showAllEmployees();
// mindex.showCEO();
// mindex.showManagers();
mindex.showStaffs();

