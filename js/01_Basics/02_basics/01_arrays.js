// SUMMARRY:

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.


const arr = [10, 20, 30, 40,50]
console.log(arr)
console.log(arr[1])

const arr1 = new Array(10, 20, 30 ,50, 60)

//arr.push(90)
// console.log(arr)
// arr.pop()
// console.log(arr)

arr.unshift(10)
console.log(arr)
arr.shift()
console.log(arr)
console.log(arr.includes(9));
console.log(arr.indexOf(30))

const arr2 = arr.join()
console.log(arr2)
console.log(typeof arr2)

const arr3 = arr.slice(0, 2)
console.log(arr3)
console.log(arr)
const arr4 = arr.splice(0, 2)
console.log(arr4)
console.log(arr)