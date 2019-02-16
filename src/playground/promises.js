const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isToResolve = true
    if (isToResolve) {
      resolve('Resolved!')
    } 

    reject('Rejected!')
  }, 3000)
});

promise.then((data) => {
  console.log(data)
}).catch((error) => {
  console.log('error:', error )
})