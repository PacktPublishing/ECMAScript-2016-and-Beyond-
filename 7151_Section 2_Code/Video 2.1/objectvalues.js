var obj = { foo: 'bar', baz: 100 };
console.log(Object.values(obj)); // ['bar', 100]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array like object with random key ordering
var an_obj = { 100: 'a', 20: 'b', 10: 'c' };
console.log(Object.values(an_obj)); // ['c', 'b', 'a']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']

















