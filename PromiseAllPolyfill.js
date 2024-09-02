const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// }).catch(error => console.log(error)
// );


// Custom Promise.all
Promise.customAll = function(promises = []) {

    let results = Array.from({length : promises.length}).fill(null);
    let counter = 0;
    
    return new Promise((resolve, reject) => {
        promises.forEach((pro, index) => {
            pro.then((value) => {
                results[index] = value;
                counter += 1;

                if (counter === promises.length) {
                    console.log(results, 'sss');
                    resolve(results);
                }
            }).catch((error) => reject(error))
        })
    });
}

Promise.customAll([promise1, promise2, promise3]).then((values) => {
    // console.log(values);
}).catch(error => console.log(error)
);