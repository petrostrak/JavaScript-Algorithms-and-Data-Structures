// O(1) Constant time complexity
const add = (n) => {
    return n * (n + 1) / 2;
}

// O(n) Linear time complexity
const add2 = (n) => {
    let total = 0
    for (let i = 0; i <= n; i++) {
        total += i     
    }
    return total
}

// O(n^2) Exponential time complexity (Squared)
const nestedFor = (n) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);          
        }
    }
}

const t1 = performance.now()
add(1000000000)
const t2 = performance.now()
console.log(`Time elapsed : ${(t2 - t1) / 1000} seconds!`);

const t3 = performance.now()
add2(1000000000)
const t4 = performance.now()
console.log(`Time elapsed : ${(t2 - t1) / 1000} seconds!`);