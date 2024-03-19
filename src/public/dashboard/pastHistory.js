const patientHistory = document.getElementById('patientHistory');
const historydiv = document.querySelector('.historydiv');
const addHistoryButton = document.getElementById('add-history-button');
const floatingWindow = document.getElementById('floatingwindow');
const header = document.querySelector('.heading');
// const form2 = document.querySelector('.form-contents2');
const form2 = document.querySelector('.historyForm'); 
const closeButton = document.querySelector('.c2');
const submitButton = document.querySelector('.s2');
const libraryContainer = document.querySelector('.Library-container2');
const disehead = document.querySelector('.disehead');



// Show/hide the form
// function showForm() {
//   form2.style.display = 'block';
//   console.log("the fork should be showing");
// }

// function hideForm() {
//   form2.style.display = 'none';
// }

// Hide the form initially


addHistoryButton.addEventListener('click', () => {
 
  form2.style.display = 'block';
  document.getElementById('disease').value = '';
  document.getElementById('time').value = '';
  header.innerText = '';
});

patientHistory.addEventListener('click', () => {
  allergydiv.style.display = 'none';
  medicationdiv.style.display = 'none';
  historydiv.style.display = 'block';
  console.log("whats is history");

});

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  // Collect input values
  const disease = document.getElementById('disease').value;
  const time = document.getElementById('time').value;

  // Create a new box to display the data
  const historyBox = document.createElement('div');
  historyBox.classList.add('history-box');
  historyBox.innerHTML = `<p><strong>Disease:</strong> ${disease}</p> <p><strong>Duration:</strong> ${time}</p> <button class="cancel">Cancel</button>`;
  historyBox.style.border = '1px solid black';
  disehead.innerText = '';

  // Event listener for the "Cancel" button in the new box
  const cancelButton = historyBox.querySelector('.cancel');
  cancelButton.addEventListener('click', function() {
    libraryContainer.removeChild(historyBox); // Remove the box
  });

  libraryContainer.appendChild(historyBox); // Append the new box to the container
  form2.style.display = 'none'; // Hide the form after submission
});

// Event listener for the "Close" button in the form
closeButton.addEventListener('click', () => {
  form2.style.display = 'none';
});