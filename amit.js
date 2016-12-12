$(document).ready(function(){
	var cont=$('td').first().next().html(); //document.querySelectorAll('td')
	$('td:not(:first)').html(cont);
	var showLink = $('.showLink');
	showLink.click(function(){
		$(this).next().toggleClass('hidden');
	})
	var cancel=$('.cancel');
     cancel.click(function(){
     	$(this).parents('.header').toggleClass('hidden').find('.userInput').val('');
     })
})

/*
1-html skeleton
2- css inject
3-


*/