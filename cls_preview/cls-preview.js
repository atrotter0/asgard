
/* ============================================ */
/*            CLS Preview scripts               */
/*                                              */
/* ============================================ */

/* variables */
//change the naming convention completely to camelCase
var ID_PRE = "configurable_attributes_customer_emailer";
var ID_CLS_NAME = "";
var ID_LOGO_URL = "header_image_url";
var ID_HEAD_COLOR = "header_background_color";
var ID_BODY_STYLE = "body_style";
var ID_EMAIL_TEMPLATE = "email_template_urn";

var ID_LOGO = "";
var ID_HEADER = "";
var ID_BODY = "";
var ID_TEMPLATE = "";

var targetHeader = "preview-header";
var targetLogo = "preview-logo";
var targetBody = "preview-body";
var targetIntBody = "preview-interior-body";
//var targetTemplate = "preview-template"; NOTE: updates needed for template

/* array to hold id value */
var idVal = [];

/* array to hold letters of clsLocName */
var clsLocName = [];

/* main function to run program */
function runPreview() {
	getIdVal();
	getClsLocName(idVal);
	convertLocName(clsLocName);
	updatePreview();
	//test
	testCode();
};

/* obtain id value. put letters from id into array */
function getIdVal() {
	//get id of first html input tag.
	var pageIds = document.getElementsByTagName("input");
	var val = pageIds[0].id;
	idVal = [];
	//store letters of id into idVal array
	for(var i = 0; i < val.length; i++) {
		idVal.push(val[i]);
	}
};

/* start from beginning idVal array. push letters after ':' until next ':' */
function getClsLocName(arr) {
	//start with empty array.
	clsLocName = [];
	for(var i = 0; i < arr.length; i++) {
		var pos = arr[i];
		//check for ':'. start pushing values of cl-name into array until next ':'.
		if(pos == ":") {
			var j = i;
			j++;
			while(arr[j] != ":") {
				clsLocName.push(arr[j]);
				j++;
			}
			break;
		}
	}
};

/* transfer locName letters of array to string variable.  */
function convertLocName(arr) {
	var current = 0;
	//start with an empty variable;
	ID_CLS_NAME = "";
	for(var i = 0; i < arr.length; i++) {
		ID_CLS_NAME += arr[i];
	}
	//test
	console.log(ID_CLS_NAME);
};

/* create the ID for each email format input field */
function createIds() {
	var preTag =  ID_PRE + ":" + ID_CLS_NAME + ":";
	ID_HEADER = preTag + ID_HEAD_COLOR;
	ID_LOGO = preTag + ID_LOGO_URL;
	ID_BODY = preTag + ID_BODY_STYLE;
	ID_TEMPLATE = preTag + ID_EMAIL_TEMPLATE;
};

/* when user clicks preview, update preview with contents of email style fields */
function updatePreview() {
	createIds();
	updateStyle(targetHeader, ID_HEADER, ID_HEAD_COLOR);
	updateStyle(targetLogo, ID_LOGO, ID_LOGO_URL);
	updateStyle(targetBody, ID_BODY, ID_BODY_STYLE);
};

/* update the style of the target element with the value in the style parameter */
function updateStyle(element, style, part) {
	var updatedStyle = document.getElementById(style).value;
	//if element is undefined or empty, use the element placeholder.
	if(updatedStyle === undefined || updatedStyle == "") {
		updatedStyle = document.getElementById(style).placeholder;
	}
	//check which part of style on DOM to modify.
	checkPart(part, element, updatedStyle);
	//tests
	console.log(element);
	console.log(style);
	console.log(part);
	console.log(updatedStyle);
};

/* check which element of styling to modify */
function checkPart(part, element, update) {
	if(part == "header_background_color") {
		document.getElementById(element).style.backgroundColor = update;
	}
	else if(part == "header_image_url") {
		document.getElementById(element).style.backgroundImage = "url(" + update + ")";
	}
	else if(part == "body_style") {
		document.getElementById(element).style.fontFamily = update; //NOTE: Update this for all styles in field.
	}
};

/* test function to view code */
function testCode() {
	var element = document.getElementById("test-window");
	element.innerHTML = "";
	// print id val array
	for(var i = 0; i < idVal.length; i++) {
		element.innerHTML += idVal[i] + "<br>";
	}
	//print clslocname array
	for(var i = 0; i < clsLocName.length; i++) {
		element.innerHTML += clsLocName[i] + "<br>";
	}
	//final ID_CLS_NAME
	element.innerHTML = ID_CLS_NAME;
};

