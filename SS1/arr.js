let numbers= prompt("Input numbers: ");
let arrNumber = numbers.split(",").map(function(num) {
    return Number(num);
});

let check = {};
for(let i=0; i<arrNumber.length; i++) {
    if(!check[arrNumber[i]]) {
        check[arrNumber[i]] = 1;
    } else {
        check[arrNumber[i]]++;
    }
}
for (const number in check) {
    if(check[number]===1) {
        console.log(number);
    }
}


