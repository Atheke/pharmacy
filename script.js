const submitUser = document.querySelector('#UserSubmitBtn');
const submitAdmin = document.querySelector('#adminSubmitBtn');


submitUser.addEventListener('click' , function(event)
{
		var form = event.target.closest('form');
		event.preventDefault();
			var userId = document.getElementById('UserId').value;
			var password = document.getElementById('UserPassword').value;

		verification(userId , password);
		form.reset();
	});


submitAdmin.addEventListener('click' , function(event)
{
		event.preventDefault();
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
