const checkSymptoms = document.getElementById('checkSymptoms');
const questions = document.querySelector('.questions');
const submitBtn = document.getElementById('submit');
const radioBtn = document.querySelectorAll('input[type ="radio"][name ="infant"]');




checkSymptoms.addEventListener('click', () => {

	allergydiv.style.display = 'none';
	medicationdiv.style.display = 'none';
	historydiv.style.display = 'none';
	questions.style.visibility = 'visible';

	let checkedValue = '';

	submitBtn.addEventListener('click', () => {

		radioBtn.forEach(options => {
			if (options.checked) {
				console.log(options);
				checkedValue = options.value;
				console.log(checkedValue);

			}

		})

		if (checkedValue == 0) {

			questions.innerHTML = `
				 
                <h3>Select most applicable to you</h3>
                <input type="radio" id="convilsions" name="severity" value="1">
                <label for="convulsions">Does the infant have convulsions</label><br>
                <input type="radio" id="blood" name="severity" value="2">
                <label for="blood">Does the infant have blood in stool</label><br>
				<input type="radio" id="stoolYes" name="severity" value="3">
                <label for="feeding">Is there any difficulty feeding</label><br>
                <input type="radio" id="drinks" name="severity" value="3">
                <label for="drinks">Does the infant usually receive any other food or drinks</label><br>
	
                <div> <button id="submit">Submit</button> </div>

            
		`;
			const checkboxes = document.querySelectorAll('input[type="radio"][name="severity"]')
			const submit = document.querySelector('#submit');
			submit.addEventListener('click', () => {
				console.log("submit btn clicked");
				checkboxes.forEach(option => {
					if (option.checked) {
						checkedValue = option.value;
						console.log(checkedValue);
					}
				})

				if (checkedValue == "1") {
					questions.innerHTML = `
					 
					<h3>Select the most applicable to you</h3>
					<input type="radio" id="convulsions" name="severity" value="1">
					<label for="convulsions">Does the infant have severe chest indrawing </label><br>
					<input type="radio" id="blood" name="severity" value="1">
					<label for="blood">If axillary temperature 37.5oC or above (or
	feels hot to touch) or temperature less than 35.5oC (or feels cold to touch) or</label><br>
										<input type="radio" id="stoolYes" name="severity" value="2">
					  <label for="feeding">Look at the umbilicus. Is it red or draining pus?</label>
									<input type="radio" id="feeding" name="severity" value="3">
								  <label for="feeding">Palms and soles yellow or age 14 days or more </label><br>
					<input type="radio" id="breastfed" name="severity" value="4">
					<label for="breastfed">Palms and soles not yellow</label><br>
					<input type="radio" id="breastfedYes" name="severity" value="5">
					<label for="breastfedYes">Temperature between 35.5 - 36.40C</label>	
					<div> <button id="submit">Submit</button> </div>
	
				
			`;
					const checkboxes1 = document.querySelectorAll('input[type="radio"][name="severity"]')
					const submit1 = document.querySelector('#submit');
					submit1.addEventListener('click', () => {
						checkboxes1.forEach(option => {
							if (option.checked) {
								checkedValue = option.value;

							}
						})

						if (checkedValue == "1") {
							questions.innerHTML = `
							<div>Possible serious bacterial infection</div>
							<div>Identify Treatment</div>
						<ul>
							<li>Give first does of intramuscular ampicillin and gentamicin</li>
							<li>Warm the young infant by skin to skin contact</li>
							<li>Refer urgently to hospital</li>
						</ul>
						`;
						}

						if (checkedValue == "2") {
							questions.innerHTML = `
								<div>local bacterial infection</div>
		  <div>Identify Treatment</div>
		  <ul>
			<li>Give oral amoxycillin for 5 days</li>
			<li>Follow up in 2 days</li>
		  </ul>`;
						}

						if (checkedValue == "3") {
							questions.innerHTML = `
						<div> severe jaundice</div>
		  <div>Identify Treatment</div>
		  <ul>
			<li>treat to prevent low blood sugar</li>
			<li>Advice mother how to keep the young infant warm on the way to the hospital</li>
		  </ul>`;
						}

						if (checkedValue == "4") {
							questions.innerHTML = `
						<div>Jaundice</div>
		  <div>Identify Treatment</div>
		  <ul>
			<li>Advice mother to give home care to the infant</li>
			<li>advice mother when to return immediately</li>
		  </ul>`;
						}

						if (checkedValue == "5") {
							questions.innerHTML = `
						<div>Low body temperature</div>
		  <div>Identify Treatment</div>
		  <ul>
			<li>Warm the young infant using skin to skin contact for one hour and REASSES</li>
			<li>Treat to prevent low blood sugar</li>
		  </ul>`;
						}

					})


				}

				else if (checkedValue == "2") {
					questions.innerHTML = `
				<h3>Select the most applicable to you</h3>
				<input type="radio" id="convulsions" name="severity" value="1">
				<label for="convulsions">Does the infant feel lathergic or unconscious</label><br>
				<input type="radio" id="blood" name="severity" value="2">
				<label for="blood">Is the infant restless or irritable and does the skin pinch goes back slowly</label><br>
				<input type="radio" id="stoolYes" name="severity" value="3">
				<label for="feeding">Not enough signs to classify severe dehydration </label>
				<input type="radio" id="feeding" name="severity" value="4">
				<label for="feeding">Diarrhoea lasting 14 days or more </label><br>
				<div> <button id="submit">Submit</button> </div>
				
				`;


					const checkboxes2 = document.querySelectorAll('input[type="radio"][name="severity"]')
					const submit2 = document.querySelector('#submit');
					submit2.addEventListener('click', () => {
						checkboxes2.forEach(option => {
							if (option.checked) {
								checkedValue = option.value;

							}
						})

						if (checkedValue == "1") {
							questions.innerHTML = `
								<div>Severe dehydration</div>
								<div>Identify Treatment</div>
							<ul>
								<li>Give first dose of intramuscular ampicillin and gentamicin</li>
								<li>Advice mother to continue breast feeding</li>
								
							</ul>
							`;
						}

						if (checkedValue == "2") {
							questions.innerHTML = `
									<div>Some dehydration</div>
			  <div>Identify Treatment</div>
			  <ul>
			  <li>Give first dose of intramuscular ampicillin and gentamicin</li>
			  <li>Advice mother to continue breast feeding</li>
			  </ul>`;
						}

						if (checkedValue == "3") {
							questions.innerHTML = `
							<div>No dehyration</div>
			  <div>Identify Treatment</div>
			  <ul>
				<li>Give fluids to treat diarrhoea at home</li>
				<li>Folllow up in 5 days if not improving</li>
			  </ul>`;
						}

						if (checkedValue == "4") {
							questions.innerHTML = `
							<div>severe persistent diarrhoea</div>
			  <div>Identify Treatment</div>
			  <ul>
				<li>Treat to prevent low blood sugar or refer to the hospital</li>
				<li>Refer to the hospital</li>
			  </ul>`;
						}
					})

				}

				else if (checkedValue == "3") {
					questions.innerHTML = `
					<h3>Select the most applicable to you</h3>
					<input type="radio" id="convulsions" name="severity" value="1">
					<label for="convulsions">Is the infant severely underweight(< -3 SD) or not suckling at all</label><br>
					<input type="radio" id="blood" name="severity" value="2">
					<label for="blood">Moderately underweight( < -2 to -3 SD) or not suckling effectively</label><br>
					<input type="radio" id="stoolYes" name="severity" value="3">
					<label for="feeding">Not low weight for age(< -2 SD)and no other sign of inadequate feeling</label>
					<div> <button id="submit">Submit</button> </div>
					
					`;

					const checkboxes3 = document.querySelectorAll('input[type="radio"][name="severity"]')
					const submit3 = document.querySelector('#submit');
					submit3.addEventListener('click', () => {
						checkboxes3.forEach(option => {
							if (option.checked) {
								checkedValue = option.value;

							}
						})

						if (checkedValue == "1") {
							questions.innerHTML = `
									<div>Severe Malnutrition</div>
									<div>Identify Treatment</div>
								<ul>
									<li>Treat to prevent low blood sugar</li>
									<li>Refer urgently to the hospital</li>
									
								</ul>
								`;
						}

						if (checkedValue == "2") {
							questions.innerHTML = `
										<div>Feeding problem or low weight</div>
				  <div>Identify Treatment</div>
				  <ul>
				  <li>Advice the mother about giving locally appropriate animal milk</li>
				  <li>If breastfeeding less than 8 times in 24 hours,advise to increase frequency of feeding.</li>
				  <li>If receiving other foods or drinks, counsel mother about breastfeeding more, reducing
				  other foods or drinks, and using a cup and spoon.</li>
				  </ul>`;
						}

						if (checkedValue == "3") {
							questions.innerHTML = `
								<div>No Feeding Problem</div>
				  <div>Identify Treatment</div>
				  <ul>
					<li>Advise mother to give home care for the young infant./li>
					<li>Praise the mother for feeding the infant well.</li>
				  </ul>`;
						}
					})


				}
			})







		}

	})

	// console.log("works");
	// const result = {
	// 	symptoms: []
	// };
	// let selected = null;
	// const container = document.querySelector('.container2');
	// const submit = document.querySelector('#submit');
	// const options = document.querySelectorAll('input[type="radio"][name="severity"]');

	// submit.addEventListener('click', () => {

	// 	options.forEach(option => {

	// 		if (option.checked) {
	// 			selected = option.value;
	// 			result.symptoms.push(selected);
	// 		}
	// 	})

	// 	questions.innerHTML = `
	// 	<h3>What is the duration of your symptoms</h3>
	// 	<input type="radio" id="brief" name="length" value="3">
	// 	<label for="brief">1-4 days</label><br>
	// 	<input type="radio" id="medium" name="length" value="6">
	// 	<label for="medium">4-7 days</label><br>
	// 	<input type="radio" id="long" name="length" value="10">
	// 	<label for="long"> more than 7 days</label>
	// 	<div> <button id="submission">Submit</button> </div>
	// 	`;
	// 	// duration.style.visibility = 'visible';
	// 	console.log(result.symptoms);

	// 	const submission = document.querySelector('#submission');
	// 	const choices = document.querySelectorAll('input[type="radio"][name="length"]');

	// 	submission.addEventListener('click', () => {

	// 		choices.forEach(option => {
	// 			if (option.checked) {
	// 				selected = option.value;
	// 				result.symptoms.push(selected);
	// 			}
	// 		})

	// 		//disease.style.visibility = 'visible';
	// 		questions.innerHTML = `
	// 	<h3>Which symptom is applicable to you</h3>
	// 	<input type="checkbox" id="cough" name="symptoms" value="Cough">
	// 	<label for="cough">Cough</label><br>
	// 	<input type="checkbox" id="headache" name="symptoms" value="headache">
	// 	<label for="headache">Headache</label><br>
	// 	<input type="checkbox" id="fever" name="symptoms" value="fever">
	// 	<label for="fever">Fever</label>
	// 	<div> <button id="send">Submit</button> </div>`;
	// 		console.log(result.symptoms);
	// 		const send = document.querySelector('#send');


	// 		send.addEventListener('click', () => {
	// 			// console.log("events");
	// 			selectionProcess(result);
	// 			console.log("we are out");
	// 		})
	// 	})

	// });


});


// function selectionProcess(result) {


// 	let selectedId = null;
// 	const endpoint = 'http://localhost:3000/dashboard/symptoms';
// 	const checkOptions = document.querySelectorAll('input[type="checkbox"][name="symptoms"]');


// 	// Get the selected radio button
// 	checkOptions.forEach(options => {
// 		if (options.checked) {


// 			selectedId = options.id;

// 			result.symptoms.push(selectedId);
// 		}
// 	});
// 	console.log(result.symptoms);
// 	// If 'none' is selected, stop the recursion
// 	if (selectedId === 'none') {

// 		console.log("does selected id become none");
// 		questions.innerHTML = '';

// 		axios.post(endpoint, result)
// 			.then(response => {

// 				console.log(response.data);
// 				const data = response.data;
// 				const diseases = Object.keys(data);
// 				if (diseases == '') {
// 					const resultdiv = document.createElement('h1');
// 					resultdiv.textContent = "Sorry symptoms does not match to any disease in our data";
// 					questions.appendChild(resultdiv);
// 				}
// 				else {
// 					const resultdiv = document.createElement('h3');
// 					resultdiv.textContent = `According to the symptoms provided `;
// 					questions.appendChild(resultdiv);
// 					diseases.forEach(disease => {
// 						console.log(disease);
// 						const result2div = document.createElement('h4');
// 						result2div.textContent = `${disease} matches with your symptoms`;
// 						questions.appendChild(result2div);

// 					})

// 				}

// 				return;
// 			})
// 			.catch(error => {
// 				console.log(error);
// 			});

// 	}


// 	else {
// 		displaySymptoms(result , endpoint);
// 	}
// }

// function displaySymptoms(result , endpoint)
// {
// 	// Send the selected result to the server
// 	axios.post(endpoint, result)
// 		.then(response => {
// 			// Clear previous radio buttons
// 			questions.innerHTML = '';
// 			console.log(response);
// 			// Display response as radio buttons
// 			const title = document.createElement('h3');
// 			title.innerText = 'Which symptom is most applicable to you';
// 			questions.appendChild(title);
// 			for (let i = 0; i < response.data.length; i++) {
// 				const radioButton = document.createElement('input');
// 				radioButton.type = 'checkbox';
// 				radioButton.id = response.data[i]; // Set id based on symptom
// 				radioButton.name = 'symptoms';

// 				const label = document.createElement('label');
// 				label.htmlFor = radioButton.id;
// 				label.textContent = response.data[i];

// 				questions.appendChild(radioButton);
// 				questions.appendChild(label);
// 				questions.appendChild(document.createElement('br'));
// 			}

// 			//create none option
// 			const radioButton = document.createElement('input');
// 			radioButton.type = 'checkbox';
// 			radioButton.id = 'none'; // Set id based on symptom
// 			radioButton.value = 'none';
// 			radioButton.name = 'symptoms';

// 			const label = document.createElement('label');
// 			label.htmlFor = 'none';
// 			label.textContent = 'none';

// 			questions.appendChild(radioButton);
// 			questions.appendChild(label);
// 			questions.appendChild(document.createElement('br'));

// 			//create submit button
// 			const submit = document.createElement('button');
// 			submit.innerText = 'Submit';
// 			submit.id = 'submit';
// 			questions.appendChild(submit);

// 			// If the user selects the none option all the other option selected gets unselectedX
// 			const noneCheckbox = document.querySelector('#none');
// 			let checkboxes = document.querySelectorAll('input[type="checkbox"][name="symptoms"]');

// 			checkboxes.forEach(checkbox => {
// 				checkbox.addEventListener('change', () => {
// 					if (checkbox === noneCheckbox && checkbox.checked) {
// 						// If "none" checkbox is checked, uncheck all other checkboxes
// 						checkboxes.forEach(cb => {
// 							if (cb !== noneCheckbox) {
// 								cb.checked = false;
// 							}
// 						});
// 					} else if (checkbox.checked && noneCheckbox.checked) {
// 						// If any other checkbox is checked while "none" checkbox is checked, uncheck "none"
// 						noneCheckbox.checked = false;
// 					}
// 				});
// 			});
// 			// Continue the process recursively


// 			submit.addEventListener('click', () => selectionProcess(result));
// 		})
// 		.catch(error => {
// 			// Handle error
// 			console.log(error);
// 		});
// }

