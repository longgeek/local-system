
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Neon - Responsive Under Cunstruction Page
//////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////countdwn script//////////////////////////////////////////////////
// documentation of jCountdown plugin --> http://www.webmuse.co.uk/projects/jcountdown-jquery-plugin/
// here it's simple you have to just change your lunch date !!!
$(document).ready(function() {
	$("#count").countdown({
		//to change lunch date just replace the current date with yours .
		date: "july 31, 2013",  
		//html code in count div here.
		htmlTemplate: "<div id='mail-count' class='numbers'><span class='mail-label'><a target='_blank' href='http://mail.thstack.com'>mail</a></span></div> <div id='docs-count' class='numbers'><span class='docs-label'><a target='_blank' href='http://docs.thstack.com'>docs</a></span></div><div id='calendar-count' class='numbers'><span class='calendar-label'><a target='_blank' href='http://calendar.thstack.com'>calendar</a></span></div><div id='cloud-count' class='numbers'><span class='cloud-label'><a target='_blank' href='http://cloud.local.com'>cloud</a></span></div><div id='mail-count' class='numbers'><span class='mail-label'><a target='_blank' href='http://finance.local.com'>finance</a></span></div> <div id='docs-count' class='numbers'><span class='docs-label'><a target='_blank' href='http://pythonpie.local.com'>pythonpie</a></span></div><div id='calendar-count' class='numbers'><span class='calendar-label'><a target='_blank' href='http://online.local.com'>online</a></span></div><div id='cloud-count' class='numbers'><span class='cloud-label'><a target='_blank' href='http://weibo.com/longgeek'>longgek</a></span></div>"
	});
});

////////////////////show-hide tools panel////////////////////////
$("#show-hide").live("click", function(){ 
	if ($('#tools').is(':visible'))
		{$(this).html('+');$("#tools").hide();}
	else{$(this).html('-');$("#tools").show();}
 }); 

////////////////////skins selectors change////////////////////////
$("#blue-skin").live("click", function(){ 
	$("#container").attr("class","blue");
 }); 

$("#red-skin").live("click", function(){ 
	$("#container").attr("class","red");
 }); 

$("#purple-skin").live("click", function(){ 
	$("#container").attr("class","purple");
 }); 

$("#green-skin").live("click", function(){ 
	$("#container").attr("class","green");
 }); 


////////////////////patterns selectors change////////////////////////
$("#pat1").live("click", function(){ 
	 $('html').attr("class","bg1");
 }); 

$("#pat2").live("click", function(){ 
	$('html').attr("class","bg2");
 }); 

$("#pat3").live("click", function(){ 
	$('html').attr("class","bg3");
 }); 

$("#pat4").live("click", function(){ 
	$('html').attr("class","bg4");
 }); 
