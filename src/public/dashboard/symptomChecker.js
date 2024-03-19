const checkSymptoms = document.getElementById('checkSymptoms');
const questions = document.querySelector('.questions');
const duration = document.querySelector('.durationQuestions');
const disease = document.querySelector('.diseaseQuestions');


checkSymptoms.addEventListener('click', () => {

	allergydiv.style.display = 'none';
	medicationdiv.style.display = 'none';
	historydiv.style.display = 'none';
	questions.style.visibility = 'visible';
	console.log("works");
	const result = {
		symptoms: []
	};
	let selected = null;
	const container = document.querySelector('.container2');
	const submit = document.querySelector('#submit');
	const options = document.querySelectorAll('input[type="radio"][name="severity"]');

	submit.addEventListener('click', () => {

		options.forEach(option => {

			if (option.checked) {
				selected = option.value;
				result.symptoms.push(selected);
			}
		})

		questions.innerHTML = `
		<h3>What is the duration of your symptoms</h3>
		<input type="radio" id="brief" name="length" value="3">
		<label for="brief">1-4 days</label><br>
		<input type="radio" id="medium" name="length" value="6">
		<label for="medium">4-7 days</label><br>
		<input type="radio" id="long" name="length" value="10">
		<label for="long"> more than 7 days</label>
		<div> <button id="submission">Submit</button> </div>
		`;
		// duration.style.visibility = 'visible';
		console.log(result.symptoms);

		const submission = document.querySelector('#submission');
		const choices = document.querySelectorAll('input[type="radio"][name="length"]');

		submission.addEventListener('click', () => {

			choices.forEach(option => {
				if (option.checked) {
					selected = option.value;
					result.symptoms.push(selected);
				}
			})

			//disease.style.visibility = 'visible';
			questions.innerHTML = `
		<h3>Which symptom is applicable to you</h3>
		<input type="checkbox" id="cough" name="symptoms" value="Cough">
		<label for="cough">Cough</label><br>
		<input type="checkbox" id="headache" name="symptoms" value="headache">
		<label for="headache">Headache</label><br>
		<input type="checkbox" id="fever" name="symptoms" value="fever">
		<label for="fever">Fever</label>
		<div> <button id="send">Submit</button> </div>`;
			console.log(result.symptoms);
			const send = document.querySelector('#send');


			send.addEventListener('click', () => {
				// console.log("events");
				selectionProcess(result);
				console.log("we are out");
			})
		})

	});
	

});


function selectionProcess(result) {


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

		console.log("does selected id become none");
		questions.innerHTML = '';

		axios.post(endpoint, result)
			.then(response => {

				console.log(response.data);
				const data = response.data;
				const diseases = Object.keys(data);
				if (diseases == '') {
					const resultdiv = document.createElement('div');
					resultdiv.textContent = "Sorry symptoms does not match to any disease , you are probably gonna die";
					questions.appendChild(resultdiv);
				}
				else {
					diseases.forEach(disease => {
						console.log(disease);
						const resultdiv = document.createElement('div');
						resultdiv.textContent = `you have disease ${disease}`;
						questions.appendChild(resultdiv);

					})

				}

				return;
			})
			.catch(error => {
				console.log(error);
			});

	}


	else {
		displaySymptoms(result , endpoint);
	}
}

function displaySymptoms(result , endpoint)
{
	// Send the selected result to the server
	axios.post(endpoint, result)
		.then(response => {
			// Clear previous radio buttons
			questions.innerHTML = '';
			console.log(response);
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
			radioButton.value = 'none';
			radioButton.name = 'symptoms';

			const label = document.createElement('label');
			label.htmlFor = 'none';
			label.textContent = 'none';

			questions.appendChild(radioButton);
			questions.appendChild(label);
			questions.appendChild(document.createElement('br'));

			//create submit button
			const submit = document.createElement('button');
			submit.innerText = 'Submit';
			submit.id = 'submit';
			questions.appendChild(submit);

			// If the user selects the none option all the other option selected gets unselectedX
			const noneCheckbox = document.querySelector('#none');
			let checkboxes = document.querySelectorAll('input[type="checkbox"][name="symptoms"]');

			checkboxes.forEach(checkbox => {
				checkbox.addEventListener('change', () => {
					if (checkbox === noneCheckbox && checkbox.checked) {
						// If "none" checkbox is checked, uncheck all other checkboxes
						checkboxes.forEach(cb => {
							if (cb !== noneCheckbox) {
								cb.checked = false;
							}
						});
					} else if (checkbox.checked && noneCheckbox.checked) {
						// If any other checkbox is checked while "none" checkbox is checked, uncheck "none"
						noneCheckbox.checked = false;
					}
				});
			});
			// Continue the process recursively


			submit.addEventListener('click', () => selectionProcess(result));
		})
		.catch(error => {
			// Handle error
			console.log(error);
		});
}

