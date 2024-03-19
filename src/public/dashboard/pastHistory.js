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
  questions.style.visibility = 'none';
  console.log("whats is history");

});

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  const history = {
    diseases:[]
  }
  // Collect input values
  const disease = document.getElementById('disease').value;
  const time = document.getElementById('time').value;
  history.diseases.push(disease);
  history.diseases.push(time);
  const r={
    pass:disease
  }
  console.log(history.diseases);
  // the array sent contains the disease and duration of each entry and does not append each and every entry
  axios.post('http://localhost:3000/dashboard/patientHistory/update' ,r )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

  // Create a new box to display the data
  const historyBox = document.createElement('div');
  historyBox.classList.add('history-box');
  historyBox.innerHTML = `<p><strong>Disease:</strong> <span class="disease">${disease}</span></p> <p><strong>Duration:</strong> <span class = "time">${time}</span></p> <button class="cancel">Cancel</button>`;
  historyBox.style.border = '1px solid black';
  disehead.innerText = '';

  // Event listener for the "Cancel" button in the new box
  const cancelButton = historyBox.querySelector('.cancel');
  cancelButton.addEventListener('click', function() {

    const parentdiv = cancelButton.parentNode;
    const data = parentdiv.querySelector('.disease').textContent;
    console.log(data);
    const k={
         pass:data
    };
    axios.post('http://localhost:3000/dashboard/patientHistory/delete' ,k)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    libraryContainer.removeChild(historyBox); // Remove the box
  });

  libraryContainer.appendChild(historyBox); // Append the new box to the container
  form2.style.display = 'none'; // Hide the form after submission
});

// Event listener for the "Close" button in the form
closeButton.addEventListener('click', () => {
  form2.style.display = 'none';
});