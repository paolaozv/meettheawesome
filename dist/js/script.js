/*var template = '<div>' +
					'<div><img src="{{image}}"></div>' +
					'<p>{{name}}</p>' +
					'<p>{{country}}</p>' +
					'<p>{{years}}</p>' +
				'</div>';

var cargarPagina = function() {
	$.ajax({
		url: "http://localhost:8000/demo.json",
		type: "GET",
		success: function(response) {
					for(var i = 0, l = response.students.length; i < l; i++) {
						$("#students").append(template.replace("{{image}}", response.students[i].image)
									 			  	  .replace("{{name}}", response.students[i].student)
									 			      .replace("{{country}}", response.students[i].country)
									 			      .replace("{{years}}", response.students[i].years));
					}
						console.log(response.students.length);
		},
		error: function(error) {
			console.log(error);
		}
	});	
};

$(document).ready(cargarPagina);*/