'use strict'

function signUp() {

$('.sign-up-button').submit(function(event) {
	event.preventDefault();
	const name = $('.sign-up-name').val();
	const username = $('.sign-up-username').val();
	const password = $('.sign-up-password').val();

	if (name == "") {
		alert('Please add a name');
	}
	else if(username =="") {
		alert('Please add a username');
	}
	else if (password == "") {
		alert('Please add a password');
	}

	else {
		const newUserObject = {
			name: name,
			username: username,
			password: password
		};

		$.ajax({
			type: 'POST',
			url: '/users/create',
			dataType: 'json',
			data: JSON.stringify(newUserObject),
			contentType: 'application/json'
		})

		.done(function(result) {
			console.log('working');
			$('.login-home-page').show();
			$('.sign-up-home-page').hide();
		})
		.fail(function (jqXHR, error, errorThrown) {
			console.log(jqXHR);
			console.log(error);
			console.log(errorThrown);
		});
	};
});
}
$(signUp());

