let input = prompt('Nhập vào dãy');
let nums = input.split(',');
let results = [];
for (let num of nums) {
    results.push(Number(num))
}
console.log(results);
let x = Numer(prompt("nhập vào x"));
for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (num[i] + num[j] == x) {
            console.log(i, j);

        }

    }
}
// let arr=[1,2,3,4,5,6];
// let results= arr.map(function(item) {
//      return item*item;
// });

