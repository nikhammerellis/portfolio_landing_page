$(document).ready(function(){

	$('body').hide().fadeIn(500);

	$('#wrapper, #logo, #description, .align_center, #nikpic').hide();
	$('header').hide().slideDown(2000, function(){
		$('#logo, #description').slideDown(2000, function(){
			$('.align_center').slideDown(1500, function(){
				$('#nikpic').slideDown(1500);
			});
		});
		$('#wrapper').slideDown(2000);
	});
	
  	$('a').click(function(e){
    	window.goto=$(this).attr("href");
    	$('body').fadeOut(500, function(){
      		document.location.href=window.goto;
    	});
    	e.preventDefault();
  	});

});