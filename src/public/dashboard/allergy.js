const patientAllergies = document.getElementById('patientAllergies');
const form = document.querySelector('.form');
const allergydiv = document.querySelector('.allergydiv');


 let book_author = "";
 let book_name = "" ;
 const trigger = document.querySelector('#add-allergy-button'); 
 const close = document.querySelector('.close');
 const submit = document.querySelector('.submit');
 const Library = [];
 let i = 0;// counter for the object index
 //constructor for object book

 patientAllergies.addEventListener('click' , () => {

   console.log("we are working");
    allergydiv.style.display = 'block';
    medicationdiv.style.display = 'none';
    historydiv.style.display = 'none';
    trigger.addEventListener('click' , function()
        {
          form.classList.toggle("hidden");//creates class hidden otherwise deletes it
       });
 
       submit.addEventListener('click' , function(event)
       {
       event.preventDefault();//prevent the default form submission behaviour
       //without this the book card gets automatically deleted the first time as the default submission behaviour reloads the page
       book_author = document.getElementById('allergy').value;
       book_name = document.getElementById('description').value;
       const book = new Book(book_author , book_name );
       Library.push(book);
      create_book(book);
       form.classList.toggle("hidden");
       });


});

 function Book(author , title )
 {
 this.author = author;
 this.title = title;
 }

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
 function create_book(book)
 {
 const library_container = document.querySelector('.Library-container');
 const library_items = document.createElement('div');
 const allergy = document.createElement('div');
 const description = document.createElement('div');
 const option_container = document.createElement('div');
 const read_btn = document.createElement('button');
 const delete_btn = document.createElement('button');
 library_items.classList.add('items');
 allergy.classList.add('book-author');
 description.classList.add('book-name');
 option_container.classList.add('options')
 read_btn.classList.add('read');
 delete_btn.classList.add('delete');
 library_items.data = Library.indexOf(book); // data attribute is cdifferent for each book which is essential for deletion
 allergy.textContent = Library[i].author;
 description.textContent = Library[i].title;
 read_btn.textContent = "Read";
 delete_btn.textContent = "Delete";
 option_container.appendChild(read_btn);
option_container.appendChild(delete_btn);
 library_items.appendChild(allergy);
 library_items.appendChild(description);
 library_items.appendChild(option_container)
 library_container.appendChild(library_items);
 i = i + 1;
 read_btn.onclick = function()
 {
 if(read_btn.style.backgroundColor == "green")
 {
 read_btn.style.backgroundColor = "white";
 }
 else
 read_btn.style.backgroundColor = "green";
 };
 delete_btn.addEventListener('click' , function()
 {
 if(library_items.data == Library.indexOf(book))
 {
 library_container.removeChild(library_items);
 }
 });
 }
 close.onclick = function(){
 form.classList.toggle("hidden");
 console.log("You exited");
 };
