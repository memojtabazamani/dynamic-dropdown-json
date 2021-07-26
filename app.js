//  Initial
const request 	      = new XMLHttpRequest();
const url     	      = "api.php";
const method          = "GET";
const sectionWork     = document.getElementById('sectionWork');
const sectionWorkHelp = document.getElementById('sectionWorkHelp');
const tableOfSections = document.getElementById("tableOfSections");
const resultsDiv      = document.getElementsByClassName("results")[0];
let selectedSection   = 0;
const result          = document.getElementById("result");
let skills            = [];

/**
 * When change sectionwork
 */
 sectionWork.onchange = function(e) {
	// Check are section selected?
	if((sectionWork.selectedIndex) === 0) {
		sectionWork.setCustomValidity("Must Be Selected Section Work!");
		sectionWorkHelp.innerHTML = sectionWork.validationMessage;	
	} else { // Selected
		sectionWorkHelp.innerHTML = "";
		selectedSection = sectionWork.value;
		handleAjax();
	}
	
}


/**
 * Show Selected Section Details
 */
 function handleAjax() {
 	result.innerHTML = "";
 	resultsDiv.style.display = "block";
 	var selectedSkill = skills[selectedSection - 1].skills;

 	var output = "<ul>";
 	for (var i = 0; i < selectedSkill.length; i++) {
 		output += "<li>" + selectedSkill[i] + "</li>";
 	}
 	if(scoringSkills = skills[selectedSection - 1].scoring_skills) {
 		output += "<h5>Scoring Skills : </h5><ul>";
 		for (var i = 0; i < scoringSkills.length; i++) {
 			output += "<li>" + scoringSkills[i] + "</li>";
 		}
 	}
 	
 	output += "</ul>";
 	output += "</ul>";
 	result.innerHTML = output;
 }

/**
 * In this function, we receive the basic information from one
 */
 function handleAjaxMount() {
	// If all things okay?
	if(request.status === 200 && request.readyState === 4) {
		var output = "<option selected> Choose.. </option>";
		var tableOutput = "";
		for (var i = 0; i < request.response.length; i++) {
			output += "<option value='" + request.response[i]['id'] + "'>" + request.response[i]['header_text'] + "</option>";

			tableOutput += "<tr>";
			tableOutput += "<td><b>" + request.response[i]['header_text'] + "</b></td>";
			tableOutput += "<td><small class='badge badge-info'>" + request.response[i]['work_time'] + "</small></td>";
			tableOutput += "<td><mark>" + request.response[i]['salary'] + "</mark></td>";
			tableOutput += "</tr>";
		}
		sectionWork.innerHTML = output;
		tableOfSections.innerHTML = tableOutput;
		skills = request.response;
	}
}

window.onload = function() {
	request.open(method, url + "?sumbitSectionWorks=true");
	request.responseType = "json";
	request.onreadystatechange = handleAjaxMount;
	
	request.send();
}