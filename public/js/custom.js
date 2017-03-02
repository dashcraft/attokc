$(document).ready(function(){
	console.log('this is working');


	$('#toggle-dropdown').on('click',function(){
		if(!$('.dropdown-menu-two').hasClass('hidden')){
			$('.dropdown-menu-two').toggleClass('hidden');
		}
		console.log('toggled');
		$('.dropdown-menu').toggleClass('hidden');
	});

	$('#toggle-dropdown-two').on('click',function(){
		console.log('toggled');
		if(!$('.dropdown-menu').hasClass('hidden')){
			$('.dropdown-menu').toggleClass('hidden');
		}
		$('.dropdown-menu-two').toggleClass('hidden');
	});
	$('.row').on('click',function(){
		if(!$('.dropdown-menu').hasClass('hidden')){
			$('.dropdown-menu').toggleClass('hidden');
		}
		if(!$('.dropdown-menu-two').hasClass('hidden')){
			$('.dropdown-menu-two').toggleClass('hidden');
		}
	})


})