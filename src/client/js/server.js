"use strict";

class Server {
	static async requestResources(callback) {
		const result = await fetch('./src/php/index.php', {	method : 'POST' })	
		callback(await result.text())
	}

}

export default Server;