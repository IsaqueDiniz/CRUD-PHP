"use strict";

class Server {

	static async getResource() {
		function myPromise(time) {
			return new Promise((resolve, reject) => {
				setTimeout(() => resolve({ "nome" : "Isaque" }), time * 1000);
			}) 
		} 

		try{
			console.log('Esperando resolução')
			const result = await myPromise(5);
			console.log(result);
		}catch (err) {	
			console.log(err);
		}
	}

}

export default Server;