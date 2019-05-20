var obj = { foo: 'bar', baz: 100 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 100] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
