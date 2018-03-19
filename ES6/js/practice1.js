// //let用来声明变量，声明的变量只在let作用的代码块内有效
// {
//   let a = 10;
//   console.log(a); // 10
// }
// console.log(a); // ReferenceError: a is not defined

// for (let i = 0; i < 10; i++) {
//   // ...
//   console.log(i); // 0 1 2 3 4 5 6 7 8 9
// }
// console.log(i);
// // ReferenceError: i is not defined


// var a = [];
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6](); // 10

// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   }
// }
// a[6](); // 6


// // 变量提升（变量可以在声明之前使用）
// // var 存在变量提升，let 不存在
// // var 声明的变量存在变量提升问题，在脚本开始运行之时，变量foo已经存在了，但是没有值。
// // let 声明的变量不存在变量提升问题，在声明变量之前是不存在的，如果用到，就会抛出错误。
// console.log(foo);
// var foo = 2; // undefined

// console.log(bar);
// let bar = 3; // ReferenceError: bar is not defined


// // 暂时性死区（在代码中，使用let命令声明变量之前，该变量都是不可用的，称为“暂时性死区”）
// // 存在全局变量tmp，块级作用域内又用let声明了一个tmp，导致后者绑定了这个块级作用域
// var tmp = "123";
// if (true) {
//   tmp = "abc";
//   let tmp;
// }

// // 不允许重复声明（let不允许在相同作用域内，重复声明同一个变量）
// // 报错
// function func() {
//   let a = 10;
//   var a = 1;
// }
// // 报错
// function func() {
//   let a = 10;
//   let a = 1;
// }
// //不能再函数内部重新声明参数
// function func(arg) {
//   let arg; // 报错
// }
// function func(arg) {
//   {
//     let arg; // 不报错
//   }
// }


// 块级作用域
// 外层代码块不受内层代码块的影响
function f1() {
	let n = 5;
	if (true) {
		let n = 10;
	}
	console.log(n); //5
}
f1();

// 块级作用域可以任意嵌套
//外层作用域无法读取到内层作用域里面的变量
{{{{
	{let say = "Hello"}
	console.log(say); // 报错
}}}}

// ES5规定，函数只能在顶级作用域和函数作用域之中声明，不能在块级作用域声明
// ES6允许块级作用域中声明函数
