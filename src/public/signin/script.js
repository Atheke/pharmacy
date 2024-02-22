const submitUser = document.querySelector('#UserSubmitBtn');
const submitAdmin = document.querySelector('#adminSubmitBtn');



submitUser.addEventListener('click' , function(event)
{
		var form = event.target.closest('form');
			var userid = document.getElementById('UserId').value;
			var password = document.getElementById('UserPassword').value;
		form.reset();



const credentials = {
    email: userid,
    password: password
};

const serverUrl = 'http://localhost:3000/login';

axios.post(serverUrl, credentials)
.then(response => {
		if(response.data.no==='200'){
			console.log('this is axios');
			window.location.href = '/dashboard'
		}
})

}
)



submitAdmin.addEventListener('click' , function(event)
{
			var form = event.target.closest('form');

			var userId = document.getElementById('AdminUserId').value;
			var password = document.getElementById('AdminPassword').value;

		verification(userId , password);
		form.reset();
	});


function verification(userId , password)
{
	console.log("UserId:",userId);
	console.log("Password:",password);
}
