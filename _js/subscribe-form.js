var isSubscribed = false;
$(document).ready(function(){
	var cstring = "subscribed",
		domainName = "ultrafitlifestyle.github.io",
		path = "/";
		
	if( navigator.cookieEnabled ) {
		checkCookie(cstring, domainName, path);
	}
	
	$('#hide-forever, .mc-embedded-subscribe').on('click', function(){
		setCookie(cstring, "true", 365, domainName, path);
		isSubscribed = true;
	});
	
	$("#modal-1").on("change", function() {
		if ($(this).is(":checked")) {
			$("body").addClass("modal-open");
		} else {
			$("body").removeClass("modal-open");
		}
	});
	$(".modal-fade-screen").on("click", function(event) {
		if( event.target.className === "modal-fade-screen" ) {
			uncheck();
		}
	});
	$(".modal-inner").on("click", function(event) {
		if( event.target.className === "modal-close" ) {
			uncheck();
		}
	});
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			setTimeout(showModal(), 300);
		}
	});	
});


function setCookie(cname, cvalue, exdays, domainName, pathName) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var domain = "domain="+domainName;
    var path = "path="+pathName;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";" + domain + ";" + path + ";";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];  
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function checkCookie(cstring, domainName, path){
	var cname = getCookie(cstring),
		cvalue = "false";
		
	if(cname == "true" ){
		//Update cookie
		setCookie(cstring, "true", 365, domainName, path);
		isSubscribed = true;
	} else {
		//No cookie or false cookie found, set/update it
		setCookie(cstring, "false", 365, domainName, path);
	}
}

function showModal(){
	if(!isSubscribed){
		$("#modal-1").trigger("click");
		isSubscribed = true;
	}
}

function uncheck() {
	$(".modal-state:checked").prop("checked", false).change();
}