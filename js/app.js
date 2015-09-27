$(document).ready(function(){
	function showHideMenu()
	{
		$("#navigations").fadeToggle("slow","linear");
	}
	/*****Appel aux functions*****/
	$("#icone-menu").bind('click',showHideMenu);
	alert("ok");
});