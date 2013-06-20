
        window.fbAsyncInit = function() {
			  // init the FB JS SDK
			 FB.init({
			 appId      : '179375228888976',                        // App ID from the app dashboard
			 //channelUrl : 'http://andrewku.github.io/FB/Assignment4_blank.html', // Channel file for x-domain comms
			 cookie     : true,
			 status     : true,                                 // Check Facebook Login status
			 xfbml      : true                                  // Look for social plugins on the page
				});

			// Additional initialization code such as adding Event Listeners goes here
			};

             // Load the SDK asynchronously
           (function(d, s, id){
		   console.log("ok4");
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=179375228888976";
            fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));
			console.log("ok2");

     $(window).load(function () {
	 
			FB.login(initialize,{});
			function initialize(){
			
			console.log("ok111");
			FB.getLoginStatus(function(response) {
			console.log("ok5");
			if (response.status === 'connected') {
				
				//a|?a??a·2c?“a??a??e€?a﹐”c??a…￥i??e?￡a°±c?’a?￥a??#loginButtona”1a??logoutc?€a…?
				uid = response.authResponse.userID;
				accessToken = response.authResponse.accessToken;
				
				console.log("ok1");
				 $('#lbutton_wrap').remove();
				    $('.nav_login').remove();
				    $('#apiIcon').remove();
				    $('#loginButton').remove();
				    $('.loginButton').remove();
				    $('.login_ornot').text("最新收藏");

			      FB.api('/me', function(response){

			    	 var fId = response.id;
		             var fName = response.name;
		         
		              $(".nav_log_container").append("<div style=' margin-left: 10px; margin-top: 60px;'><a href='personPage.html'><img src='https://graph.facebook.com/"+ fId + "/picture'/><span style= 'margin-left: 20px; font-size: 20px; text-decoration: none;'>"+fName+"</span></a></div>");
                    

		              $("#pic1").append("<a href='personPage.html'><img src='andrewadd/f1.png'/></a>");
		              $("#pic2").append("<a href='personPage.html'><img src='andrewadd/f2.png'/></a>");
		              $("#pic3").append("<a href='personPage.html'><img src='andrewadd/f3.png'/></a>");
                    
                    //<a href='personPage.html'> </a>
                    //<img src='https://graph.facebook.com/"+ fId + "/picture' />


		              });

                    //<a href='personPage.html'> </a>
                    //<img src='https://graph.facebook.com/"+ fId + "/picture' />

		              


		   

				//FB.logout(function(response) {
  					
				//});
				
				//$("#loginButton").html('Facebook Login');
 				//$("#loginButton").removeClass('btn-inverse').addClass('btn-primary');
 				
 				//$('#welcome').html("");


				
			} else if (response.status === 'not_authorized') {
			
				// the user is logged in to Facebook, 
				// but has not authenticated your app

				
				 FB.login(function(response) {
				   if (response.authResponse) {
					 
					 //a??c”‥e€…a·2c?“c??a…￥a??a??i??a”1eR?button
					//$("#loginButton").html('Facebook Logout');
					//$("#loginButton").removeClass('btn-primary').addClass('btn-inverse');
					
					 $('#lbutton_wrap').remove();
				    $('.nav_login').remove();
				    $('#apiIcon').remove();
				    $('#loginButton').remove();
				    $('.loginButton').remove();
				    $('.login_ornot').text("最新收藏");

			      FB.api('/me', function(response){

			    	 var fId = response.id;
		             var fName = response.name;
		         
		              $(".nav_log_container").append("<div style=' margin-left: 10px; margin-top: 60px;'><a href='personPage.html'><img src='https://graph.facebook.com/"+ fId + "/picture'/><span style= 'margin-left: 20px; font-size: 20px; text-decoration: none;'>"+fName+"</span></a></div>");
                    

		              $("#pic1").append("<a href='personPage.html'><img src='andrewadd/f1.png'/></a>");
		              $("#pic2").append("<a href='personPage.html'><img src='andrewadd/f2.png'/></a>");
		              $("#pic3").append("<a href='personPage.html'><img src='andrewadd/f3.png'/></a>");
                    
                    
                    
                    //<a href='personPage.html'> </a>
                    //<img src='https://graph.facebook.com/"+ fId + "/picture' />


		              });

		   
					 
				   } else {
					 
					 //a??c”‥e€…a?’cμ‧c??a…￥i??buttona﹐€a‥￡a?¯login
					alert("登入同時授權才能收藏花朵喔！");
					 
				   }
				 });
				
			}else {
				
				// the user isn't logged in to Facebook.
				
				FB.login(function(response) {
				   if (response.authResponse) {
					 
					 //a??c”‥e€…a·2c?“c??a…￥a??a??i??a”1eR?button
					//$("#loginButton").html('Facebook Logout');
					//$("#loginButton").removeClass('btn-primary').addClass('btn-inverse');
					
					//var userName;
					 $('#lbutton_wrap').remove();
				    $('.nav_login').remove();
				    $('#apiIcon').remove();
				    $('#loginButton').remove();
				    $('.loginButton').remove();
				    $('.login_ornot').text("最新收藏");

			      FB.api('/me', function(response){

			    	 var fId = response.id;
		             var fName = response.name;
		         
		              $(".nav_log_container").append("<div style=' margin-left: 10px; margin-top: 60px;'><a href='personPage.html'><img src='https://graph.facebook.com/"+ fId + "/picture'/><span style= 'margin-left: 20px; font-size: 20px; text-decoration: none;'>"+fName+"</span></a></div>");
                    

		              $("#pic1").append("<a href='personPage.html'><img src='andrewadd/f1.png'/></a>");
		              $("#pic2").append("<a href='personPage.html'><img src='andrewadd/f2.png'/></a>");
		              $("#pic3").append("<a href='personPage.html'><img src='andrewadd/f3.png'/></a>");
                    
                    //<a href='personPage.html'> </a>
                    //<img src='https://graph.facebook.com/"+ fId + "/picture' />


		              });

		   
					 console.log("ok3");
				   } else {
					 
					//a??c”‥e€…a?’cμ‧c??a…￥i??buttona﹐€a‥￡a?¯login
					alert("登入同時授權才能收藏花朵喔！");
					 
				   }
				 });
				
		  	}
		  	
		  });
		 } //function initialize
		});

   
