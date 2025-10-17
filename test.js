"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a; // 使用:对变量或函数形参进行类型声明
let c; // 在JavaScript中，Number、String、Boolean等用于创建对应的包装类型，在日常开发中很少使用。在TypeScript中也是同理，所以在TypeScript中进行类型声明时，不建议使用包装类型
a = '这里必须是字符串，否则编译报错';
let b = 99; // 没有使用:对变量b进行类型声明，TS会根据赋值自动推断类型。类型推断不是万能的，面对复杂类型时推断容易出问题，所以建议还是显式声明类型
b = 8; // 所以这里必须是数字，否则编译报错
//  数据类型never
function throwError(msg) {
    throw new Error('程序异常退出：' + msg);
    //   return 9 // 返回任何值都编译报错
}
// 数据类型void
function log(msg) {
    console.log(msg);
}
function log2(msg) {
    console.log(msg);
    return;
}
function log3(msg) {
    console.log(msg);
    return undefined;
}
let person;
person = {
    name: '张三',
    age: 18,
    sex: '男' // 上面没有索引签名，这里就会报错
};
// 元组，数组长度固定且数组元素的类型可以不同
let arr = ['张三', 18, true];
// 枚举-数字枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); // 0
console.log(Color.Green); // 1
console.log(Color.Blue); // 2
console.log(Color[0]); // Red
console.log(Color[1]); // Green
console.log(Color[2]); // Blue
// 枚举-字符串枚举
var Color2;
(function (Color2) {
    Color2["Red"] = "red";
    Color2["Green"] = "green";
    Color2["Blue"] = "blue";
})(Color2 || (Color2 = {}));
console.log(Color2.Red); // red
console.log(Color2.Green); // green
console.log(Color2.Blue); // blue
// 枚举-常量枚举
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 0] = "Red";
    Color3[Color3["Green"] = 1] = "Green";
    Color3[Color3["Blue"] = 2] = "Blue";
})(Color3 || (Color3 = {}));
console.log(Color3.Red); // 0
console.log(Color3.Green); // 1
console.log(Color3.Blue); // 2
function getStatus(status) {
    console.log(status);
}
getStatus(100); // 100
getStatus('success'); // success
getStatus(true); // true
const house = {
    width: 100,
    height: 200,
    city: '北京',
    street: '东城区'
};
//# sourceMappingURL=test.js.map