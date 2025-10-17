let a: string // 使用:对变量或函数形参进行类型声明
let c: String // 在JavaScript中，Number、String、Boolean等用于创建对应的包装类型，在日常开发中很少使用。在TypeScript中也是同理，所以在TypeScript中进行类型声明时，不建议使用包装类型
a = '这里必须是字符串，否则编译报错'

let b = 99 // 没有使用:对变量b进行类型声明，TS会根据赋值自动推断类型。类型推断不是万能的，面对复杂类型时推断容易出问题，所以建议还是显式声明类型
b = 8 // 所以这里必须是数字，否则编译报错

//  数据类型never
function throwError(msg: string): never { // 限制函数不能有返回值
  throw new Error('程序异常退出：' + msg)
//   return 9 // 返回任何值都编译报错
}

// 数据类型void
function log(msg: string): void { // 限制函数返回值为void类型。不写return默认返回的就是undefined
  console.log(msg)
}

function log2(msg: string): void { // 限制函数返回值为void类型
  console.log(msg)
  return;
}

function log3(msg: string): void { // 限制函数返回值为void类型。可以显示返回undefined
  console.log(msg)
  return undefined;
}


let person: { // 定义person对象必须要有name属性，age属性可选，其他属性的键值对可以是任意字符串和任意类型
    name: string,
    age?: number
   [key: string]: any // 索引签名，除了要有明确规定的name和age属性外，还可以有其他任意的key(key也可以换成其它单词，如k、te、aer等，只要形式对了就可以)且是字符串类型、值为任意类型
}

person = {
  name: '张三',
  age: 18,
  sex: '男' // 上面没有索引签名，这里就会报错
}

// 元组，数组长度固定且数组元素的类型可以不同
let arr: [string, number, boolean] = ['张三', 18, true]

// 枚举-数字枚举
enum Color {
  Red,
  Green,
  Blue
}
console.log(Color.Red) // 0
console.log(Color.Green) // 1
console.log(Color.Blue) // 2
console.log(Color[0]) // Red
console.log(Color[1]) // Green
console.log(Color[2]) // Blue

// 枚举-字符串枚举
enum Color2 {
  Red = "red",
  Green = "green",
  Blue = "blue"
}
console.log(Color2.Red) // red
console.log(Color2.Green) // green
console.log(Color2.Blue) // blue

// 枚举-常量枚举
const enum Color3 {
  Red,
  Green,
  Blue
}
console.log(Color3.Red) // 0
console.log(Color3.Green) // 1
console.log(Color3.Blue) // 2

// 联合类型Status：该类型，只能是数字或字符串或布尔值
type Status = number | string | boolean
function getStatus(status: Status): void {
  console.log(status)
}
getStatus(100) // 100
getStatus('success') // success
getStatus(true) // true


// 交叉类型
type Area = {
    width: number,
    height: number
}

type Address =  {
    city: string,
    street: string
}

type House = Area & Address // 交叉类型House必须要有Area类型和Address类型中的所有属性
const house: House = {
    width: 100,
    height: 200,
    city: '北京',
    street: '东城区'
}
