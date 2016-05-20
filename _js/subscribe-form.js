$(document).ready(function(){
console.log("entered file");
	if( navigator.cookieEnabled ) {
		var cstring = "subscribed",
			cname = getCookie(cstring),
			cvalue = "false",
			isSubscribed,
			domainName = "ultrafitlifestyle.github.io",
			path = "/";
			
		if(cname != "" ){
			//Cookie is set
console.log("cookie is set");
			isSubscribed = getCookie(cstring);
console.log(isSubscribed);
		} else {
			//No cookie
console.log("cookie is not set");			
			setCookie(cstring, "false", 365, domainName, path);
			isSubscribed = getCookie(cstring);			
console.log(isSubscribed);			
		}
	} else {
console.log("Cookies not enabled");
	}
});

document.cookie = "subscribed=false; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

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
console.log("entered for loop: " + c);        
        while (c.charAt(0)==' ') {
            c = c.substring(1);
console.log("entered while loop: " + c);            
        }
        if (c.indexOf(name) == 0) {
console.log("FOUND COOKIE: " + c);        
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function checkCookie() {
    var username=getCookie("username");
    if (username!="") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}