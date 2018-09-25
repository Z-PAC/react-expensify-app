// ES6 promises
// pass a function
//  function has 2 input functions
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    // // resolve('This is my other resolved data');  // <-- ignored
    reject('Something went wrong');
  }, 1500)
});

promise.then((data) => {
  console.log('1', data);
  return 'some data'
}).then((str) => {
  console.log('Hi?', str);
}).catch((error) => {
  console.log('Error: ', error);
});

promise.then((data) => {
  console.log('2', data);
});