$(document).ready(function(){
	$("#daftar").hide();
	$("#masuk").hide();
	$(".btn-daftar").click(function(){
		$("#daftar").fadeIn(function(){
			$("#masuk-saja").hide()
		});
	});
	$(".btn-login").click(function(){
		$("#masuk").fadeIn(function(){
			$("#masuk-saja").hide()
		});
	});
});