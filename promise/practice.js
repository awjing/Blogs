'use strict';
//例1: 生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败：
// function test(resolve,reject){
//     var timeOut = Math.random()*2;
//     setTimeout(function () {
//         if (timeOut < 1) {
//             resolve('200 OK');
//         }
//         else {
//             reject('timeout in ' + timeOut + ' seconds.');
//         }
//     }, timeOut * 1000);
// }
// new Promise(test).then(function (result) {
//     console.log('成功：' + result);
// }).catch(function (reason) {
//     console.log('失败：' + reason);
// });

//Promise在异步执行的流程中，把执行代码和处理结果的代码进行了分离
//例2: Promise可以实现有若干个任务，先做任务1，成功之后做任务二，失败直接执行错误处理函数

//0.5s后返回input*input的计算结果
function multiply(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' x ' + input + '...');
        setTimeout(resolve, 500, input * input);
    })
}

//0.5s后返回input+input的计算结果
function add(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' + ' + input + '...');
        setTimeout(resolve, 500, input+input)
    })
}

var p1 = new Promise(function (resolve,reject) {
    resolve(123);
})

p1.then(multiply)
    .then(add)
    .then(multiply)
    .then(add)
    .then(function (result) {
    console.log('Got value: ' + result);
})





// let myFirstPromise = new Promise(function(resolve, reject){
//     //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
//     //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
//     setTimeout(function(){
//         resolve("成功!"); //代码正常执行！
//     }, 250);
// });

// myFirstPromise.then(function(successMessage){
//     //successMessage的值是上面调用resolve(...)方法传入的值.
//     //successMessage参数不一定非要是字符串类型，这里只是举个例子
//     console.log("Yay! " + successMessage);
// });