function addEventHandlers(e,t){$("#arrow-next").click(function(e){e.preventDefault(),slideToNext()}),$("#arrow-prev").click(function(e){e.preventDefault(),slideToPrev()}),$("#jumbotron").mouseenter(function(){void 0!=e&&clearInterval(e)}).mouseleave(function(){void 0!=e&&(e=startInterval(t))}),$(".dot").click(function(){slideToIndex($(this).index())})}function fadeOutIn(e,t,n,o){e.fadeOut(600).removeClass("active-slide"),t.fadeIn(600).addClass("active-slide"),n.removeClass("active-dot"),o.addClass("active-dot")}function slideToNext(){var e=$(".active-slide"),t=e.next(),n=$(".active-dot"),o=n.next();0===t.length&&(t=$(".slide").first(),o=$(".dot").first()),fadeOutIn(e,t,n,o)}function slideToPrev(){var e=$(".active-slide"),t=e.prev(),n=$(".active-dot"),o=n.prev();0===t.length&&(t=$(".slide").last(),o=$(".dot").last()),fadeOutIn(e,t,n,o)}function slideToIndex(e){var t=$(".active-slide"),n=$(".active-dot"),o=$(".slide:eq( "+e+" )"),a=$(".dot:eq( "+e+" )");t.is(o)||fadeOutIn(t,o,n,a)}function startInterval(e){return intervalId=setInterval(function(){slideToNext()},e)}function validateForm(e,t){var n=$("#contact-form > .error"),o=$("#name-input"),a=$("#phone-input"),i=$("#email-input"),d=$("#message-input"),r=$("#yes-input:checked"),l=$("#no-input:checked"),c=$("#love-input"),s=$("#hate-input"),u="b89f3994637b5e34d8b93f0a1978822e";"contact"==e?(n.remove(),0==o.val().length&&o.before('<span class="error">But what should I call you?</span>'),emailValidator=/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/,i.val().match(emailValidator)?(document.body.innerHTML+='<form id="simpleForm" action="http://getsimpleform.com/messages?form_api_token='+u+'" method="post"><input type="hidden" name="redirect_to" value="'+window.location.href+'?thank-you=1" /><input type="hidden" name="name" value="'+o.val()+'" /><input type="hidden" name="phone" value="'+a.val()+'" /><input type="hidden" name="email" value="'+i.val()+'" /><input type="hidden" name="message" value="'+d.val()+'" /></form>',document.getElementById("simpleForm").submit()):i.before('<span class="error">This is how I reply to you</span>')):"accountability"==e&&(n.remove(),0==o.val().length?o.before('<span class="error">But how will I know who you are?</span>'):(document.body.innerHTML+='<form id="simpleForm" action="http://getsimpleform.com/messages?form_api_token='+u+'" method="post"><input type="hidden" name="redirect_to" value="'+window.location.href+'?thank-you=1" /><input type="hidden" name="name" value="'+o.val()+'" /><input type="hidden" name="yes" value="'+r.val()+'" /><input type="hidden" name="no" value="'+l.val()+'" /><input type="hidden" name="love" value="'+c.val()+'" /><input type="hidden" name="hate" value="'+s.val()+'" /><input type="hidden" name="day" value="'+t+'" /></form>',document.getElementById("simpleForm").submit()))}function setCookie(e,t,n,o,a){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var d="expires="+i.toUTCString(),r="domain="+o,l="path="+a;document.cookie=e+"="+t+";"+d+";"+r+";"+l+";"}function getCookie(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var a=n[o];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""}function checkCookie(e,t,n){var o=getCookie(e);"true"==o?(setCookie(e,"true",365,t,n),isSubscribed=!0):setCookie(e,"false",365,t,n)}function showModal(){isSubscribed||($("#modal-1").trigger("click"),isSubscribed=!0)}function uncheck(){$(".modal-state:checked").prop("checked",!1).change()}$(document).ready(function(){var e=4e3;intervalId=startInterval(e),addEventHandlers(intervalId,e)}),$(document).ready(function(){var e=decodeURIComponent(window.location.search.substring(1)),t=e.split("=");"thank-you"===t[0]?$("#contact h1").after('<h2 class="action">I\'ll be in touch with you shortly!</h2>'):"great-job"===t[0]&&$("#contact h1").after('<h2 class="action">Keep up the hard work!</h2>')});var isSubscribed=!1;$(document).ready(function(){var e="subscribed",t="ultrafitlifestyle.github.io",n="/";navigator.cookieEnabled&&checkCookie(e,t,n),$("#hide-forever, .mc-embedded-subscribe").on("click",function(){setCookie(e,"true",365,t,n),isSubscribed=!0}),$("#modal-1").on("change",function(){$(this).is(":checked")?$("body").addClass("modal-open"):$("body").removeClass("modal-open")}),$(".modal-fade-screen").on("click",function(e){"modal-fade-screen"===e.target.className&&uncheck()}),$(".modal-inner").on("click",function(e){"modal-close"===e.target.className&&uncheck()}),$(window).scroll(function(){$(window).scrollTop()+$(window).height()>$(document).height()-100&&setTimeout(showModal(),300)})});