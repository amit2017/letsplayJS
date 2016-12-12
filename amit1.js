 (function(win,doc){

 	/*
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
 	*/

function registerShowLink(){
  var showLink = doc.querySelectorAll('.showLink');
  for(node of showLink){
  	node.addEventListener('click', onClickShow);
  }
}

function onClickShow() {
   var nextElem = this.nextElementSibling;
   toggleClass(nextElem,'hidden');
}

function registerCancel() {

	var cancel=doc.querySelectorAll('.cancel');
	for(node of cancel){
		node.addEventListener('click',onCancel);
	}
}

function onCancel(){
	var parent = findParent(this,'header');
	toggleClass(parent,'hidden');
}

function toggleClass(el,toggleClassName){
	var className = el.className;
	if(className.indexOf(toggleClassName) > -1){
			className = className.replace(toggleClassName,'');
	}else{
		className= className +' '+toggleClassName;
	}
	console.log(className);
	el.className = className;
}

function findParent(el,className){
	if(el.parentNode.className.indexOf(className)> -1){
		return el.parentNode;
	}else{
		return findParent(el.parentNode,className);
	}
};

var main = function(){

	var tds = doc.querySelectorAll('td');
	if(tds.length){
	 var cont = doc.querySelectorAll('td')[1].innerHTML;
	 		var i =1;
	 	for(;i < tds.length;i++ ){
	 		tds[i].innerHTML=cont;	
	 	}

	}

	registerCancel();
	registerShowLink();
}
















	doc.addEventListener("DOMContentLoaded", main, false);



 })(window,document);
