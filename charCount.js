// Problem Solving 
// Write a function which takes in a string and returns
// counts of each character in the string

const charCount = (string) =>{
    // make object to return at end
    let result = {}
    // loop over string, for each character...
    for (let i = 0; i < string.length; i++) {
        const char = string[i].toLowerCase()
        // if the character is a number / letter AND is a key in object, add one to count
        if(result[char] > 0){
            result[char]++
        } 
        // if the char is a number / letter AND not in object, add it to object and set value to 1
        else { 
            result[char] = 1
        }
    }
    return result
}

console.log(charCount("Petros Trakadas"))