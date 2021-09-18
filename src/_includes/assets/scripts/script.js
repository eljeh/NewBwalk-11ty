function getViewportWidth() {
	if (window.innerWidth) {
		return window.innerWidth;
	}
	else if (document.body && document.body.offsetWidth) {
		return document.body.offsetWidth;
	}
	else {
		return 0;
	}
}

function getViewportHeight() {
	if (window.innerHeight) {
		return window.innerHeight;
	}
	else if (document.body && document.body.offsetHeight) {
		return document.body.offsetHeight;
	}
	else {
		return 0;
	}
}


