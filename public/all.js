function addEventHandlers(e,t){$("#arrow-next").click(function(e){e.preventDefault(),slideToNext()}),$("#arrow-prev").click(function(e){e.preventDefault(),slideToPrev()}),$("#jumbotron").mouseenter(function(){void 0!=e&&clearInterval(e)}).mouseleave(function(){void 0!=e&&(e=startInterval(t))}),$(".dot").click(function(){slideToIndex($(this).index())})}function fadeOutIn(e,t,n,a){e.fadeOut(600).removeClass("active-slide"),t.fadeIn(600).addClass("active-slide"),n.removeClass("active-dot"),a.addClass("active-dot")}function slideToNext(){var e=$(".active-slide"),t=e.next(),n=$(".active-dot"),a=n.next();0===t.length&&(t=$(".slide").first(),a=$(".dot").first()),fadeOutIn(e,t,n,a)}function slideToPrev(){var e=$(".active-slide"),t=e.prev(),n=$(".active-dot"),a=n.prev();0===t.length&&(t=$(".slide").last(),a=$(".dot").last()),fadeOutIn(e,t,n,a)}function slideToIndex(e){var t=$(".active-slide"),n=$(".active-dot"),a=$(".slide:eq( "+e+" )"),i=$(".dot:eq( "+e+" )");t.is(a)||fadeOutIn(t,a,n,i)}function startInterval(e){return intervalId=setInterval(function(){slideToNext()},e)}function validateForm(){var e=$("#contact-form > .error"),t=$("#name-input"),n=$("#phone-input"),a=$("#email-input"),i=$("#message-input"),o="b89f3994637b5e34d8b93f0a1978822e";e.remove(),0==t.val().length&&t.before('<span class="error">But what should I call you?</span>'),emailValidator=/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/,a.val().match(emailValidator)?(document.body.innerHTML+='<form id="simpleForm" action="http://getsimpleform.com/messages?form_api_token='+o+'" method="post"><input type="hidden" name="redirect_to" value="'+window.location.href+'?thank-you=1" /><input type="hidden" name="name" value="'+t.val()+'" /><input type="hidden" name="phone" value="'+n.val()+'" /><input type="hidden" name="email" value="'+a.val()+'" /><input type="hidden" name="message" value="'+i.val()+'" /></form>',document.getElementById("simpleForm").submit()):a.before('<span class="error">This is how I reply to you</span>')}$(document).ready(function(){var e=8e3;intervalId=startInterval(e),addEventHandlers(intervalId,e)}),$(document).ready(function(){var e=decodeURIComponent(window.location.search.substring(1)),t=e.split("=");"thank-you"===t[0]&&$("#contact h1").after('<h2 class="action">I\'ll be in touch with you shortly!</h2>')});