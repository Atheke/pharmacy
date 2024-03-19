    const currentMedication = document.getElementById('currentMedication');
    const medicationdiv = document.querySelector('.medicationdiv');
    const addMedicationButton = document.getElementById('add-medication-button');
    const form3 = document.querySelector('.form-contents3');
    const medicationContainer = document.querySelector('.Library-container3');
    const medicationHeading = document.querySelector('.medihead');

  
    // Hide the form initially
    //form3.classList.add("hidden");
    form3.style.display = "none";

    // Function to show the form
    function showForm() {
        form3.style.display = "block";
        medicationHeading.style.display = "none";
    }

    // Function to hide the form
    function hideForm() {
        form3.style.display = "none";
        medicationHeading.style.display = "none";
    }

    addMedicationButton.addEventListener('click', () => {
        // Clear form fields
        showForm();
        document.getElementById('name').value = '';
        document.getElementById('use').value = '';

    });
    currentMedication.addEventListener('click' , () => {
        medicationdiv.style.display = 'block';
        console.log("whats is medication?");
        allergydiv.style.display = 'none';
         historydiv.style.display = 'none';

    // Event listener for the "Add Medication" button

    // Event listener for the "Submit" button
    document.querySelector('.s3').addEventListener('click', function(event) {

        console.log("we submitted");
        event.preventDefault(); // Prevent form submission

        // Collect input values
        const name = document.getElementById('name').value;
        const use = document.getElementById('use').value;

        // Create a new box to display the data
        const medicationBox = document.createElement('div');
        medicationBox.classList.add('medication-box');
        medicationBox.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Use:</strong> ${use}</p>
        `;

        // Append the new box to the container
        medicationContainer.appendChild(medicationBox);

        // Hide the form after submission
        hideForm();
    });

    // Event listener for the "Close" button
    document.querySelector('.c3').addEventListener('click', hideForm);

    });