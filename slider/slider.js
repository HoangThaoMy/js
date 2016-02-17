var position = 0;
var image_list = ["img/hanoi.jpg", "img/halong.jpg", "img/hue.jpg", "img/danang.jpg", "img/hoian.jpg", "img/nhatrang.gif", "img/dalat.jpg", "img/saigon.jpg", "img/phuquoc.jpg"];
var image = image_list[position];

init();

function buildImage(img) {
	document.write("<div>");
	document.write("<img id='img' src='" + img + "' alt='" + img + "'>");
	document.write("</div>");
}

function buildPrevious() {
	document.write("<div>");
	document.write("<img src='img/pre.png' alt='previous' class='next_pre' id='pre' onclick='getPrevious();' ");
	document.write("</div>");
}

function buildNext() {
	document.write("<div>");
	document.write("<img src='img/next.png' alt='previous' class='next_pre' id='next' onclick='getNext();'> ");
	document.write("</div>");
}

function buidIndexItem() {
	document.write("<div id='index'>");
	for (var i = 0; i < image_list.length; i++) {
		document.write("<div class='item' id='item" + i + "' onclick='onclickItem(" + i + ");'></div>");
		document.getElementById("item" + i).style.background = "#b3b3ff";
		document.getElementById("item" + 0).style.background = "#3333ff";
	};
	document.write("</div>");
}
 
function getPrevious() {
	document.getElementById("item" + position).style.background = "#b3b3ff";
	position--;
	if(position < 0) {
		position = image_list.length - 1;
	}
	document.getElementById("item" + position).style.background = "#3333ff"	;
	image = image_list[position];
	document.getElementById("img").src = image;
	document.getElementById("img").alt = image;
}

function getNext() {
	document.getElementById("item" + position).style.background = "#b3b3ff";
	position++;
	if(position > 8) {
		position = 0;
	}
	document.getElementById("item" + position).style.background = "#3333ff"	;
	image = image_list[position];
	document.getElementById("img").src = image;
	document.getElementById("img").alt = image;
}

function onclickItem(current_position) {
	position = current_position;
	document.getElementById("item" + position).style.background = "#3333ff";	
	for(var i = 0; i < image_list.length; i++) {
		if(i != current_position) {
				document.getElementById("item" + i).style.background = "#b3b3ff";
		}
	}
	image = image_list[position];
	document.getElementById("img").src = image;
	document.getElementById("img").alt = image;
}

function init() {
	document.write("<div class='slider'>");
	buildImage(image);
	buildPrevious();
	buildNext();
	buidIndexItem();
	document.write("</div>");
}

setInterval(getNext, 5000);