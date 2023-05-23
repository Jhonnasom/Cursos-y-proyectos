const numbers = [100, 20, 310, 40, 50];
function createPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, num);
  });
}
Promise.race(numbers.map(createPromise))
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error(e);
  });
