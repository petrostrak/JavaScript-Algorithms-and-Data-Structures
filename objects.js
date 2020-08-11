// Objects are Unordered Data Structures, key - value pairs
// Fast access 
// Insertion O(1)
// Removal O(1)
// Searching O(n)
// Access O(1)

const instructor = {
    firstName : 'Petros',
    isInstructor : true,
    favoriteNumbers : [3, 6, 9]
}

console.log(Object.keys(instructor)); // O(n)
console.log(Object.values(instructor)); // O(n)
console.log(Object.entries(instructor)); // O(n)
console.log(Object.hasOwnProperty(instructor)); // O(1)