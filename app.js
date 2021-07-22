//  Initial
const request 	    = new XMLHttpRequest();
const url     	    = "api.php";
const method        = "GET";
const sectionWork   = document.getElementById('sectionWork');
const sectionWorkHelp = document.getElementById('sectionWorkHelp');
let selectedSection = 0;

sectionWork.onchange = function(e) {
	if((selectedSection = sectionWork.selectedIndex) === 0) {
        sectionWork.setCustomValidity("Must Be Selected Section Work!");
        sectionWorkHelp.innerHTML = sectionWork.validationMessage;	
	} else {
		sectionWorkHelp.innerHTML = "";
		request.open(method, url);
		request.onreadystatechange = handleAjax;
		request.send();
	}
	
}

function handleAjax() {
	if(request.status === 200 && request.readyState === 4) {
		console.log(request);
	}
}

