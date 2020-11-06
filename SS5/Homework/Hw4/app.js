let strs= prompt("Input string: ");
let arrstr = strs.split(",").map(function(str) {
    return (str);
});

let check = {};
for(let i=0; i<arrstr.length; i++) {
    if(!check[arrstr[i]]) {
        check[arrstr[i]] = 1;
    } else {
        check[arrstr[i]]++;
    }
}
for (const str in check) {
    if(check[str]===1) {
        console.log(str);
    }
}
