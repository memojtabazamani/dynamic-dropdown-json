//  Initial
const request 	      = new XMLHttpRequest();
const url     	      = "api.php";
const method          = "GET";
const sectionWork     = document.getElementById('sectionWork');
const sectionWorkHelp = document.getElementById('sectionWorkHelp');
const tableOfSections = document.getElementById("tableOfSections");
let selectedSection   = 0;
const result          = document.getElementById("result");

sectionWork.onchange = function(e) {
	if((sectionWork.selectedIndex) === 0) {
        sectionWork.setCustomValidity("Must Be Selected Section Work!");
        sectionWorkHelp.innerHTML = sectionWork.validationMessage;	
	} else {
		sectionWorkHelp.innerHTML = "";
		selectedSection = sectionWork.value;
		request.open(method, url + "?sumbitSkills=true&sectionWork="+selectedSection);
		request.responseType = "json";
		request.onreadystatechange = handleAjax;
		request.send();
	}
	
}



function handleAjax() {
	if(request.status === 200 && request.readyState === 4) {
		result.innerHTML = "";
		var output = "<ul>";
		for (var i = 0; i < request.response.length; i++) {
			output += "<li>" + request.response[i] + "</li>";
		}
		output += "</ul>";
		result.innerHTML = output;
	}
}

function handleAjaxMount() {
	if(request.status === 200 && request.readyState === 4) {
		var output = "<option selected> Choose.. </option>";
		var tableOutput = "";
		for (var i = 0; i < request.response.length; i++) {
			output += "<option value='" + request.response[i]['name'] + "'>" + request.response[i]['name'][0].toUpperCase() + request.response[i]['name'].slice(1).replace("_", " ") + "</option>";
			tableOutput += "<tr>";
			tableOutput += "<td><b>" + request.response[i]['name'][0].toUpperCase() + request.response[i]['name'].slice(1).replace("_", " ") + "</b></td>";
			tableOutput += "<td><small class='badge badge-info'>" + request.response[i]['work_time'] + "</small></td>";
			tableOutput += "<td><mark>" + request.response[i]['salary'] + "</mark></td>";
			tableOutput += "</tr>";
		}
		sectionWork.innerHTML = output;
		tableOfSections.innerHTML = tableOutput;
	}
}

window.onload = function() {
	request.open(method, url + "?sumbitSectionWorks=true");
	request.responseType = "json";
	request.onreadystatechange = handleAjaxMount;
	request.send();
}