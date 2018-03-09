$(".hide").hide();
$(".readless").hide();

$(".readmore").click(function(){
	$(".hide").show();
	$(".readless").show();
	$(".readmore").hide();
});

$(".readless").click(function(){
	$(".hide").hide();
	$(".readless").hide();
	$(".readmore").show();
});
