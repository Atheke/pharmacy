const endpoint = 'http://localhost:3000/dashboard/symptoms';

function symptomsData(){

	axios.get(endpoint)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})
}
