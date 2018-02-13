// <!--
// ======================================================================
// Project Name    : Lab3 - JS
// Fiel Name       : Lab3.html
// Encoding        : UTF-8
// Due Date   : February 13
//
// Copyright © 2018 Kenta Kodashima. All rights reserved.
//
// This source code or any portion thereof must not be
// reproduced or used in any manner whatsoever.
// ======================================================================
// -->

// Question 1:a
var arr = ['dog', 'cat', 'deer'];
var result = arr[0]+arr[2];

document.write("<h1>Question 1. a</h1>")
document.write(result)

// Question 1:b
var girls = ["Cecilie", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];
var children = girls.concat(boys);

document.write("<h1>Question 1. b</h1>")
document.write(children)

// Question 1:c
var arr = [ 20, 30 ];
for (var i = arr.length; i < 5; i += 1) {
	arr[i] = Math.pow(i,2);
}

document.write("<h1>Question 1. c</h1>")
document.write(arr)

// Question 1:d
var arr = [ 10, 20, 30, 40, 50, 60, 70, 90];
var sum = 0;
for (var i = 1; i < 7; i += 1) {
	sum = sum + arr[i];
}

var sum2 = 0;
for (var i = 0; i < arr.length; i += 1) {
	sum2 = sum2 + arr[i];
}

document.write("<h1>Question 1. d</h1>")
document.write("Sum's value right after the loop is: " + sum + "<br/>")
document.write("Sum's value after the adjustment is: " + sum2)

// Question 1:e
var DL = 5;
var d = [25.0, 9.0, 10.0, 25.0, 15.0];
var mi = 0;
var m = d[mi];
for (var i = 1; i < DL; i++) {
	if (d[i] < m) {
		mi = i;
		m = d[mi];
		console.log(m);
	}
}
console.log("mi = ",mi, "m = " ,m);

document.write("<h1>Question 1. e</h1>")
document.write("mi = ",mi, "<br />m = " ,m)

// Question 2
function sumArray(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i += 1) {
		sum = sum + arr[i];
	}
	return sum
}
// variable for testing purpose
var columnF = [15, 20, 25, 30, 35];
document.write("<h1>Question 2.</h1>")
document.write(sumArray(columnF))

// Question3
// Definition for canvases
var panels = [];
window.onload = function() {
		var arr = ['', '1', '2', '3', '4', '5', '6', '7', '8'];

    var board = document.getElementById('board');

    // Make <div> and push into the board
    for (i = 0; i < 9; i++){
      var div = document.createElement('div');
      div.className = 'panel';
      div.index = i;
      div.textContent = arr[i];
      div.onclick = movePanels;
			//div.onmouseover = changeColor;
			//div.onmouseover = changeColor0;
			div.onmouseout = changeBackColor;
      board.appendChild(div);
			if (div.textContent == '') {
				div.style.backgroundColor = '#4fa871';
			} else {
				div.style.backgroundColor = '#996f1e';
			}
      panels.push(div);
		}
		// Adding different functions to change colors onmouseover
		panels[0].onmouseover = changeColor0;
		panels[1].onmouseover = changeColor1;
		panels[2].onmouseover = changeColor2;
		panels[3].onmouseover = changeColor3;
		panels[4].onmouseover = changeColor4;
		panels[5].onmouseover = changeColor5;
		panels[6].onmouseover = changeColor6;
		panels[7].onmouseover = changeColor7;
		panels[8].onmouseover = changeColor8;
}

// Function called on clicks
function swapArray(i, e) {
	// i = i
	// e = i (+ | -) (3 | 1)
	var temp = panels[i].textContent;
	//console.log(temp); // = 0
	panels[i].textContent = panels[e].textContent;
	//console.log(temp); // = 1
	panels[e].textContent = temp;
	//console.log(temp); // = 1

	var div = document.getElementsByClassName('panel');
	if (div[i].textContent == '') {
		div[i].style.backgroundColor = '#4fa871';
		counter();
		endTimer();
	}
	if (div[e].textContent != '') {
		div[e].style.backgroundColor = '#996f1e';
	}
}

// Condition to move a panel
function movePanels(e) {
  var i = e.target.index;

  if (i <= 5 && panels[i + 3].textContent == '' ){
    // swap with down panel
    swapArray(i, i + 3);
  } else if ( i >= 3 && panels[i - 3].textContent == ''){
    // swap with the panel above
    swapArray(i, i - 3);
  } else if (i % 3 !== 2 && panels[i + 1].textContent == ''){
    // swap with right panel
    swapArray(i, i + 1);
  } else if (i % 3 !== 0 && panels[i - 1].textContent == ''){
    // swap with left panel
    swapArray(i, i - 1);
  }
}

// Moves counter
var moves = 1;
function counter() {
	var counter = document.getElementById('counter');
	counter.innerHTML = "Moves: " + moves++;
}

// Shuffle the array
function shuffleArray(arr) {

	var n = arr.length;
	var temp;
	var i;
	var findEmpty = false;
	var findNotEmpty = false;

	while (n) {
		i = Math.floor(Math.random() * n--);
		temp = arr[n].textContent;
		arr[n].textContent = arr[i].textContent;
		arr[i].textContent = temp;
	}

	// Change the background color depends on the text inside
	for (var item in arr) {
		if(arr[item].textContent == '') {
			arr[item].style.backgroundColor = '#4fa871';
		}
		if(arr[item].textContent != '') {
			arr[item].style.backgroundColor = '#996f1e';
		}
	}
	return arr;
}

// Time counters
var startTime, endTime;
function startTimer() {
	var startDate = new Date();
	var startHours = startDate.getHours();
	var startMinutes = startDate.getMinutes();
	var startSeconds = startDate.getSeconds();
	var startTimer = document.getElementById('startTimer');
	startTimer.innerHTML = "Start time: " + startHours + ":" + startMinutes + ":" + startSeconds;
}

function endTimer() {
	var endDate = new Date();
	var endHours = endDate.getHours();
	var endMinutes = endDate.getMinutes();
	var endSeconds = endDate.getSeconds();
	var endTimer = document.getElementById('endTimer');
	if (panels[0].textContent == '' &&
			panels[1].textContent == '1' &&
			panels[2].textContent == '2' &&
			panels[3].textContent == '3' &&
			panels[4].textContent == '4' &&
			panels[5].textContent == '5' &&
			panels[6].textContent == '6' &&
			panels[7].textContent == '7' &&
			panels[8].textContent == '8') {
				endTimer.innerHTML = "End time: " + endHours + ":" + endMinutes + ":" + endSeconds;
	}
}

//Reset Button
function reset() {
	// reset counter
	var counterContent = document.getElementById('counter');
	counterContent.innerHTML = "Counting your moves...";
	moves = 1;

	// start timer again
	startTimer();

	// random Shuffle
	shuffleArray(panels);

	// reset endTimer
	var endTimer = document.getElementById('endTimer');
	endTimer.innerHTML = "";
}

// Changing colors depends on array index's condition
function changeColor0() {
	if (panels[0].textContent == '') {
		return
	} else if (panels[1].textContent == '' || panels[3].textContent == '') {
		panels[0].style.backgroundColor = '#48DD00';
	} else {
		panels[0].style.backgroundColor = '#FF0000';
	}
}

function changeColor1() {
	if (panels[1].textContent == '') {
		return
	} else if (panels[0].textContent == '' ||
						 panels[2].textContent == '' ||
						 panels[4].textContent == '') {
		panels[1].style.backgroundColor = '#48DD00';
	} else {
		panels[1].style.backgroundColor = '#FF0000';
	}
}

function changeColor2() {
	if (panels[2].textContent == '') {
		return
	} else if (panels[1].textContent == '' ||
						 panels[5].textContent == '') {
		panels[2].style.backgroundColor = '#48DD00';
	} else {
		panels[2].style.backgroundColor = '#FF0000';
	}
}

function changeColor3() {
	if (panels[3].textContent == '') {
		return
	} else if (panels[0].textContent == '' ||
						 panels[4].textContent == '' ||
						 panels[6].textContent == '') {
		panels[3].style.backgroundColor = '#48DD00';
	} else {
		panels[3].style.backgroundColor = '#FF0000';
	}
}

function changeColor4() {
	if (panels[4].textContent == '') {
		return
	} else if (panels[1].textContent == '' ||
						 panels[3].textContent == '' ||
						 panels[5].textContent == '' ||
						 panels[7].textContent == '') {
		panels[4].style.backgroundColor = '#48DD00';
	} else {
		panels[4].style.backgroundColor = '#FF0000';
	}
}

function changeColor5() {
	if (panels[5].textContent == '') {
		return
	} else if (panels[2].textContent == '' ||
						 panels[4].textContent == '' ||
						 panels[8].textContent == '') {
		panels[5].style.backgroundColor = '#48DD00';
	} else {
		panels[5].style.backgroundColor = '#FF0000';
	}
}

function changeColor6() {
	if (panels[6].textContent == '') {
		return
	} else if (panels[3].textContent == '' ||
						 panels[7].textContent == '') {
	  panels[6].style.backgroundColor = '#48DD00';
	} else {
		panels[6].style.backgroundColor = '#FF0000';
	}
}

function changeColor7() {
	if (panels[7].textContent == '') {
		return
	} else if (panels[4].textContent == '' ||
						 panels[6].textContent == '' ||
						 panels[8].textContent == '') {
		panels[7].style.backgroundColor = '#48DD00';
	} else {
		panels[7].style.backgroundColor = '#FF0000';
	}
}

function changeColor8() {
	if (panels[8].textContent == '') {
		return
	} else if (panels[5].textContent == '' ||
						 panels[7].textContent == '') {
		panels[8].style.backgroundColor = '#48DD00';
	} else {
		panels[8].style.backgroundColor = '#FF0000';
	}
}

function changeBackColor() {
	for (var item in panels) {
		if(panels[item].textContent == '') {
			panels[item].style.backgroundColor = '#4fa871';
		}
		if(panels[item].textContent != '') {
			panels[item].style.backgroundColor = '#996f1e';
		}
	}
}
