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

// rest and spread
//用于声明任意数量的方法参数
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

function fnc(a,b){
    console.log(a)
    console.log(b)
}

var args1 = [1,2,3]
var args2 = [4]

fnc(...args1)
fnc(...args2)

// generator
// 控制函数的执行过程，手工暂停和恢复代码执行

function* doing(){
    console.log('start')
    yield
    console.log('end')
}
var fnd =doing()
fnd.next()
fnd.next()

// 析构表达式
function fnObj(){
    return {
        code:'code',
        type:'Obj',
        url: {
            url1:'www.baidu.com',
            url2:'www.chinabyte.com'
        }
    }
}
// var {code,type} = fnObj()
var {code,type:gettype,url:{url2}} = fnObj()
console.log(code) //code
console.log(gettype) //Obj
console.log(url2)  //www.chinabyte.com

var arr1 = [1,2,3,4,5,6]
var [num1,num2,,...others] = arr1
console.log(num1)  // 1
console.log(num2)  // 2
console.log(others)  //  Array(3)  4,5,6

function doing1([num1,num2,,...others]){
    console.log(num1)  // 1
    console.log(num2)  // 2
    console.log(others)  //  Array(3)  4,5,6
}
doing1(arr1)

// 箭头表达式
// 通过表达式将对象或数组拆解成任意
var arrArrow = [1, 2, 3, 4]
var fne = arrArrow.filter(num => num % 2 !== 0)
console.log(fne)

// for of 循环
var arr = [1, 2, 3, 4]
arr.des = 'a 4 num'
for ( var n in arr) {
    console.log(n)
}
for (var n1 in arr) {
    console.log(arr[n1])
}
for (var n2 of arr.des) {
    console.log(n2)
}
 
// class
class person{
    constructor(public name:string){
        this.name = name
        console.log('person')
    }
    // public name:string;
    public sayName(){
        console.log(this.name)
    }
}

var person1 = new person('yanghao')
// person1.name = 'yanghao'
person1.sayName()

//extends
class student  extends person {
    constructor(public name:string,public id:number){
        // super调父类的构造函数
        super(name)
        this.id = id
        console.log('student')
    }

    study(){
        super.sayName()
        this.studyEn()
    }

    private studyEn(){
        console.log('Engish')
    }
}

var stu = new student('yh',1321330063)
console.log(stu.id)
console.log(stu.name)
stu.sayName()
stu.study()
// stu.studyEn()  private为私有 可通过study()访问

//泛型
//指定数组放某一类的元素 
var stuArr :Array<person>
stuArr[0] = new person('yyhh')
stuArr[1] = new student('lyb',1321330043)


