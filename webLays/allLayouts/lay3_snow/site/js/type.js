var clength = 0;
var caption = ['iCarted', 'lit', 'asdf', 'on some shit', 'ayeeee'];
var j = 0;
var flag = 1;


$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    ding = $('#caption');	
	
    type(erase)();
});

function type(callback) {
    return function(){
        ding.html(caption[j].substr(0, clength++));
        if (clength < caption[j].length + 1) {
            setTimeout(type(callback), 200);
        } else {
        	setTimeout(function() {
	            if (callback != undefined){
	            		if(j==9)
	            			flag = 1;
	            		else callback();
	            }
			}, 700);
        }
    }
}

function erase() {
    ding.html(caption[j].substr(0, clength--));
    if(clength >= 0) {
        setTimeout('erase()', 120);
    } else {
        clength = 0;
        caption[j] = '';
        j++;
        type(erase)();
    }	
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
