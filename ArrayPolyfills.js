// forEach
/*
    Expected Behavior :
    const arr = [1, 2, 3, 4]

    arr.forEach((el, index) => console.log(el))
 */

const arr = [1, 2, 3, 4];

Array.prototype.customForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

arr.customForEach((el, index) => console.log(el, index));

// Map function
/*
    Expected Behavior :
    const arr = [1, 2, 3, 4]

    const newArray = arr.map((el, index) => el * 2)
 */

Array.prototype.customMap = function(callback) {
    const response = [];
    for (let i = 0; i < this.length; i++) {
        const element = callback(this[i], i);
        response.push(element);
    }

    return response;
}

let newArray = arr.customMap((el, index) => el * 2)
console.log(newArray);

// Filter Function
/*
    Expected Behavior :
    const arr = [1, 2, 3, 4]

    const newArray = arr.filter((el, index) => el % 2 == 0)
 */

Array.prototype.customFilter = function(callback) {
    const response = [];
    for (let i = 0; i < this.length; i++) {
        const isElement = callback(this[i], i);
        if(isElement)
            response.push(this[i]);
    }

    return response;
}

newArray = arr.customFilter((el, index) => el % 2 == 0)
console.log(newArray);

// Reduce Function
/*
    Expected Behavior :
    const arr = [1, 2, 3, 4]

    const value = arr.reduce((accumulator, el) => {
        return accumulator + el
    }, 0)
 */

Array.prototype.customReduce = function(callback, initialValue) {
    let result = initialValue;

    for(let i = 0; i < this.length; i++) {
        result = callback(result, this[i])
    }

    return result;
}
const sumOfElements = arr.customReduce((accumulator, el) => {
    return accumulator + el
}, 0)

console.log(sumOfElements);



