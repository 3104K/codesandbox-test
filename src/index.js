/**
 * const,letの変数宣言
 */

// オブジェクトのプロパティはconstでも変更可能
const val = {
  name: "佐藤",
  age: 30
};

console.log(val);

val.name = "筒香";
val.age = "29";
val.address = "xxx@aa.com";

console.log(val);
