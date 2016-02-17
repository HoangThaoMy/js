var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month_numberday = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
var day = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"];
var month = new Date().getMonth();
var year = new Date().getFullYear();
var firstday_position = 0;
var datenow_position;

//Creating a new calendar
function createClendar() {
	document.write("<div id='calendar' style='display:none;'>")
	document.write("<form>");
	document.write("<table id='table' style='text-align: center;'>");
	document.write("<tr class='tr' id='monthyear'>");
	buildMonthYear();
	document.write("</tr>");
	buildDay();
	buildCalendar(month, year);
	document.write("</table>");
	document.write("</form>");
	document.write("</div>")
}

//Building a row of month, year
function buildMonthYear() {	
	document.write("<td class='td' onClick='preYear();'><a type='a' name='btnPreviousYear'>&lt;&lt;</a></td>");
	document.write("<td class='td' onClick='preMonth();'><a type='a' name='btnPreviousMonth'>&lt;</a></td>");
	document.write("<td class='td' colspan='2'><select id='months' onChange='changeMonth();'>");
	for(var i = 0; i < months.length; i++) {
		document.write("<option value='" + i + "'>" + months[i] + "</option>")
	};
	document.write("</select></td>");
	document.write("<td class='td' colspan='1'><select id='years' onChange='changeYear();'>");
	for(var i = 1900; i <= 2100; i++) {
		document.write("<option value='" + i + "'>" + i + "</option>")
	};
	document.write("</select></td>")
	document.write("<td class='td' onClick='nextMonth();'><a type='a'>&gt;</a></td>");
	document.write("<td class='td' onClick='nextYear();'><a type='a' name='btnNextYear' >&gt;&gt;</a></td>");
}


function buildDay() {
	document.write("<tr class='tr' id='title'>");
	for(var i = 0; i < day.length; i++) {
		document.write("<td id='date' class='td'>" + day[i] + "</td>");
	};
	document.write("</tr>");
}

function buildCalendar(month, year) {
	var count = 1;
	for(var i = 0; i < 6; i++) {
		document.write("<tr class='tr' onclick='cancelCalendar();'>");
		for(var j = 0; j < 7; j++) {
			document.write("<td id='item" + count + "' class='td' onClick='checkDay(" + count + ");'></td>");		
				count++;		
		};
		document.write("</tr>");
	};
	setdate();
	setMonths();
	setYears();
}

function setdate() {
	var datenow = new Date().getDate();
	var monthnow = new Date().getMonth();
	var yearnow = new Date().getFullYear();
	var day = new Date(year, month, 1).getDay();
	firstday_position = parseInt(day);
	var premonth = month - 1;
	var nextmonth = month + 1;
	if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
		month_numberday[1] = 29; 
		} else {
			month_numberday[1] = 28;
		}
	if(premonth < 0){
		premonth = 11;
	}

	if(nextmonth == 12){
		nextmonth = 0;
	}
	var numberday = month_numberday[month];
	var premonth_numberday = month_numberday[premonth];
	var premonth_numberday = month_numberday[nextmonth];
	var position = 1;
	var count = 1;
	var check = false;
	var firstday = day;
	var lastday = (parseInt(numberday) + parseInt(day));
	for(var i = 0; i < 6; i++) {
		for(var j = 0; j < 7; j++) {
			if(count >= day) {
				check = true;
			}
			if(check == true && position <= numberday) {
				document.getElementById("item" + (position + day)).innerHTML = position;
				document.getElementById("item" + (position + day)).style.background = "#cce0ff";
				if(datenow == position && monthnow == month && yearnow == year) {
					document.getElementById("item" + (position + day)).style.background = "#00ace6";
					datenow_position = "item" + (position + day);
				}
				document.getElementById("item" + (position + day)).style.color = "#000";
				position++;
			}
			count++;
		}
	}

}

function checkDay(position) {
	var results = "";
	var premonth = month;
	var monthnow = month + 1;
	var nextmonth = month + 2
	var yearnow = year;
	var day = document.getElementById("item" + position).innerHTML;
	if(premonth == 0) {
		premonth = 12;
	}
	if(nextmonth == 13) {
		nextmonth = 1;
	}
	if(parseInt(day) > position) {
		if(premonth == 12) {
			year--;
		}
		var results = day + "/" + premonth + "/" + year;
	} else if (parseInt(day) < (position - firstday_position)) {
		if(nextmonth == 1) {
			year++;
		}
		var results = day + "/" + nextmonth + "/" + year;
	} else {
		var results = day + "/" + monthnow + "/" + year;
	}
	document.getElementById("birthday").value = results;
}

function changeMonth() {
	for(var i = 1; i <= 42; i++) {
		document.getElementById("item" + i).innerHTML = "";
		document.getElementById("item" + i).style.background = "none";
	}
	month = document.getElementById("months").value;
	setdate();
}

function setMonths() {
	document.getElementById("months").value = month;
}

function setYears() {
	document.getElementById("years").value = year;
}

function changeYear() {
	for(var i = 1; i <= 42; i++) {
		document.getElementById("item" + i).innerHTML = "";
		document.getElementById("item" + i).style.background = "none";
	}
	year = document.getElementById("years").value;
	setdate();
}

function preMonth() {
	for(var i = 1; i <= 42; i++) {
		document.getElementById("item" + i).innerHTML = "";
		document.getElementById("item" + i).style.background = "none";
	}
	month = month - 1;
	if(month < 0) {
		month = 11;
		year = year - 1;
	}
	setdate();
	setMonths();
	setYears();
	}

function nextMonth() {
	for(var i = 1; i <= 42; i++) {
		document.getElementById("item" + i).innerHTML = "";
		document.getElementById("item" + i).style.background = "none";
	}
	month = month + 1;
	if(month > 11) {
		month = 0;
		year = year + 1;
	}
	setdate();
	setMonths();
	setYears();
}

function preYear() {
	for(var i = 1; i <= 42; i++) {
		document.getElementById("item" + i).innerHTML = "";
		document.getElementById("item" + i).style.background = "none";
	}
	year = year - 1;
	setdate();
	setMonths();
	setYears();
}

function nextYear() {
	for(var i = 1; i <= 42; i++) {
		document.getElementById("item" + i).innerHTML = "";
		document.getElementById("item" + i).style.background = "none";
	};
	year = year + 1;
	setdate();
	setMonths();
	setYears();
}

function setItem(item, value) {
	var item = document.getElementById(item);
	item.innerHTML = value;
}

function cancelCalendar() {
	document.getElementById("calendar").style.display = "none";
}

function openCalendar() {
	document.getElementById("calendar").style.display = "block";
}