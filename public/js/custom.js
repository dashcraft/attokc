$(document).ready(function(){
	
	$('#toggle-dropdown').on('mouseenter',function(){
		if(!$('.dropdown-menu-two').hasClass('hidden')){
			$('.dropdown-menu-two').toggleClass('hidden');
		}
		$('.dropdown-menu').removeClass('hidden');
	});
	$('#toggle-dropdown').on('mouseexit',function(){
		$('.dropdown-menu').addClass('hidden');
	});


	var $window = $(window),
       $stickyEl = $('#header'),
       elTop = $stickyEl.offset().top;

   	$window.scroll(function() {
        $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
    });


	$('#toggle-dropdown-two').on('mouseenter',function(){
		if(!$('.dropdown-menu').hasClass('hidden')){
			$('.dropdown-menu').toggleClass('hidden');
		}
		$('.dropdown-menu-two').removeClass('hidden');
	});
	$('#toggle-dropdown-two').on('mouseexit',function(){
		$('.dropdown-menu-two').addClass('hidden');
	});


	$('.row').on('mouseenter',function(){
		if(!$('.dropdown-menu').hasClass('hidden')){
			$('.dropdown-menu').toggleClass('hidden');
		}
		if(!$('.dropdown-menu-two').hasClass('hidden')){
			$('.dropdown-menu-two').toggleClass('hidden');
		}
	})

	//	<span>{{likes}}{{comments}}</span> will put instagram photo comment count!!!

	var init = 0;
	if($('#instafeed').length && init == 0){
		init+=1;
		console.log('this has instantiated;')
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
  	}

})