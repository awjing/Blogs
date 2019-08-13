###push
向数组的末尾增加一项，返回值是数组的新长度
- **语法**
arr.push(item1，item2...)
- **参数**
添加到数组的元素
- **返回值**
返回数组的新长度
```javascript
var arr = [2,5,6,9,7,8,5];
var arr1 = arr.push(1);
console.log(arr1);  //8 （返回数组长度）
console.log(arr);   //2,5,6,9,7,8,5,1
```
###unshift
向数组的开头增加一项，返回值是数组的新长度
- **语法**
arr.unshift(item1，item2...)
- **参数**
添加到数组的元素
- **返回值**
返回数组的新长度
```javascript
var arr = [2,5,6,9,7,8,5];
var arr2 = arr.unshift(1);
console.log(arr2);  //8 （返回数组长度）
console.log(arr);   //1,2,5,6,9,7,8,5
```
###pop
删除数组的末尾项 返回值是删除的数组项
- **语法**
arr.pop()
- **返回值**
返回数组最后一项（删除项）
```javascript
var arr = [2,5,6,9,7,8,5];
var arr3 = arr.pop();
console.log(arr3);  //5 (返回被删除的项)
console.log(arr);   //2,5,6,9,7,8
```
###shift
删除数组的开头项 返回被删除的开头项
- **语法**
arr.shift()
- **返回值**
返回数组第一项（被移除的项）
```javascript
var arr = [2,5,6,9,7,8,5];
var arr4 = arr.shift();
console.log(arr4);  //2 (返回被删除的项)
console.log(arr);   //5,6,9,7,8,5
```
###splice
用于插入、删除或替换数组的元素
``会改变原有数组``
- **语法**
arr.splice(index，howmany，item1，item2...)
- **参数**
1.index：	必需。规定从何处添加或者删除元素。是开始删除或者插入的元素的下标，必须为数字。
2.howmany：必需。**代表删除多少元素。**如果未写，代表删除从index到最后一位。
3.item1，item2...：表示要添加到数组的元素。
- **返回值**
返回被删除的项
```javascript
var arr = [2,5,6,9,7,8,5];
var arr5 = arr.splice(2,3,5,6);  //（从下标为2开始删除三项，并插入5,6两项）
console.log(arr5);  // 6,9,7 (返回被删除的项 6,9,7)
console.log(arr);   // 2,5,5,6,8,5
```
###slice
可从已有的数组中返回选定的元素
``不会改变原有数组``
- **语法**
arr.slice(start，end)
- **参数**
``前闭后开区间``
1.start：	必需。选取的开始位置下标，如果为负数，则从后面开始选取。-1指最后一项，-2指倒数第二项。
2.end：	可选。结束的位置下标。如果未选，代表返回从start到最后一个。
- **返回值**
返回数组的新长度
```javascript
var arr = [2,5,6,9,7,8,5];
var arr6 = arr.slice(2,5);
console.log(arr6);  //6,9,7
console.log(arr);   //2,5,6,9,7,8,5
```