function dummyPromise(timer) {
  return new Promise((res, reject) => {
    setTimeout(() => {
      res(timer);
    }, timer);
  });
}

function promiseAllPoly(tasks) {
  const results = new Array(tasks.length);
  let promiseCompleted = 0;
  return new Promise((res, rej) => {
    tasks.forEach((promise, index) => {
      promise
        .then((data) => {
          promiseCompleted++;
          results[index] = data;
          console.log("promise resolved ", data);
          if (promiseCompleted === tasks.length) {
            res(results);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
}
const tasks = [dummyPromise(3000), dummyPromise(1000), dummyPromise(2000)];
promiseAllPoly(tasks)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("in error");
    console.log(err);
  });
