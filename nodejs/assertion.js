const assert = require('assert');

assert(true);
assert(1);
// assert(false);
// assert(0);
// assert(false, 'it\'s false');

const obj1 = {
  a: {
    b: 1,
  },
};
const obj2 = {
  a: {
    b: 2,
  },
};
const obj3 = {
  a: {
    b: 1,
  },
};
const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
// assert.deepEqual(obj1, obj2);
assert.deepEqual(obj1, obj3);
// assert.deepEqual(obj1, obj4);


// assert.deepStrictEqual({ a: 1 }, { a: '1' });


