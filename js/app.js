// <!--
// ======================================================================
// Project Name    : Lab2 - JS
// Fiel Name       : app.js
// Encoding        : UTF-8
// Due Date   : February 23
//
// Copyright © 2018 Kenta Kodashima. All rights reserved.
//
// This source code or any portion thereof must not be
// reproduced or used in any manner whatsoever.
// ======================================================================
// -->

// Question 1
function rotateLeft3(arr) {
	var firstNumber = arr.splice(0, 1);
	return arr.concat(firstNumber);
}

var test1 = [1,2,3];
var test2 = [5,11,9];
document.write("<h1>Question 1</h1>");
document.write(rotateLeft3(test1));
document.write("<br />");
document.write(rotateLeft3(test2));

// Question 2
function reverse3(arr) {
	return arr.reverse();
}

var test3 = [1,2,3];
var test4 = [5,11,9];
document.write("<h1>Question 2</h1>");
document.write(reverse3(test3));
document.write("<br />");
document.write(reverse3(test4));

// Question 3
function has23(arr) {
	if (arr.includes(2) || arr.includes(3)) {
		return true;
	} else {
		return false;
	}
}

var test5 = [2,5];
var test6 = [4,3];
var test7 = [4,5];
document.write("<h1>Question 3</h1>");
document.write(has23(test5));
document.write("<br />");
document.write(has23(test6));
document.write("<br />");
document.write(has23(test7));

//Question 4
function fix23(arr) {
	if (arr[0] == 2 && arr[1] == 3) {
		arr[1] = 0;
		return arr;
	} else if (arr[1] == 2 && arr[2] == 3) {
		arr[2] = 0;
		return arr;
	} else if (arr.length > 3) {
		return "The array must be the length of 3.";
	} else {
		return arr;
	}
}

var test8 = [1,2,3];
var test9 = [2,3,5];
var test10 = [1,2,1];
document.write("<h1>Question 4</h1>");
document.write(fix23(test8));
document.write("<br />");
document.write(fix23(test9));
document.write("<br />");
document.write(fix23(test10));

// Function 5
function maxTriple(arr) {
	var sortedArr = arr.sort();
	if (arr.length % 2 == 0) {
		return "The length of the array must be an odd length.";
	}
	return sortedArr[arr.length-1];
}

var test11 = [1,2,3];
var test12 = [1,5,3];
var test13 = [5,2,3];
document.write("<h1>Question 5</h1>");
document.write(maxTriple(test11));
document.write("<br />");
document.write(maxTriple(test12));
document.write("<br />");
document.write(maxTriple(test13));

// Question 6
function swapEnds(arr) {
	var temp = 0;
	temp = arr[0];
	arr[0] = arr[arr.length-1];
	arr[arr.length-1] = temp;
	return arr;
}

var test14 = [1,2,3,4];
var test15 = [1,2,3];
var test16 = [8,6,7,9,5];
document.write("<h1>Question 6</h1>");
document.write(swapEnds(test14));
document.write("<br />");
document.write(swapEnds(test15));
document.write("<br />");
document.write(swapEnds(test16));

// Question 7
function unlucky(arr) {
	if (arr[0] == 1 && arr[1] == 3) {
		return true;
	} else if (arr[1] == 1 && arr[2] == 3) {
		return true;
	} else if (arr[arr.length-2] == 1 && arr[arr.length-1] == 3) {
		return true;
	} else {
		return false;
	}
}

var test17 = [1,3,4,5];
var test18 = [2,1,3,4,5];
var test19 = [1,1,1];
document.write("<h1>Question 7</h1>");
document.write(unlucky(test17));
document.write("<br />");
document.write(unlucky(test18));
document.write("<br />");
document.write(unlucky(test19));

// Question 8
function front11(a, b) {
	var firstOfA = a.splice(0, 1);
	var firstOfB = b.splice(0, 1);
	return firstOfA.concat(firstOfB);
}

document.write("<h1>Question 8</h1>");
document.write("[1,2,3] and [7,9,8] are: " + front11([1,2,3],[7,9,8]));
document.write("<br />");
document.write("[1] and [2] are " + front11([1],[2]));
document.write("<br />");
document.write("[1,7] and [] are " + front11([1,7],[]));

//Question 9
function isEverywhare(arr, num) {
	for (i = 0; i < arr.length - 1; i++) {
		if (arr[i] != num && arr[i+1] != num) {
			return false;
		}
	}
	return true;
}

document.write("<h1>Question 9</h1>");
document.write("[1,2,1,3], 1 is: " + isEverywhare([1, 2, 1, 3], 1));
document.write("<br />");
document.write("[1,2,1,3], 2 is: " + isEverywhare([1, 2, 1, 3], 2));
document.write("<br />");
document.write("[1,2,1,3,4], 1 is: " + isEverywhare([1, 2, 1, 3, 4], 1));

// Question 10
function tenRun(arr) {
	var temp = -1;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 10 == 0) {
			temp = arr[i];
		} else if (temp != -1) {
			arr[i] = temp;
		}
	}
	return arr;
}

document.write("<h1>Question 10</h1>");
document.write("[2, 10, 3, 4, 20, 5]: " + tenRun([2, 10, 3, 4, 20, 5]));
document.write("<br />");
document.write("[10, 1, 9, 20]: " + tenRun([10, 1, 9, 20]));


// Question 11
function twoTwo(arr) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == 2 && arr[i+1] != 2 && arr[i-1] != 2) {
			return false;
		}
	}
	return true;
}
document.write("<h1>Question 11</h1>");
document.write("[4, 2, 2, 3]: " + twoTwo([4, 2, 2, 3]));
document.write("<br />");
document.write("[2, 2, 4, 2]: " + twoTwo([2, 2, 4, 2]));

// Question 12
function shiftLeft(arr) {
	var firstNum = arr.splice(0, 1);
	arr.push(firstNum);
	return arr;
}

document.write("<h1>Question 12</h1>");
document.write("[6, 2, 5, 3]: " + shiftLeft([6, 2, 5, 3]));
document.write("<br />");
document.write("[1]: " + shiftLeft([1]));

//Question 13
function evenOdd(arr) {
	var evenArr = [];
	var oddArr = [];
	var newArr = [];
	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
		  evenArr.push(arr[i]);
		} else if (arr[i] % 2 != 0) {
			oddArr.push(arr[i]);
		}
	}
	evenArr.push(oddArr);
	newArr.push(evenArr);
	return newArr;
}

document.write("<h1>Question 13</h1>");
document.write("[1, 0, 1, 0, 0, 1, 1]: " + evenOdd([1, 0, 1, 0, 0, 1, 1]));
document.write("<br />");
document.write("[3, 3, 2]: " + evenOdd([3, 3, 2]));
document.write("<br />");
document.write("[2, 2, 2]: " + evenOdd([2, 2, 2]));

//Question 14
function fizzBuzz(num1, num2) {
	var arr = [];
	for (var i = num1; i < num2; i++) {
		if (i % 15 == 0) {
			arr.push("FizzBuzz");
		} else if (i % 5 == 0) {
			arr.push("Buzz");
		} else if (i % 3 == 0) {
			arr.push("Fizz");
		} else {
			arr.push("" + i);
		}
	}
	return arr;
}

document.write("<h1>Question 14</h1>");
document.write("[1, 6]: " + fizzBuzz(1, 6));
document.write("<br />");
document.write("[1, 11]: " + fizzBuzz(1, 11));
document.write("<br />");
document.write("[1, 20]: " + fizzBuzz(1, 20));

// Question 15
function countClumps(arr) {
	var counter = 0;
	var isClump = false;
	for (i = 0; i < arr.length - 1; i++) {
		if (arr[i] != arr[i+1]) {
			isClump = false;
		} else if (arr[i] == arr[i+1] && arr[i] != arr[i+2]) {
			isClump = true;
			counter++;
		}
	}
	return counter;
}

document.write("<h1>Question 15</h1>");
document.write("[1, 2, 2, 3, 4, 4]: " + countClumps([1, 2, 2, 3, 4, 4]));
document.write("<br />");
document.write("[1, 1, 2, 1, 1]: " + countClumps([1, 1, 2, 1, 1]));
document.write("<br />");
document.write("[1, 1, 1, 1, 1]: " + countClumps([1, 1, 1, 1, 1]));
