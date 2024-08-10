jQuery(document).ready(function($){
	var overlay = $('.overlay-outer'),
		login = overlay.find('#login-section'),
		signup = overlay.find('#signup-section'),
		resetpassword = overlay.find('#reset-section'),
		topTabs = $('.top-tabs'),
		tabLogin = topTabs.children('li').eq(0).children('a'),
		tabSignup = topTabs.children('li').eq(1).children('a'),
		forgotPasswordLink = login.find('.bottom-msg a'),
		backToLoginLink = resetpassword.find('.bottom-msg a'),
		mainNav = $('.nav');

	//open popup
	mainNav.on('click', function(event){
		$(event.target).is(mainNav) && mainNav.children('ul').toggleClass('is-visible');
	});

	//open sign-up form
	mainNav.on('click', '.signup-section', signup_selected);
	//open login-form form
	mainNav.on('click', '.login-btn', login_selected);

	//close popup
	overlay.on('click', function(event){
		if( $(event.target).is(overlay) || $(event.target).is('.close-btn') ) {
			overlay.removeClass('is-visible');
		}	
	});
	//close modal when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		overlay.removeClass('is-visible');
	    }
    });

	//From one tab to another
	topTabs.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( tabLogin ) ) ? login_selected() : signup_selected();
	});

	//hide or show password
	$('.hide-password').on('click', function(){
		var togglePass= $(this),
			passwordField = togglePass.prev('input');
		
		( 'password' == passwordField.attr('type') ) ? passwordField.attr('type', 'text') : passwordField.attr('type', 'password');
		( 'Hide' == togglePass.text() ) ? togglePass.text('Show') : togglePass.text('Hide');
		//focus and move cursor to the end of input field
		passwordField.putCursorAtEnd();
	});

	//show forgot-password form 
	forgotPasswordLink.on('click', function(event){
		event.preventDefault();
		forgot_password_selected();
	});

	//back to login from the forgot-password form
	backToLoginLink.on('click', function(event){
		event.preventDefault();
		login_selected();
	});

	function login_selected(){
		mainNav.children('ul').removeClass('is-visible');
		overlay.addClass('is-visible');
		login.addClass('is-selected');
		signup.removeClass('is-selected');
		resetpassword.removeClass('is-selected');
		tabLogin.addClass('selected');
		tabSignup.removeClass('selected');
	}

	function signup_selected(){
		mainNav.children('ul').removeClass('is-visible');
		overlay.addClass('is-visible');
		login.removeClass('is-selected');
		signup.addClass('is-selected');
		resetpassword.removeClass('is-selected');
		tabLogin.removeClass('selected');
		tabSignup.addClass('selected');
	}

	function forgot_password_selected(){
		login.removeClass('is-selected');
		signup.removeClass('is-selected');
		resetpassword.addClass('is-selected');
	}
});
