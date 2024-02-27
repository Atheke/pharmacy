const endpoint = 'http://localhost:3000/dashboard/medication';

function medicationData(){

	axios.get(endpoint)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})
}
