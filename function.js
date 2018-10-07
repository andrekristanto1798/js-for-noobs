/**
 * This is a bad function
 * Why? Limited to 3 arguments only
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 */
function badAddFn(a, b, c) {
  return a + b + c;
}

/**
 * This is a good function
 * Why? Because goodAddFn can retrieve many arguments not limited to 3 arguments
 * like `badAddFn`
 * @param  {...Number} args
 */
function goodAddFn(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

const x = badAddFn(1, 2, 3); // 6
console.log({ x });

const sum = goodAddFn(1, 5, 6, 7, 12); // 31
console.log({ sum });
