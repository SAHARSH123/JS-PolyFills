function FullFilledPromise(timer) {
  return new Promise((res, reject) => {
    setTimeout(() => {
      res(timer);
    }, timer * 1000);
  });
}

function rejectedPromise(timer) {
  return new Promise((res, reject) => {
    setTimeout(() => {
      reject(timer);
    }, timer * 1000);
  });
}

const tasks = [FullFilledPromise(5), rejectedPromise(3), FullFilledPromise(2)];

function promiseAllSettled(tasks) {
  const results = new Array(tasks.length);
  let promiseCount = 0;
  return new Promise((resolve, reject) => {
    tasks.forEach((task, index) => {
      task
        .then((res) => {
          promiseCount++;
          results[index] = res;
          console.log("full filled ", res);
          if (promiseCount === tasks.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          promiseCount++;
          results[index] = err;
          console.log("reject ", err);
          if (promiseCount === tasks.length) {
            resolve(results);
          }
        });
    });
  });
}

promiseAllSettled(tasks).then((res) => {
  console.log(res);
});
