const endpoint = 'http://localhost:3000/dashboard/appointment';

function appointmentData(){

	axios.get(endpoint)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})
}
