//for
for (let i = 0; i < 0; i++) {}

//
///
//forEach(Array 전용)  function(value, index, array)
[1, 2, 3].forEach(function () {});
//
///
//for in(Object 전용)  enumerable한 것만 반복 -셀 수 있는

class 부모 {}
부모.prototype.name = "Park";

var obj = new 부모();
//Object.getOwnPropertyDescriptor(obj, "name");

for (const key in obj) {
  //작명-반복할 Obj(저장된 갯수만큼 반복)
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  }
}
//
///-Array,문자,arguments,NodeList,Map,set
//for of(iterable 전용)
var 어레이 = [2, 3, 4, 5];

for (var 자료 of 어레이) {
  console.log(자료);
}

어레이[Symbol.iterator]();
