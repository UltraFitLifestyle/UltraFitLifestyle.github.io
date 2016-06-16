function validateForm(id, day){
	var $errors = $('#contact-form > .error'),
		$name = $('#name-input'),
		$phone = $('#phone-input'),
		$email = $('#email-input'),
		$message = $('#message-input'),
		$yes = $('#yes-input:checked'),
		$no = $('#no-input:checked'),
		$love = $('#love-input'),
		$hate = $('#hate-input'),
		SIMPLE_FORM_PUBLIC_API_TOKEN = 'b89f3994637b5e34d8b93f0a1978822e';   //<-Rachel's
		//SIMPLE_FORM_PUBLIC_API_TOKEN = '9d680f78a3e2072320de5536eb60ffc2';  // <-Todd's
	
	if( id == "contact" ){	
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
	} else if ( id == "accountability" ) {
		$errors.remove();
		
		if( $name.val().length == 0 ) {
			$name.before('<span class="error">But how will I know who you are?</span>');
		} else {
			document.body.innerHTML +=
				'<form id="simpleForm" action="http://getsimpleform.com/messages?form_api_token=' +
				 SIMPLE_FORM_PUBLIC_API_TOKEN +
				 '" method="post">' +
				'<input type="hidden" name="redirect_to" value="'+window.location.href+'?thank-you=1" />' +
				'<input type="hidden" name="name" value="'+$name.val()+'" />' +
				'<input type="hidden" name="yes" value="'+$yes.val()+'" />' +
				'<input type="hidden" name="no" value="'+$no.val()+'" />' +
				'<input type="hidden" name="love" value="'+$love.val()+'" />' +
				'<input type="hidden" name="hate" value="'+$hate.val()+'" />' +
				'<input type="hidden" name="day" value="'+ day +'" />' +
				'</form>';
			document.getElementById("simpleForm").submit();
		}
	} else if ( id == "intake" ) {
		var	$name = $('#name');
		if( $name.val().length == 0 ) {
			$name.before('<span class="error">But how will I know who you are?</span>');
		} else {
			var	$email = $('#email'),
				$address = $('#address'),
				$phone = $('#phone'),
				$emergency = $('#emergency'),
				$results = $('#results'),
				$why = $('#why'),
				$how = $('#how'),
				$workYes = $('#work-yes:checked'),
				$workNo = $('#work-no:checked'),
				$work = $('#work'),
				$relationshipsYes = $('#relationships-yes:checked'),
				$relationshipsNo = $('#relationships-no:checked'),
				$relationships = $('#relationships'),
				$scale = $('#scale'),
				$different = $('#different'),
				$pastYes = $('#past-yes:checked'),
				$pastNo = $('#past-no:checked'),
				$past = $('#past'),
				$goal = $('#goal'),
				$family = $('#family'),
				$time = $('#time'),
				$hobbies = $('#hobbies'),
				$heartYes = $('#heart-yes:checked'),
				$heartNo = $('#heart-no:checked'),
				$heart = $('#heart'),
				$painYes = $('#pain-yes:checked'),
				$painNo = $('#pain-no:checked'),
				$pain = $('#pain'), 
				$diebetesYes = $('#diebetes-yes:checked'),
				$diebetesNo = $('#diebetes-no:checked'),
				$diebetes = $('#diebetes'),
				$epilepsyYes = $('#epilepsy-yes:checked'),
				$epilepsyNo = $('#epilepsy-no:checked'),
				$epilepsy = $('#epilepsy'),
				$injuryYes = $('#injury-yes:checked'),
				$injuryNo = $('#injury-no:checked'),
				$injury = $('#injury'),
				$neckYes = $('#neck-yes:checked'),
				$neckNo = $('#neck-no:checked'),
				$neck = $('#neck'),
				$bloodYes = $('#blood-yes:checked'),
				$bloodNo = $('#blood-no:checked'),
				$blood = $('#blood'),
				$respiratoryYes = $('#respiratory-yes:checked'),
				$respiratoryNo = $('#respiratory-no:checked'),
				$respiratory = $('#respiratory'),
				$dizzinessYes = $('#dizziness-yes:checked'),
				$dizzinessNo = $('#dizziness-no:checked'),
				$dizziness = $('#dizziness'),
				$birthYes = $('#birth-yes:checked'),
				$birthNo = $('#birth-no:checked'),
				$birth = $('#birth'),
				$operationYes = $('#operation-yes:checked'),
				$operationNo = $('#operation-no:checked'),
				$operation = $('#operation'),
				$medicationsYes = $('#medications-yes:checked'),
				$medicationsNo = $('#medications-no:checked'),
				$medications = $('#medications'),
				$otherYes = $('#other-yes:checked'),
				$otherNo = $('#other-no:checked'),
				$other = $('#other'),
				$weakYes = $('#weak-yes:checked'),
				$weakNo = $('#weak-no:checked'),
				$weak = $('#weak'),
				$water = $('#water'),
				$meals = $('#meals'),
				$breakfastYes = $('#breakfast-yes:checked'),
				$breakfastNo = $('#breakfast-no:checked'),
				$breakfast = $('#breakfast'),
				$supplementsYes = $('#supplements-yes:checked'),
				$supplementsNo = $('#supplements-no:checked'),
				$supplements = $('#supplements'),
				$craveYes = $('#crave-yes:checked'),
				$craveNo = $('#crave-no:checked'),
				$crave = $('#crave'),
				$coffee = $('#coffee'),
				$digestiveYes = $('#digestive-yes:checked'),
				$digestiveNo = $('#digestive-no:checked'),
				$digestive = $('#digestive'),
				$sleepYes = $('#sleep-yes:checked'),
				$sleepNo = $('#sleep-no:checked'),
				$sleep = $('#sleep'),
				$nutritionYes = $('#nutrition-yes:checked'),
				$nutritionNo = $('#nutrition-no:checked'),
				$nutrition = $('#nutrition'),
				$scaleYes = $('#scale-yes:checked'),
				$scaleNo = $('#scale-no:checked'),
				$scale = $('#scale'),
				$long = $('#long'),
				$type = $('#type'),
				$stopped = $('#stopped'),
				$happy = $('#happy'),
				$breakfast2 = $('#breakfast2'),
				$lunch = $('#lunch'),
				$dinner = $('#dinner'),
				$snacks = $('#snacks'),
				$alcohol = $('#alcohol'),
				$smokeYes = $('#smoke-yes:checked'),
				$smokeNo = $('#smoke-no:checked'),
				$smoke = $('#smoke');
		
			document.body.innerHTML +=
				'<form id="simpleForm" action="http://getsimpleform.com/messages?form_api_token=' +
				 SIMPLE_FORM_PUBLIC_API_TOKEN +
				 '" method="post">' +
				'<input type="hidden" name="redirect_to" value="'+window.location.href+'?thank-you=1" />' +
				'<input type="hidden" name="intake-form" value="true" />' +
				'<input type="hidden" name="name" id="name" value="'+$name.val()+'" />' +
				'<input type="hidden" name="email" id="email" value="'+$email.val()+'" />' +
				'<input type="hidden" name="address" id="address" value="'+$address.val()+'" />' +
				'<input type="hidden" name="phone" id="phone" value="'+$phone.val()+'" />' +
				'<input type="hidden" name="emergency" id="emergency" value="'+$emergency.val()+'" />' +
				'<input type="hidden" name="results" id="results" value="'+$results.val()+'" />' +
				'<input type="hidden" name="why" id="why" value="'+$why.val()+'" />' +
				'<input type="hidden" name="how" id="how" value="'+$how.val()+'" />' +
				'<input type="hidden" name="work-yes" value="'+$workYes.val()+'" />' +
				'<input type="hidden" name="work-no" value="'+$workNo.val()+'" />' +
				'<input type="hidden" name="work" id="work" value="'+$work.val()+'" />' +
				'<input type="hidden" name="relationships-yes" value="'+$relationshipsYes.val()+'" />' +
				'<input type="hidden" name="relationships-no" value="'+$relationshipsNo.val()+'" />' +
				'<input type="hidden" name="relationships" id="relationships" value="'+$relationships.val()+'" />' +
				'<input type="hidden" name="scale" id="scale" value="'+$scale.val()+'" />' +
				'<input type="hidden" name="different" id="different" value="'+$different.val()+'" />' +
				'<input type="hidden" name="past-yes" value="'+$pastYes.val()+'" />' +
				'<input type="hidden" name="past-no" value="'+$pastNo.val()+'" />' +
				'<input type="hidden" name="past" id="past" value="'+$past.val()+'" />' +
				'<input type="hidden" name="goal" id="goal" value="'+$goal.val()+'" />' +
				'<input type="hidden" name="family" id="family" value="'+$family.val()+'" />' +
				'<input type="hidden" name="time" id="time" value="'+$time.val()+'" />' +
				'<input type="hidden" name="hobbies" id="hobbies" value="'+$hobbies.val()+'" />' +
				'<input type="hidden" name="heart-yes" value="'+$heartYes.val()+'" />' +
				'<input type="hidden" name="heart-no" value="'+$heartNo.val()+'" />' +
				'<input type="hidden" name="heart" id="heart" value="'+$heart.val()+'" />' +
				'<input type="hidden" name="pain-yes" value="'+$painYes.val()+'" />' +
				'<input type="hidden" name="pain-no" value="'+$painNo.val()+'" />' +
				'<input type="hidden" name="pain" id="pain" value="'+$pain.val()+'" />' + 
				'<input type="hidden" name="diebetes-yes" value="'+$diebetesYes.val()+'" />' +
				'<input type="hidden" name="diebetes-no" value="'+$diebetesNo.val()+'" />' +
				'<input type="hidden" name="diebetes" id="diebetes" value="'+$diebetes.val()+'" />' +
				'<input type="hidden" name="epilepsy-yes" value="'+$epilepsyYes.val()+'" />' +
				'<input type="hidden" name="epilepsy-no" value="'+$epilepsyNo.val()+'" />' +
				'<input type="hidden" name="epilepsy" id="epilepsy" value="'+$epilepsy.val()+'" />' +
				'<input type="hidden" name="injury-yes" value="'+$injuryYes.val()+'" />' +
				'<input type="hidden" name="injury-no" value="'+$injuryNo.val()+'" />' +
				'<input type="hidden" name="injury" id="injury" value="'+$injury.val()+'" />' +
				'<input type="hidden" name="neck-yes" value="'+$neckYes.val()+'" />' +
				'<input type="hidden" name="neck-no" value="'+$neckNo.val()+'" />' +
				'<input type="hidden" name="neck" id="neck" value="'+$neck.val()+'" />' +
				'<input type="hidden" name="blood-yes" value="'+$bloodYes.val()+'" />' +
				'<input type="hidden" name="blood-no" value="'+$bloodNo.val()+'" />' +
				'<input type="hidden" name="blood" id="blood" value="'+$blood.val()+'" />' +
				'<input type="hidden" name="respiratory-yes" value="'+$respiratoryYes.val()+'" />' +
				'<input type="hidden" name="respiratory-no" value="'+$respiratoryNo.val()+'" />' +
				'<input type="hidden" name="respiratory" id="respiratory" value="'+$respiratory.val()+'" />' +
				'<input type="hidden" name="dizziness-yes" value="'+$dizzinessYes.val()+'" />' +
				'<input type="hidden" name="dizziness-no" value="'+$dizzinessNo.val()+'" />' +
				'<input type="hidden" name="dizziness" id="dizziness" value="'+$dizziness.val()+'" />' +
				'<input type="hidden" name="birth-yes" value="'+$birthYes.val()+'" />' +
				'<input type="hidden" name="birth-no" value="'+$birthNo.val()+'" />' +
				'<input type="hidden" name="birth" id="birth" value="'+$birth.val()+'" />' +
				'<input type="hidden" name="operation-yes" value="'+$operationYes.val()+'" />' +
				'<input type="hidden" name="operation-no" value="'+$operationNo.val()+'" />' +
				'<input type="hidden" name="operation" id="operation" value="'+$operation.val()+'" />' +
				'<input type="hidden" name="medications-yes" value="'+$medicationsYes.val()+'" />' +
				'<input type="hidden" name="medications-no" value="'+$medicationsNo.val()+'" />' +
				'<input type="hidden" name="medications" id="medications" value="'+$medications.val()+'" />' +
				'<input type="hidden" name="other-yes" value="'+$otherYes.val()+'" />' +
				'<input type="hidden" name="other-no" value="'+$otherNo.val()+'" />' +
				'<input type="hidden" name="other" id="other" value="'+$other.val()+'" />' +
				'<input type="hidden" name="weak-yes" value="'+$weakYes.val()+'" />' +
				'<input type="hidden" name="weak-no" value="'+$weakNo.val()+'" />' +
				'<input type="hidden" name="weak" id="weak" value="'+$weak.val()+'" />' +
				'<input type="hidden" name="water" id="water" value="'+$water.val()+'" />' +
				'<input type="hidden" name="meals" id="meals" value="'+$meals.val()+'" />' +
				'<input type="hidden" name="breakfast-yes" value="'+$breakfastYes.val()+'" />' +
				'<input type="hidden" name="breakfast-no" value="'+$breakfastNo.val()+'" />' +
				'<input type="hidden" name="breakfast" id="breakfast" value="'+$breakfast.val()+'" />' +
				'<input type="hidden" name="supplements-yes" value="'+$supplementsYes.val()+'" />' +
				'<input type="hidden" name="supplements-no" value="'+$supplementsNo.val()+'" />' +
				'<input type="hidden" name="supplements" id="supplements" value="'+$supplements.val()+'" />' +
				'<input type="hidden" name="crave-yes" value="'+$craveYes.val()+'" />' +
				'<input type="hidden" name="crave-no" value="'+$craveNo.val()+'" />' +
				'<input type="hidden" name="crave" id="crave" value="'+$crave.val()+'" />' +
				'<input type="hidden" name="coffee" id="coffee" value="'+$coffee.val()+'" />' +
				'<input type="hidden" name="digestive-yes" value="'+$digestiveYes.val()+'" />' +
				'<input type="hidden" name="digestive-no" value="'+$digestiveNo.val()+'" />' +
				'<input type="hidden" name="digestive" id="digestive" value="'+$digestive.val()+'" />' +
				'<input type="hidden" name="sleep-yes" value="'+$sleepYes.val()+'" />' +
				'<input type="hidden" name="sleep-no" value="'+$sleepNo.val()+'" />' +
				'<input type="hidden" name="sleep" id="sleep" value="'+$sleep.val()+'" />' +
				'<input type="hidden" name="nutrition-yes" value="'+$nutritionYes.val()+'" />' +
				'<input type="hidden" name="nutrition-no" value="'+$nutritionNo.val()+'" />' +
				'<input type="hidden" name="nutrition" id="nutrition" value="'+$nutrition.val()+'" />' +
				'<input type="hidden" name="scale-yes" value="'+$scaleYes.val()+'" />' +
				'<input type="hidden" name="scale-no" value="'+$scaleNo.val()+'" />' +
				'<input type="hidden" name="scale" id="scale" value="'+$scale.val()+'" />' +
				'<input type="hidden" name="long" id="long" value="'+$long.val()+'" />' +
				'<input type="hidden" name="type" id="type" value="'+$type.val()+'" />' +
				'<input type="hidden" name="stopped" id="stopped" value="'+$stopped.val()+'" />' +
				'<input type="hidden" name="happy" id="happy" value="'+$happy.val()+'" />' +
				'<input type="hidden" name="breakfast2" id="breakfast2" value="'+$breakfast2.val()+'" />' +
				'<input type="hidden" name="lunch" id="lunch" value="'+$lunch.val()+'" />' +
				'<input type="hidden" name="dinner" id="dinner" value="'+$dinner.val()+'" />' +
				'<input type="hidden" name="snacks" id="snacks" value="'+$snacks.val()+'" />' +
				'<input type="hidden" name="alcohol" id="alcohol" value="'+$alcohol.val()+'" />' +
				'<input type="hidden" name="smoke-yes" value="'+$smokeYes.val()+'" />' +
				'<input type="hidden" name="smoke-no" value="'+$smokeNo.val()+'" />' +
				'<input type="hidden" name="smoke" id="smoke" value="'+$smoke.val()+'" />' +
				'</form>';
			document.getElementById("simpleForm").submit();
		}
	}
}

$(document).ready(function() {
	var suffix = decodeURIComponent(window.location.search.substring(1));
	var value = suffix.split("=");
	if( value[0] === 'thank-you' ) {
		$('#contact h1').after('<h2 class="action">I\'ll be in touch with you shortly!</h2>');
		$('.intake h1').after("<h2 class='action'>Thank you. You're now on your way to living the UltraFitLifestyle!</h2>");
	} else if ( value[0] === 'great-job' ) {
		$('#contact h1').after('<h2 class="action">Keep up the hard work!</h2>');	
	}
});