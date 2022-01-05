// /**
//  * const,letの変数宣言
//  */

// // オブジェクトのプロパティはconstでも変更可能
// const val = {
//   name: "佐藤",
//   age: 30
// };

// console.log(val);

// val.name = "筒香";
// val.age = "29";
// val.address = "xxx@aa.com";

// console.log(val);

/**
 * テンプレート文字列
 */

// const name = "櫻井翔";
// const age = 44;

// //  従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数

// **********方法１**********
// function func1(str) {
//   return str;
// }
// **********方法２**********
const func1 = function (str) {
  return str;
};
console.log(func1("テストです"));

// アロー関数
// **********方法１**********
// const func2 = (str) => {
//   return str;
// };
// **********方法2**********
// 一行での場合は省略可能(Javaと同じ)
const func2 = (str) => str;

// アロー関数とfunctionでthisの扱いが異なる点は注意が必要

console.log(func2("テスト２です"));

/**
 * 分割代入
 * よく使うもの
 */
const myProfile = {
  name: "さとし",
  age: 28
};

//　 普通(オブジェクト)
// いちいちドットを入れるのがめんどくさい、可読性が悪い
const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);

// 分割代(オブジェクト)
// 定数として定義されるのでスッキリ
const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

// 普通（配列）
const myProfile2 = ["satoshi", 28];
const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
console.log(message3);

// 順番が大事
const [name2, age2] = myProfile2;
const message4 = `名前は${name2}です。年齢は${age2}歳です。`;
console.log(message4);
