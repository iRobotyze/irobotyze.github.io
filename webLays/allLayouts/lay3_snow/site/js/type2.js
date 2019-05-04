var caption = 'Deciphering me...';
var clength = 0;

$(document).ready(function(){
	setInterval('cursorAnimation()', 600);
	ding = $('#caption2');

	type();
});

function type(){
	ding.html(caption.substr(0, clength++));
	if(clength<caption.length+1){
		setTimeout('type()', 100);
	}
	else{
		clength=0;
		caption='';
	}
}

function cursorAnimation(){
	$('#cursor').animate({
		opacity: 0
	}, 'fast', 'swing').animate({
		opacity: 2
	}, 'fast', 'swing');
}