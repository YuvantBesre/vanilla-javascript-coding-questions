const obj1 = {
    a : '1',
    b : '2',
    c : {
        w : '1',
        y : [1, [1, 2]]
    }
}

const arr = [1, [2, 3]]

const isNotObject = (obj) => {
    if(obj !== null && typeof obj === 'object')
        return false;
    return true;
}

const deepCopy = (obj) => { 
    if(Array.isArray(obj)) {
        const newArray = obj.map((element) => {
            if(isNotObject(element))
                return element
            return deepCopy(element)
        })
        return newArray
    }
    else {
        const newObj = {};
        
        const keys = Object.keys(obj);
    
        for(let key of keys) {
            if(isNotObject(obj[key])) {
                newObj[key] = obj[key]    
            }
            else {
                newObj[key] = deepCopy(obj[key])
            }
        }
        return newObj;
    }

}

const newObj = deepCopy(arr)
// newObj.b = '3'
console.log(newObj);
