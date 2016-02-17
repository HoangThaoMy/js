var list_image;
var image_item;
var pre;
var next;
var img_number;
var current_possition = 0;
var current_image = 0;

function init {
	list_image = document.getElementById("slider");
	image_item = list_image.children;
	img_number = image_item.length;
	pre = document.getElementById("previous");
	next = document.getElementById("next");
	

}