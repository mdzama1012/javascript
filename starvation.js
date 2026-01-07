// This callback starves in task/callback queue.
setTimeout(() => console.log("Finally, I get some thread to eat!"), 0);

Promise.resolve()
  .then(() => {
    console.log("A");
    return Promise.resolve();
  })
  .then(() => {
    console.log("B");
    return Promise.resolve();
  })
  .then(() => {
    console.log("C");
    return Promise.resolve();
  })
  .then(() => {
    console.log("D");
    return Promise.resolve();
  });
