	var nav = document.querySelector("nav"), navtoggle = document.querySelector(".menu-toggle");
	if (navtoggle) {
		navtoggle.addEventListener( "click",
			function(e) {
				if (nav.className == "open") {
					nav.className ="";
				} else {
					nav.className = "open";
				}
				e.preventDefault();
			}, false);
	}
