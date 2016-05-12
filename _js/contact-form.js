function validateForm(){
	var $errors = $('#contact-form > .error'),
		$name = $('#name-input'),
		$phone = $('#phone-input'),
		$email = $('#email-input'),
		$message = $('#message-input'),
		SIMPLE_FORM_PUBLIC_API_TOKEN = 'b89f3994637b5e34d8b93f0a1978822e';
	
	$errors.remove();
	
	if( $name.val().length == 0 ) {
		$name.before('<span class="error">But what should I call you?</span>');
	}
	
	emailValidator = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
	
	if( $email.val().match(emailValidator) ){
		document.body.innerHTML += 
			'<form id="simpleForm" action="http://getsimpleform.com/messages?form_api_token=' +
			 SIMPLE_FORM_PUBLIC_API_TOKEN +
			 '" method="post">' +
			'<input type="hidden" name="redirect_to" value="'+window.location.href+'?thank-you=1" />' +
			'<input type="hidden" name="name" value="'+$name.val()+'" />' +
			'<input type="hidden" name="phone" value="'+$phone.val()+'" />' +
			'<input type="hidden" name="email" value="'+$email.val()+'" />' +
			'<input type="hidden" name="message" value="'+$message.val()+'" />' +
			'</form>';
		document.getElementById("simpleForm").submit();
	} else {
		$email.before('<span class="error">This is how I reply to you</span>');
	}
}

$(document).ready(function() {
	var suffix = decodeURIComponent(window.location.search.substring(1));
	var value = suffix.split("=");
	if( value[0] === 'thank-you' ) {
		$('#contact h1').after('<h2 class="action">I\'ll be in touch with you shortly!</h2>');
	}
});