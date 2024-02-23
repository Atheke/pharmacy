const endpoint = 'http://localhost:3000/dashboard/allergies';

function alllergiesData(){

	axios.get(endpoint)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})
}
