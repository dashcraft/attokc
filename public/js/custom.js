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

	//	<span>{{likes}}{{comments}}</span> will put instagram photo comment count!!!
	var userFeed = new Instafeed({
	    get: 'user',
	    userId:'4777661928',
	    clientId: '6cf789de42554f54903d08e66c2c0ef7 ',
	    accessToken: '4777661928.1677ed0.fe1bc3b9d9564a5391907d0190f16441',
	    resolution: 'standard_resolution',
	    template: '<div class="instafeed_img"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a></div>',
	    sortBy: 'most-recent',
	    limit: 9,
	    links: true
	 });
  	userFeed.run();

})