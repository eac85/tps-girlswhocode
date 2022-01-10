/*!
* Start Bootstrap - One Page Wonder v6.0.4 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

function populateModal(date, link, notes){
	document.getElementById("modalTitle").innerHTML = date;
	document.getElementById("modalBody").innerHTML = '<a class="nav-link" href=$(link) target="_blank">Powerpoint</a>';
	document.getElementById("notes").innerHTML = notes;

}

function jan25(){
	populateModal('January 25, 2022', 
		'https://docs.google.com/presentation/d/16zyh5ndBUlgdyYLX0kYrrwkYEl__gLFpoIZkSqJrIys/edit',
		'Welcome to our first session for Winter 2022!')
}