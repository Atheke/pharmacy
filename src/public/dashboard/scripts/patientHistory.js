const endpoint = 'http://localhost:3000/dashboard/history';
function historyData(){

	axios.get(endpoint)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})
}
