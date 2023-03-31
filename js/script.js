'use strict';

// 1
let arr = ['a', 'b', 'c', 'd'];
console.log(arr.slice(0, 2).join(' + '),',', arr.slice(2, 4).join(' + '));

// 2
let arr2 = [2, 5, 3, 9];
console.log(arr2.reduce((acc, item, index, array) => {
    if (array[index + 1] !== undefined){
        acc += item * array[index + 1];
    }
    return acc;
}, 0));

// 3
let arr3 = [[1,2,3], [4,5,6], [7,8,9]];
let subArray = arr3.find(item => item.includes(4));
let num = subArray.find(item => item === 4);
console.log(num);

// 4
let obj = {
    js:['jQuery','Angular'],
    php: 'hello',
    css: 'world'
}
console.log(obj.js[0]);

// 5
let arr4 = new Array(10).fill().map((_, i) => 'x'.repeat(i+1))
console.log(arr4);

// 6
let arr5 = new Array(10).fill().map((_, i) => `${i+1}`.repeat(i + 1));
console.log(arr5);

// 7
const arrayFill = function (item, length) {
    return new Array(length).fill(item);
}
console.log(arrayFill('s', 6));

// 8
let arr6 = [1,3,3,4,5,6];
let index = 0;
arr6.reduce((acc, item, i) => {
    acc += item;
    if (acc >= 10 && index === 0){
        index = i;
    }
    return acc;
}, 0); 
console.log(index + 1);

// 9
let arr7 = [1,2,3,4,5];
let arr7Reversed = [];
for (let i = arr7.length - 1; i >= 0; i--){
    arr7Reversed.push(arr7[i]);
}
console.log(arr7Reversed);

// 10
let arr8 = [[1, 2, 3], [4, 5], [6]];
let sum = arr8.reduce((acc, arr) => acc.concat(arr), []).reduce((acc, arr) => acc + arr, 0);
console.log(sum);

// 11
let arr9 =  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum9 = arr9.reduce((acc, arr) => acc.concat(arr), []).reduce((acc, arr) => acc.concat(arr), []).reduce((acc, arr) => acc + arr, 0);
console.log(sum9);