const obj1 = {
    a : '1',
    b : '2',
    c : {
        w : '1',
        y : [1, 2]
    }
}

const obj2 = {
    a : '1',
    b : '2',
    c : {
        w : '1',
        y : [1, 2]
    }
}

const isNotObject = (obj) => {
    if(obj !== null && typeof obj === 'object')
        return false;
    return true;
}

const isObjectEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);    

    if(keys1.length !== keys2.length)
        return false;

    for(let i of keys1) {
        const value1 = obj1[i];
        const value2 = obj2[i];
        
        if(isNotObject(value1) && isNotObject(value2)) {
            if(value1 !== value2) return false;
        }        
        else {
            if(!isObjectEqual(value1, value2))
                return false;
        }
    }

    return true;
}

console.log(isObjectEqual(obj1, obj2));
