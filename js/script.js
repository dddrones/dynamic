console.log('bonjour');

var $one = $("#j1");
var $two = $("#a1");
var $three = $("#j2");
var $four = $("#a2");
var $five = $("#j3");
var $six = $("#a3");

$one.on("click", function() {
	$(this).hide();
	$two.show();
	$("body").css("background-color", "pink")
});

$two.on("click", function() {
	$(this).hide();
	$three.show();
	$("body").css("background-color", "#3FBFE0")
});

$three.on("click", function() {
	$(this).hide();
	$four.show();
	$("body").css("background-color", "#E0D93F")
});

$four.on("click", function() {
	$(this).hide();
	$five.show();
	$("body").css("background-color", "#3FE079")
});

$five.on("click", function() {
	$(this).hide();
	$six.show();
	$("body").css("background-color", "#E0B63F")
});

$six.on("click", function() {
	$(this).hide();
	$one.show();
	$("body").css("background-color", "white")
});