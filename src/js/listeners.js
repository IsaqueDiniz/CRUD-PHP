"use strict";

class Listeners {

	static set(ref, callback, event) {
		if(!event) {
			document.getElementById(ref)
				.addEventListener('click', callback);
		}else {
			document.getElementById(ref)
				.addEventListener(event, callback);			
		}
	}

}

export default Listeners;