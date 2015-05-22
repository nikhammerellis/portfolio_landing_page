$(document).ready(function(){

	$('body').hide().fadeIn(500);

	$('a').click(function(e){
    	window.goto=$(this).attr("href");
    	$('body').fadeOut(500, function(){
      		document.location.href=window.goto;
    	});
    	e.preventDefault();
  	});

	$('#wrapper, #logo, #description, .align_center, #nikpic').hide();
	$('header').hide().slideDown(1000, function(){
		$('#logo, #description').fadeIn(1500, function(){
			$('#nikpic').fadeIn(1500, function(){
				$('.align_center').fadeIn(1500);
			});
		});
		$('#wrapper').slideDown(2000);
	});

	$('#linkedin, #github, #youtube').jrumble();
	var demoStart = function(){
		$('#linkedin, #github, #youtube').trigger('startRumble');
		setTimeout(demoStop, 1000);
	};
	var demoStop = function(){
		$('#linkedin, #github, #youtube').trigger('stopRumble');
		setTimeout(demoStart, 2000);
	};
	demoStart();
	
});