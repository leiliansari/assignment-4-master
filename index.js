
$("html").ready();

$(".readmore").click(ReadMore);

function ReadMore(){
	event.preventDefault();
	$(".readmore").hide();
	$("#show-this-on-click").slideDown();
	$(".readless").show();
};


$(".readless").click(ReadLess)

function ReadLess(){
	event.preventDefault();
	$("#show-this-on-click").slideUp();
	$(".readless").hide();
	$(".readmore").show();
};


$(".learnmore").click(LearnMore)

function LearnMore(){
	event.preventDefault();
	$("#learnmoretext").slideDown();
	$(".learnmore").hide();
};


$("#bottom-cta").click(noAction);

function noAction(){
	event.preventDefault();
	$(".button").preventDefault();
};