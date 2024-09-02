const person1 = {
    firstName : 'Yuvant',
    lastName : 'Besre',
    fullName : function(someParams = '', someParams2 = '') {
        return `${someParams} ${someParams2} ${this.firstName} ${this.lastName}`
    }
}

const person2 = {
    firstName : 'Ritu',
    lastName : 'Sharma',
}

// Function Call
Function.prototype.customCall = function(obj = {}, ...args) {
    if(typeof this !== 'function')
        throw new Error(`${this} is not callable!`)

    obj.fn = this;
    return obj.fn(...args);
}
let result = person1.fullName.customCall(person2, 'Hey');
console.log(result);

// Function Apply
Function.prototype.customApply = function(obj = {}, args = []) {
    if(typeof this !== 'function')
        throw new Error(`${this} is not callable!`)

    if(!Array.isArray(args)) {
        throw new Error(`Must be an array of parameters.`)
    }

    obj.fn = this;
    return obj.fn(...args);
}
result = person1.fullName.customApply(person2, ['Hey', 'There']);
console.log(result);

// Function Bind
Function.prototype.customBind = function(obj = {}, ...args) {
    if(typeof this !== 'function')
        throw new Error(`${this} is not callable!`)

    obj.fn = this;

    return function fullName(...args1) {
        return obj.fn(...args, ...args1)
    }
}
result = person1.fullName.customBind(person2, 'Hey');
console.log(result());












