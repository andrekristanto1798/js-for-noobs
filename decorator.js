function debounce(fn, timeout) {
  let _instance = null;
  return (...args) => {
    const callFn = () => {
      var res = fn(...args);
      return res;
    };
    if (_instance) clearTimeout(_instance);
    _instance = setTimeout(callFn, timeout);
  };
}

function logCurrentTime(...args) {
  console.log(new Date().toString(), ...args);
}

function logNumber(x) {
  logCurrentTime(x, 'This is the real one');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const logNumberDebounced = debounce(logNumber, 3000);
let counter = 1;
setInterval(async () => {
  logCurrentTime(counter);
  if (counter < 5) {
    counter += 1;
    logNumberDebounced(5);
    await sleep(1000);
  }
}, 1000);
