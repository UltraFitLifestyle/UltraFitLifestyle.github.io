function addEventHandlers(e,t){$("#arrow-next").click(function(e){e.preventDefault(),slideToNext()}),$("#arrow-prev").click(function(e){e.preventDefault(),slideToPrev()}),$("#jumbotron").mouseenter(function(){void 0!=e&&clearInterval(e)}).mouseleave(function(){void 0!=e&&(e=startInterval(t))}),$(".dot").click(function(){slideToIndex($(this).index())})}function fadeOutIn(e,t,o,n){e.fadeOut(600).removeClass("active-slide"),t.fadeIn(600).addClass("active-slide"),o.removeClass("active-dot"),n.addClass("active-dot")}function slideToNext(){var e=$(".active-slide"),t=e.next(),o=$(".active-dot"),n=o.next();0===t.length&&(t=$(".slide").first(),n=$(".dot").first()),fadeOutIn(e,t,o,n)}function slideToPrev(){var e=$(".active-slide"),t=e.prev(),o=$(".active-dot"),n=o.prev();0===t.length&&(t=$(".slide").last(),n=$(".dot").last()),fadeOutIn(e,t,o,n)}function slideToIndex(e){var t=$(".active-slide"),o=$(".active-dot"),n=$(".slide:eq( "+e+" )"),a=$(".dot:eq( "+e+" )");t.is(n)||fadeOutIn(t,n,o,a)}function startInterval(e){return intervalId=setInterval(function(){slideToNext()},e)}function validateForm(e,t){var o=$("#contact-form > .error"),n=$("#name-input"),a=$("#phone-input"),i=$("#email-input"),l=$("#message-input"),r=$("#yes-input:checked"),s=$("#no-input:checked"),d=$("#love-input"),c=$("#hate-input"),u="b89f3994637b5e34d8b93f0a1978822e";"contact"==e?(o.remove(),0==n.val().length&&n.before('<span class="error">But what should I call you?</span>'),emailValidator=/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/,i.val().match(emailValidator)?(document.body.innerHTML+='<form id="simpleForm" action="http://getsimpleform.com/messages?form_api_token='+u+'" method="post"><input type="hidden" name="redirect_to" value="'+window.location.href+'?thank-you=1" /><input type="hidden" name="name" value="'+n.val()+'" /><input type="hidden" name="phone" value="'+a.val()+'" /><input type="hidden" name="email" value="'+i.val()+'" /><input type="hidden" name="message" value="'+l.val()+'" /></form>',document.getElementById("simpleForm").submit()):i.before('<span class="error">This is how I reply to you</span>')):"accountability"==e&&(o.remove(),0==n.val().length?n.before('<span class="error">But how will I know who you are?</span>'):(document.body.innerHTML+='<form id="simpleForm" action="http://getsimpleform.com/messages?form_api_token='+u+'" method="post"><input type="hidden" name="redirect_to" value="'+window.location.href+'?thank-you=1" /><input type="hidden" name="name" value="'+n.val()+'" /><input type="hidden" name="yes" value="'+r.val()+'" /><input type="hidden" name="no" value="'+s.val()+'" /><input type="hidden" name="love" value="'+d.val()+'" /><input type="hidden" name="hate" value="'+c.val()+'" /><input type="hidden" name="day" value="'+t+'" /></form>',document.getElementById("simpleForm").submit()))}function setCookie(e,t,o,n,a){var i=new Date;i.setTime(i.getTime()+24*o*60*60*1e3);var l="expires="+i.toUTCString(),r="domain="+n,s="path="+a;document.cookie=e+"="+t+";"+l+";"+r+";"+s+";"}function getCookie(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){var a=o[n];for(console.log("entered for loop: "+a);" "==a.charAt(0);)a=a.substring(1),console.log("entered while loop: "+a);if(0==a.indexOf(t))return console.log("FOUND COOKIE: "+a),a.substring(t.length,a.length)}return""}function checkCookie(){var e=getCookie("username");""!=e?alert("Welcome again "+e):(e=prompt("Please enter your name:",""),""!=e&&null!=e&&setCookie("username",e,365))}$(document).ready(function(){var e=4e3;intervalId=startInterval(e),addEventHandlers(intervalId,e)}),$(document).ready(function(){var e=decodeURIComponent(window.location.search.substring(1)),t=e.split("=");"thank-you"===t[0]?$("#contact h1").after('<h2 class="action">I\'ll be in touch with you shortly!</h2>'):"great-job"===t[0]&&$("#contact h1").after('<h2 class="action">Keep up the hard work!</h2>')}),$(document).ready(function(){if(console.log("entered file"),navigator.cookieEnabled){var e,t="subscribed",o=getCookie(t),n="ultrafitlifestyle.github.io",a="/";""!=o?(console.log("cookie is set"),e=getCookie(t),console.log(e)):(console.log("cookie is not set"),setCookie(t,"false",365,n,a),e=getCookie(t),console.log(e))}else console.log("Cookies not enabled")}),document.cookie="subscribed=false; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";