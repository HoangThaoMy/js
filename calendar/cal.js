var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var datenow = new Date();
var year = datenow.getFullYear();
var month = datenow.getMonth();
var date = datenow.getDate();
var check = true;
datenow = null;

//Creating a clendar's frame
function drawCalendar() {
	buildInputAndPic();
	document.write("<div id='cal'>");
	document.write("<table id='calendar' style='border:1px solid #1515FF; text-align:center; background-color:#D9D9FF;'>");
	document.write("<tr style='border:1px solid #1515FF; border-size: 0px; height:3px; background-color:#3737FF;' class='header'>");
	document.write("<td style='border:1px solid #1515FF; border-size: 0px; width:58px;'><button style='background-color:#6464FF;' onclick='preYear();'>&lt;&lt;</button></td>");
	document.write("<td style='border: 1px solid #1515FF; border-size:0px; width:58px;'><button style='background-color:#6464FF;' onclick='preMonth();'>&lt;</button></td>");
	buildMonth();
	buildYear();
	document.write("<td style='border:1px solid #1515FF; border-size:0px; width:58px;'><button style ='background-color:#6464FF;' onclick='nextMonth();'>&gt;</button></td>");
	document.write("<td style='border:1px solid #1515FF; border-size:0px; width:58px;'><button style='background-color: #6464FF;' onclick='nextYear();'>&gt; &gt;</button></td>");
	document.write("</tr>");
	buildDay();
	setCalendar();
	document.write("</table>");
	document.write("</div>");
}

//Buiding textbox to display a date
function buildInputAndPic() {
	document.write("<div id='inputAndPic'>");
	document.write("<input type='text' class='input' id='input' style='height:26px; margin-right:-32px; margin-bottom:0px;'>");
	document.write("<img src='calendar.png' alt='calendar' onclick='openCal();' style='position:absolute;'>");
	document.write("</div>");
}

//Building a combobox to display Month's names
function buildMonth() {
	document.write("<td style='border:1px solid #1515FF; border-size:0px; width:58px;' colspan='2' ><select id='month' onchange='changeMonth();'>");
	for (var i = 0; i < 12; i++) {
		document.write("<option value='" + i + "'>" +getMonthName(i) + "</option>");
	}; 
	document.write("</select>");
	document.write("</td>");
}

// Buiding a combobox to display years
function buildYear() {
	document.write("<td style='border:1px solid #1515FF; border-size:0px; width:58px;'><select id='year' onchange='changeYear();'>");
	for (var i = 1900; i < 2100; i++) {
		document.write("<option value='"+ i +"'>"+ i +"</option>");
	}
	document.write("</select>");
	document.write("</td>");
}

// Buiding a function to handle a leapyear
function LeapYear(year) {
	if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
		return true;
	}
}

// Bulding a function to display names of week's days
function buildDay() {
	document.write("<tr style='border:1px solid #1515FF; border-size:0px; height:3px; background-color:#6464FF;' class='date'>");
	for(var i = 0 ; i < dayName.length; i++) {
		document.write("<td style='border:1px solid #1515FF; border-size:0px; width:58px;'>" + dayName[i] + "</td>");
	};
	document.write("</tr>");
}

function getDayOfMonth(month,year) {
	var arr = new Array(12);
	arr[0] = 31;
	arr[1] = (LeapYear(year)) ? 29 : 28;
	arr[2] = 31;
	arr[3] = 30;
	arr[4] = 31;
	arr[5] = 30;
	arr[6] = 31;
	arr[7] = 30;
	arr[8] = 30;
	arr[9] = 31;
	arr[10] = 30;
	arr[11] = 31;
	return arr[month];
}

function getMonthName(month) {
	var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return arr[month];
}

//Building a fuction to display week's day
function setCalendar() {
	var firstday = new Date(year, month, 1);
	var dateCur = new Date();
	var monthDateCur = dateCur.getMonth();
	var yearDateCur = dateCur.getFullYear();
	var checkDayCur = false;
	var startingday = firstday.getDay();
	firstday = null;
	var day = getDayOfMonth(month, year);
	var count = 1;
	var currentcell = 1;
	if ((monthDateCur == month) && (yearDateCur == year)) {
		 checkDayCur = true;
	}
	for(var row = 0; row <= 5; row++) {
		document.write("<tr style = 'border:1px solid #1515FF; border-size:0px; height:3px;'>");
		for (var col = 0; col < 7; col++ ) {
			if ( count > day ) {
				break;
			}
			if(currentcell < (startingday + 1)) {
				document.write("<td style='border:1px solid #1515FF; border-size:0px; width:58px;'></td>");
				currentcell++;
				continue;
			} else {
				if (count == date) {
					if (checkDayCur) {
						document.write("<td  style='color:red; border:1px solid #1515FF; border-size:0px; width:58px;' onclick='dayClick(" + count + ")'>");
					}
					else {
						document.write("<td style='border:1px solid #1515FF; border-size:0px; width:58px;' onclick='dayClick(" + count + ")'>");
					} 
					document.write(count);
					document.write("</td>");
					count++;
				} else {
					document.write("<td style='border:1px solid #1515FF; border-size:0px; width:58px;' onclick='dayClick(" + count + ")'>");
					document.write(count);
					document.write("</td>");
					count++;
				} 
			}
		}
		document.write("</tr>");
		document.getElementById("year").value = year;
		document.getElementById("month").value = month;
	}
}

//Open calendar when clicking an calendar image
function openCal () {
	if(check == true) {
		document.getElementById("cal").style.display = "block";
	} else {
		document.getElementById("cal").style.display = "none";
	}
}

function preYear() {
	year--;
	document.body.removeChild(document.getElementById("cal"));
	document.body.removeChild(document.getElementById("inputAndPic"));
	drawCalendar();
	document.getElementById("input").style.height = "32px";
}

function nextYear() {
	year++;
	document.body.removeChild(document.getElementById("cal"));
	document.body.removeChild(document.getElementById("inputAndPic"));
	drawCalendar();
	document.getElementById("input").style.height = "32px";
}

function preMonth() {
	month--;
	if(month < 0) {
		month = 11;
		year--;
		document.getElementById("month").value = month;
	}
	document.body.removeChild(document.getElementById("inputAndPic"));
	document.body.removeChild(document.getElementById("cal"));
	drawCalendar();
	document.getElementById("input").style.height = "32px";
}

function nextMonth() {
	month++;
	if (month > 11) {
		month = 0;
		year++;
		document.getElementById("month").value = month;
	}
	document.body.removeChild(document.getElementById("inputAndPic"));
	document.body.removeChild(document.getElementById("cal"));
	drawCalendar();
	document.getElementById("input").style.height = "32px";
}

function changeYear() {
	year= parseInt(document.getElementById("year").value);
	document.body.removeChild(document.getElementById("inputAndPic"));
	document.body.removeChild(document.getElementById("cal"));
	drawCalendar();
	document.getElementById("year").value = year;
	document.getElementById("input").style.height = "32px";
}

function changeMonth() {
	month = parseInt(document.getElementById("month").value);
	document.body.removeChild(document.getElementById("inputAndPic"));
	document.body.removeChild(document.getElementById("cal"));
	drawCalendar();
	document.getElementById("month").value = month;
	document.getElementById("input").style.height = "32px";
}

function dayClick(argument) {
	document.getElementById("input").value = argument + "/" + (month + 1) + "/" + year;
	document.getElementById("cal").style.display = "none";
}