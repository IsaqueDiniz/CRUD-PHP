"use strict";
/////////////////////////////////////////////
// A SIMPLE CLASS WITH Event Handlers methods

class Listeners {

	static set(ref, callback, e) {
		const event = e || 'click';

		if(typeof ref === 'string'){
			document.getElementById(ref)
				.addEventListener(event, callback);			
		}else {
			ref.addEventListener(event, callback);
		}
	}

	static remove(ref, callback, e){
		const event = e || 'click';

		if(typeof ref == 'string'){
			document.getElementById(ref)
				.removeEventListener(event, callback);
		}else{
			ref.removeEventListener(event, callback);
		}
	}

}

export default Listeners;