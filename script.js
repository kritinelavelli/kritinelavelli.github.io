$(window).scroll(function(){
  if ($(window).scrollTop() >= 180) {
  	$('.pagetitle').removeClass('hidetitle');
  	$('.titlebar').addClass('titlebarshadow');
  }
  else {
    $('.pagetitle').addClass('hidetitle');
    $('.titlebar').removeClass('titlebarshadow');
  }
});

$(document).ready(function() {
	$('.titlebarmenu').click(function(e) {
		var visibility = $('.menuitems').css('visibility');
		if (visibility == 'visible') {
			$('.menuitems').css('visibility','hidden');
		}
		else {
			$('.menuitems').css('visibility','visible');
		}
	});

	$('#google').click(function(e) {
		$('#googlecontent').css('visibility','visible');
		$('.overlaybackground').css('visibility','visible');
	});
	$('#gatech').click(function(e) {
		$('#gatechcontent').css('visibility','visible');
		$('.overlaybackground').css('visibility','visible');
	});
	$('#microsoft').click(function(e) {
		$('#microsoftcontent').css('visibility','visible');
		$('.overlaybackground').css('visibility','visible');
	});
	$('.handwhich').click(function(e) {
		$('.overlay').css('visibility','hidden');
		$('.overlaybackground').css('visibility','hidden');
		$('#handwhichcontent').css('visibility','visible');
		$('.overlaybackground').css('visibility','visible');
	});
	$('#stuntracker').click(function(e) {
		$('#stuntrackercontent').css('visibility','visible');
		$('.overlaybackground').css('visibility','visible');
	});
	$('#leaderboard').click(function(e) {
		$('#leaderboardcontent').css('visibility','visible');
		$('.overlaybackground').css('visibility','visible');
	});
	$('#locationcontrol').click(function(e) {
		$('#locationcontrolcontent').css('visibility','visible');
		$('.overlaybackground').css('visibility','visible');
	});
	$('#watch').click(function(e) {
		$('#watchcontent').css('visibility','visible');
		$('.overlaybackground').css('visibility','visible');
	});
	
	$('.closebutton').click(function(e) {
		$('.overlay').css('visibility','hidden');
		$('.overlaybackground').css('visibility','hidden');
	});
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}