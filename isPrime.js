module.exports.isPrime = isPrime;
function isPrime(x) {
    console.log("My prime");
    for(let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
} 

module.exports.duong = (li) => {
    const result = li.filter(x => x % 2 == 0)
    return result;
}
