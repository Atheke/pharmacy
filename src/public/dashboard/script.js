// handles all events on the dashboard
//const patientHistory = document.getElementById('patientHistory');
//const currentMedication = document.getElementById('currentMedication');
//const patientAllergies = document.getElementById('patientAllergies');
const appointmentScheduler = document.getElementById('appointments');
const health = document.getElementById('health');
// const checkSymptoms = document.getElementById('checkSymptoms');
const emergencyServices = document.getElementById('emergencyServices');
const logout = document.getElementById('logout');
const dashboardItems = document.querySelectorAll('.dashboard-item');

dashboardItems.forEach(item => {
	item.addEventListener('click', function () {
		// Toggle the 'selected' class on click
		this.classList.toggle('selected');

		// Deselect other items
		dashboardItems.forEach(otherItem => {
			if (otherItem !== this) {
				otherItem.classList.remove('selected');
			}
		});
	});
});


axios.get("/dashboard/username")
	.then(response => {
		console.log(response);
		document.getElementById('userName').innerText = response.data;
	})
	.catch(error => {
		console.log(error);
	});


health.addEventListener('click', function () {
	console.log("working");
	const endpoint = 'http://localhost:3000/dashboard/healthInfo';

	axios.get(endpoint)
		.then(response => {

			console.log(response);

		})
		.catch(error => {
			console.log(error);
		});

});


appointmentScheduler.addEventListener('click', () => {
	//stuff
});







logout.addEventListener('click', () => {
	axios.get('http://localhost:3000/logout')
		.then(response => {
			window.location.href = '/';
		}).error(error => {
			console.log(error);

		});
});


