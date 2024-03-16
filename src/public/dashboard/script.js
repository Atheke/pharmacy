// handles all events on the dashboard
const patientHistory = document.getElementById('patientHistory');
const currentMedication = document.getElementById('currentMedication');
const patientAllergies = document.getElementById('patientAllergies');
const appointmentScheduler = document.getElementById('appointments');
const health = document.getElementById('health');
const checkSymptoms = document.getElementById('checkSymptoms');
const emergencyServices = document.getElementById('emergencyServices');
const logout = document.getElementById('logout');
const dashboardItems = document.querySelectorAll('.dashboard-item');

dashboardItems.forEach(item => {
    item.addEventListener('click', function() {
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
		  document.getElementById('userName').innerText = response.username;
	})
	.catch(error => {
		console.log(error);
	});


	health.addEventListener('click' , function() {
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
	

patientHistory.addEventListener('click' , () => {
	
	const endpoint = 'http://localhost:3000/dashboard/patientHistory';
	
	axios.get(endpoint)
		.then(response => {

			console.log(response);

		})
		.catch(error => {
			console.log(error);
		});


});

currentMedication.addEventListener('click' , () => {
	const endpoint = 'http://localhost:3000/dashboard/currentMedication';
	
	axios.get(endpoint)
		.then(response => {

			console.log(response);

		})
		.catch(error => {
			console.log(error);
		});

});

patientAllergies.addEventListener('click' , () => {
	const endpoint = 'http://localhost:3000/dashboard/allergies';
	axios.get(endpoint)
		.then(response => {
			console.log(response);
			const container = document.querySelector('.container2');
			// clears out of the section so that it does not repeat on every click
			container.innerHTML = " ";
			const allergy_container = document.createElement('div');
			allergy_container.classList.add('allergy-container');
			for(let i = 0 ; i < response.data.length ; i++)
			{
				const div = document.createElement('div');
				div.classList.add('allergy-items');
				div.innerText = response.data[i];
				allergy_container.appendChild(div);
			}
			container.appendChild(allergy_container);
				})
		.catch(error => {
			console.log(error);
		});

});


appointmentScheduler.addEventListener('click' , ()=> {
	//stuff
});



checkSymptoms.addEventListener('click' , () => {

	const endpoint = 'http://localhost:3000/dashboard/symptoms';
	const questions = document.querySelector('.questions');
	questions.style.display = 'block';
	const submit = document.querySelector('#submit');
	
	submit.addEventListener('click' , () => {
		let selectedId = null;
		
		const radioBtns = document.querySelectorAll('input[type="radio"][name="symptoms"]');
		const result = {
			systom:[]
			
		}	
    radioBtns.forEach(radio => {
        if (radio.checked) {
            selectedId = radio.id;
			result.systom.push(selectedId);
        }
    });
		console.log(selectedId);
   axios.post(endpoint , result)
		.then(response => {
				//response it
		})
		.catch( error => {
				//error
		});

	});


});


emergencyServices.addEventListener('click' , () => {
	emergencyData();
});

logout.addEventListener('click', () => {
	 axios.get('http://localhost:3000/dashboard/logout');
});
