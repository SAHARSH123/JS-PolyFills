console.log("start");
delay(2000);
// setTimeout(() => {}, 2000);
console.log("end");

function delay(time) {
  const currentTime = Date.now();
  while (Date.now() < currentTime + time) {}
}
