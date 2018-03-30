//wait for DOM to run and is ready 
$(document).ready(function(){
	console.log("working")
});


$(".hide").hide();
$(".readless").hide();
$("#learnmoretext").hide();

$(".readmore").click(function(){
//prevent page from performing the default action
		event.preventDefault();
	$(".hide").show();
	//$("#click").slidedown('slow');
	$(".readless").show();
	$("#learnmoretext").hide();
	$(".readmore").hide();
});

$(".readless").click(function(){
		event.preventDefault();
	$(".hide").hide();
	//$(".hide").slideup();
	$(".readless").hide();
	$(".readmore").show();
});

$(".learnmore").click(function(){
		event.preventDefault();
	$("#learnmoretext").show();
	$(".learnmore").hide();
})
