// 参数类型
// 变量和方法 
var str:string = 'str'
var num:number = 18
var boolean:boolean = true
var any:any = '任何类型'

// 声明函数参数类型、返回值类型  
function v():void{
    // void不需要返回值
}
function fnstr(name:string):string{
    // name 参数为string类型
    // string 返回字符串类型
    return "string"
}

// 自定义类型
class yh {
    name: string
    age: number
}
var p1 = new yh
 p1.name = 'yanghao'
 p1.age = 18 

// 默认参数
function defaultpara(name:string,age:number = 13){
//num 不传值时默认为13,默认值的参数写在最后!important
console.log(name)
console.log(age)
}
defaultpara('yh')

// 可选参数
function opt(para,name?:'number'){
    // ...
    // 参数后面用?标明为可选参数
    // 可选参数，在必选参数后，同时要处理没有传值的情况
    console.log(name.length)
}

// 多行字符串
var a = `das
ffdd
dsf`;
// 字符串模版
var Name = 'yh';
var getAge = function():number{
    return 18
}
console.log(`${Name},${getAge()}`)
console.log(`<div>${Name}</div>`)
//自动拆分字符串
function tem(tem,name,age){
    console.log(tem)
}
tem`${Name},${getAge()}`

// reat and spread
function fna(...agrs) {
    var x =agrs.map(function (item) {
        return item+1
    })
    console.log(x) 
}
fna(1,2)
// Array(2) 2,3 

function fnb(...agrs) {
    agrs.forEach(function (x) {
        console.log(x+1)
    })
}
fnb(1,2)
// 2
// 3


