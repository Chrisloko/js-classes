
[,,,,,4]

let obj = {
  a : 2,
  b: 1,
  c: [35, 34, 66]
}

let localA = obj.a;

let { c } = obj;
console.log(c);

let { a: d } = obj;

console.log(d);
