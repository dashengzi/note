/* 
  parseInt([value]):先把[value]转换为字符串，再从字符串左侧开始查找所有的有效数字字符（遇到一个非有效数字字符则结束查找，不论后面是否还有）
*/


//  如果一个数字以零开始，浏览器会默认为其是八进制，但是浏览器也会直接把八进制转换为10进制
console.log(parseInt(0123));//83
// parseInt(0123,8)->parseInt(Number(0123).toString(), 8) -> parseInt('83', 8)
console.log(parseInt(0123,8));//会先隐式转换为8进制，toString后变成'83',8不是8进制的有效数字，所以答案是NaN
