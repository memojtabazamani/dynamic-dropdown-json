<?php 
$sectionWorks = [
	[
		"id" => 1,
		"name" => "it",
		"header_text" => "IT",
		"work_time" => "08:00 - 16:00",
		"salary"=> "99.9$ per month",
		"skills" => [
			"Fluent in ASP.NET MVC and Entity Framework",
			"Mastery of Concepts of Object Orientation and Design Pattern",
			"Preferably master one of the common Front-End frameworks",
			"Familiarity with UI / UX concepts and improving system performance in the UI",
			"Familiarity with the concepts of distributed services",
			"Preferably dominated by optimizing the efficiency and speed of the system at high pressure"
		],
		"scoring_skills" => [
			"Introduction to React Native",
			"Introduction to Sass"
		]
	],
	[
		"id" => 2,
		"name"=> "context_builder",
		"header_text" => "Context Builder",
		"work_time"=> "10:00 - 16:00",
		"salary"=> "59.9$ per month",
		"skills" => 
		[
			"Gender: Madam, sir",
			"Contract type: Telecommuting",
			"Familiarity with Html, CSS, PHP",
			"Familiar with the components and modules of content management systems such as WordPress",
			"Complete mastery of internal and external SEO",
			"Has a professional work sample",
			"Ability to recognize and analyze keywords",
			"Ability to edit text, photos and videos",
		],
		"scoring_skills" => [
			"Experience working with content management systems (such as WordPress)",
			"Excellent skills in writing and editing content in English",
			"Ability to verify long content"
		]
	],
	[
		"id" => 3,	
		"name"=> "graphic",
		"header_text" => "Graphic",
		"work_time"=> "07:00 - 12:00",
		"salary"=> "79.9$ per month",
		"skills" => [
			"Graphic design including: preparation and production of photos, banners, tracts, templates, brochures, characters, icons, logos and backgrounds",
			"Design and present creative, innovative, original and beautiful designs",
			"Attractive designs using new methods and tools",
			"Design and graphics with specialized graphic tools and preparation and editing of photos and images (Photoshop and Illustrator, camtasia, premiere pro, after effects) with regard to the working considerations and visual identity of the organization",
			"Designing various types of Instagram post templates, Instagram pages and stories and other virtual networks",
			"Preferably, familiarity with video editing will be effective in the capture process"
		],
		"scoring_skills" => [
			"Familiarity with 3D software",
			"Familiarity with motion graphics",
			"Introduction to Digital Painting",
			"Familiarity with producing specialized content and managing social networks",
			"Working hours 8:00 to 17:00 and Thursdays part time"
		]
	]
];

if(isset($_GET['sumbitSectionWorks'])) {
	echo json_encode($sectionWorks);
}
?>