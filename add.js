const add = (n) => {
    return n * (n + 1) / 2;
}

const add2 = (n) => {
    let total = 0
    for (let i = 0; i <= n; i++) {
        total += i     
    }
    return total
}

const t1 = performance.now()
add(1000000000)
const t2 = performance.now()
console.log(`Time elapsed : ${(t2 - t1) / 1000} seconds!`);

const t3 = performance.now()
add2(1000000000)
const t4 = performance.now()
console.log(`Time elapsed : ${(t2 - t1) / 1000} seconds!`);