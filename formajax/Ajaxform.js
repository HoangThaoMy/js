
//Displaying alert "Welcome user" when clicking on button Submit
function Submit(url) {
	checkUserName();
	checkEmail();
	checkPassword();
	checkBirthday();
	if(checkUserName() && checkBirthday() && checkEmail() && checkPassword()) {
		var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.status == 200 && xmlhttp.readyState == 4) {
				alert(xmlhttp.responseText);
			}
		};
		var username = document.getElementById("username").value;
		var data = "?user=" + username;
		url += data;
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}
}

//Validating username input/[\u0041-\u005a\u0061-\u007a...]([...]|[\u0030-\u0039\u0660-\u0669...])*/
function checkUserName() {

	//var username = /^[a-zA-Z0-9À-ý]+$/;
	/*var username =/[\u0041-\u005a\u0061-\u007a...]([...]|[\u0030-\u0039\u0660-\u0669...])*/
	var username = /^[a-zA-Z0-9À-ý]+$/;
	var value_username = document.getElementById("username");
	if(value_username.value.match(username)) {
		document.getElementById("error_user").innerHTML = "";
		return true; 
	}
	document.getElementById("error_user").innerHTML = "Your username isn't valid";
	return false;
}

//Validating email input
function checkEmail() {
	var email = /\S+@\S+\.\S+/;
	//var email = /^[a-zA-Z0-9]+\@^[a-zA-Z0-9]+\.^[a-zA-Z0-9]+/;
	var value_email = document.getElementById("email");
	if(value_email.value.match(email) != null) {
		document.getElementById("error_email").innerHTML = "";
		return true;
	}
	document.getElementById("error_email").innerHTML = "Your email isn't valid";
	return false;
}

//Validating password input
function checkPassword() {
	var value_password = document.getElementById("password");
	if(value_password.value.length >= 8) {
		document.getElementById("error_pass").innerHTML = "";
		return true;
	}
	document.getElementById("error_pass").innerHTML = "Your password has less than 8 characters";
	return false;
}

//Validating birthday input
function checkBirthday() {
	var value_birthday = document.getElementById("birthday");

	if(value_birthday.value.length > 0) {
		document.getElementById("error_birthday").innerHTML = "";
		return true;
	}
	document.getElementById("error_birthday").innerHTML = "Your birthday is null";
}

function Reset() {
	document.getElementById("error_user").innerHTML = "";
	document.getElementById("error_birthday").innerHTML = "";
	document.getElementById("error_pass").innerHTML = "";
	document.getElementById("error_email").innerHTML = "";
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
	document.getElementById("email").value = "";
	document.getElementById("birthday").value = "";
	document.getElementById("calendar").style.display = "none";
}