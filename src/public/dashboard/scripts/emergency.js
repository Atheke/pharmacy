const endpoint = 'http://localhost:3000/dashboard/emergency';

function emergencyData(){

	axios.get(endpoint)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})
}