const patientAllergies = document.getElementById('patientAllergies');
const form = document.querySelector('.form');
const allergydiv = document.querySelector('.allergydiv');


let allergy_name = "";
let allergy_description = "";
const trigger = document.querySelector('#add-allergy-button');
const close = document.querySelector('.close');
const submit = document.querySelector('.submit');
const Library = [];
let i = 0;// counter for the object index
//constructor for object book

patientAllergies.addEventListener('click', () => {


  allergydiv.style.display = 'block';
  medicationdiv.style.display = 'none';
  historydiv.style.display = 'none';
  questions.style.visibility = 'none';

  trigger.addEventListener('click', function () {
    form.classList.toggle("hidden");//creates class hidden otherwise deletes it
  });

  submit.addEventListener('click', function (event) {
    event.preventDefault();//prevent the default form submission behaviour
    //without this the book card gets automatically deleted the first time as the default submission behaviour reloads the page
    const allergies = {
      allergy: []
    }
    allergy_name = document.getElementById('allergy').value;
    allergy_description = document.getElementById('description').value;
    allergies.allergy.push(allergy_name);
    allergies.allergy.push(allergy_description);
    console.log(allergies.allergy);

    axios.post('http://localhost:3000/dashboard/allergers' , allergies )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

    display_allergy(allergy_name , allergy_description);
    form.classList.toggle("hidden");
  });


});



//  trigger.addEventListener('click' , function()
//  {
//  form.classList.toggle("hidden");//creates class hidden otherwise deletes it
//  //creating and deleting the hidden class is the main logic to hide and make the modal pop up on clicking
//  });
//  submit.addEventListener('click' , function(event)
//  {
//  event.preventDefault();//prevent the default form submission behaviour
//  //without this the book card gets automatically deleted the first time as the default submission behaviour reloads the page
//  book_author = document.getElementById('allergy').value;
//  book_name = document.getElementById('description').value;
//  const book = new Book(book_author , book_name );
//  Library.push(book);
// create_book(book);
//  form.classList.toggle("hidden");
//  });
//to create the book visually on the webapp
function display_allergy(allergy_name , allergy_description) {
  const library_container = document.querySelector('.Library-container');
  const library_items = document.createElement('div');
  const allergy = document.createElement('div');
  const description = document.createElement('div');
  
  const delete_btn = document.createElement('button');
  library_items.classList.add('items');
  allergy.classList.add('allergyName');
  description.classList.add('allergyDescription');
  

  delete_btn.classList.add('delete');
  
  allergy.textContent = allergy_name;
  description.textContent = allergy_description;
 
  delete_btn.textContent = "Delete";

  
  library_items.appendChild(allergy);
  library_items.appendChild(description);
  library_items.appendChild(delete_btn);
  library_container.appendChild(library_items);
  

  delete_btn.addEventListener('click', function () {
    const parentdiv = delete_btn.parentNode;
    const data = parentdiv.querySelector('.allergyName').textContent;
    console.log(data);
    axios.post('http://localhost:3000/dashboard/allergers' ,data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    library_container.removeChild(library_items); 
  });
}
close.onclick = function () {
  form.classList.toggle("hidden");
  console.log("You exited");
};
