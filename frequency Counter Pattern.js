const arr1 = [2, 1, 3]
const arr2 = [1, 9, 4]

// O(n^2) time complexity due to nested loop
const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false
        }
        console.log(arr2)
        arr2.splice(correctIndex, 1)
    }
    return true
}

const same2 = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1){
        frequencyCounter2[val] = (frequencyCounter1[val] || 0) +1
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same(arr1, arr2));
console.log(same2(arr1, arr2));