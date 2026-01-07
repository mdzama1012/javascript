// make javascript thread sleep.

const sleep = (millisecond) => {
  let endTime = Date.now() + millisecond;

  // thread busy wait for 5 millisecond.
  while (Date.now() < endTime) {}
};

sleep(5000);

console.log("Wake up!");
