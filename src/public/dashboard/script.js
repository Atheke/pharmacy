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
		  document.getElementById('userName').innerText = response.data;
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

	const result = {
        symptoms: []
    };
	const questions = document.querySelector('.questions');
	questions.style.display = 'block';
	const submit = document.querySelector('#submit');
	
	submit.addEventListener('click' , () => selectionProcess(result));

	//selection process exits when the option selected is none
	axios.post('http://localhost:3000/dashboard/symptoms' , result)
		.then(response => 
			{})
		.catch(error => {
			console.log(error);
		});
});


function selectionProcess(result)
{
	
	const questions = document.querySelector('.questions');
	let selectedId = null;
	const endpoint = 'http://localhost:3000/dashboard/symptoms';
    const checkOptions = document.querySelectorAll('input[type="checkbox"][name="symptoms"]');
   

    // Get the selected radio button
    checkOptions.forEach(options => {
        if (options.checked) {
            selectedId = options.id;
            result.symptoms.push(selectedId);
        }
    });
	console.log(result.symptoms);

    // If 'none' is selected, stop the recursion
    if (selectedId === 'none') {
		console.log('this is exit the none');
		axios.post(endpoint, result);
        return;
    }

   

    // Send the selected result to the server
    axios.post(endpoint, result)
        .then(response => {
            // Clear previous radio buttons
            questions.innerHTML = '';

            // Display response as radio buttons
            for (let i = 0; i < response.data.length; i++) {
                const radioButton = document.createElement('input');
                radioButton.type = 'checkbox';
                radioButton.id = response.data[i]; // Set id based on symptom
                radioButton.name = 'symptoms';

                const label = document.createElement('label');
                label.htmlFor = radioButton.id;
                label.textContent = response.data[i];

                questions.appendChild(radioButton);
                questions.appendChild(label);
                questions.appendChild(document.createElement('br'));
            }

			//create none option
			const radioButton = document.createElement('input');
                radioButton.type = 'checkbox';
                radioButton.id = 'none'; // Set id based on symptom
                radioButton.name = 'symptoms';

                const label = document.createElement('label');
                label.htmlFor = 'none';
                label.textContent = 'none';

                questions.appendChild(radioButton);
                questions.appendChild(label);

			//create submit button
			const submit = document.createElement('button');
			submit.innerText = 'Submit';
			submit.id = 'submit';
			questions.appendChild(submit);
            // Continue the process recursively
			submit.addEventListener('click' , () => selectionProcess(result));
        })
        .catch(error => {
            // Handle error
			console.log(error);
        });
}




emergencyServices.addEventListener('click' , () => {
	emergencyData();
});

logout.addEventListener('click', () => {
	axios.get('http://localhost:3000/logout')
	.then(response => {
	   window.location.href = '/';
	}).error(error => {
	   console.log(error);

	});
});


