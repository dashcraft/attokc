$(document).ready(function(){
	//1351787568192332
	$.ajaxSetup({ cache: true });
  	$.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '1351787568192332',
      version: 'v2.8' // or v2.1, v2.2, v2.3, ...
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.AppEvents.logPageView();
  });
  	function updateStatusCallback(res){
  		console.log(res);
  	}

	var $window = $(window),
       $stickyEl = $('#header'),
       elTop = $stickyEl.offset().top;
    if($(document).height() > 1200 && $(document).width() > 700){
	   	$window.scroll(function() {
	        $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
	    });
	}

   	$('article[data-link]').on('click', function(){
   		console.log($(this).data('link'));
   		window.location = $(this).data('link');

   	})


   	

   	$('#secondary-menu-toggle').on('click',function(){
		$('#secondary-menu-links').toggleClass('hidden');
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


	$('#toggle-dropdown').on('mouseenter',function(){
		if(!$('.dropdown-menu-two').hasClass('hidden')){
			$('.dropdown-menu-two').toggleClass('hidden');
		}
		$('.dropdown-menu').removeClass('hidden');
	});

	$('#toggle-dropdown').on('mouseexit',function(){
		$('.dropdown-menu').addClass('hidden');
	});




	$('.row').on('mouseenter',function(){
		if(!$('.dropdown-menu').hasClass('hidden')){
			$('.dropdown-menu').toggleClass('hidden');
		}
		if(!$('.dropdown-menu-two').hasClass('hidden')){
			$('.dropdown-menu-two').toggleClass('hidden');
		}
	})

	$('.container').on('mouseenter',function(){
		if(!$('.dropdown-menu').hasClass('hidden')){
			$('.dropdown-menu').toggleClass('hidden');
		}
		if(!$('.dropdown-menu-two').hasClass('hidden')){
			$('.dropdown-menu-two').toggleClass('hidden');
		}
	})

	$('#attokc_schedule').on('mouseenter',function(){
		if(!$('.dropdown-menu').hasClass('hidden')){
			$('.dropdown-menu').toggleClass('hidden');
		}
		if(!$('.dropdown-menu-two').hasClass('hidden')){
			$('.dropdown-menu-two').toggleClass('hidden');
		}
	})

	//	<span>{{likes}}{{comments}}</span> will put instagram photo comment count!!!

	if($('#instafeed').length){

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


  	if($('#media_instagram_photos').length){

		var photoFeed = new Instafeed({
		    get: 'user',
		    userId:'4777661928',
		    target:'media_instagram_photos',
		    clientId: '6cf789de42554f54903d08e66c2c0ef7 ',
		    accessToken: '4777661928.1677ed0.fe1bc3b9d9564a5391907d0190f16441',
		    resolution: 'standard_resolution',
		    template: '<div class="instafeed_img"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a></div>',
		    sortBy: 'most-recent',
		    links: true,
		    limit:50,
		    filter: function(image){
		    	return image.tags.indexOf('arrows')>=0;
		    }
		 });
	  	photoFeed.run();
  	}

  	if($('#media_instagram_videos').length){

		var videoFeed = new Instafeed({
		    get: 'user',
		    userId:'4777661928',
		    target:'media_instagram_videos',
		    clientId: '6cf789de42554f54903d08e66c2c0ef7 ',
		    accessToken: '4777661928.1677ed0.fe1bc3b9d9564a5391907d0190f16441',
		    resolution: 'standard_resolution',
		    template: '<div class="instafeed_video"><a href="{{link}}" target="_blank" id="{{id}}">Link</a><video controls="controls" poster="{{image}}" height="250px"><source src="{{model.videos.standard_resolution.url}}" type="video/mp4"></video> </div>',
		    sortBy: 'most-recent',
		    links: true,
		    limit:50,
		    filter: function(image){
		    	return image.tags.indexOf('video')>=0;
		    }
		 });
	  	videoFeed.run();
  	}



})