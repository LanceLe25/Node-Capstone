anychart.onDocumentReady(function() {

  // set the data
  var data = [
      {x: "Sleep", value: 8},
      {x: "Work", value: 8},
      {x: "Commute", value: 1},
      {x: "Spend Time with Family", value: 3},
      {x: "Work From Home", value: 4},
  ];

  // create the chart
  var chart = anychart.pie();

  // set the chart title
  chart.title("Friday, October 6th, 2018");

  // add the data
  chart.data(data);



  // display the chart in the container
  chart.container('container');
  chart.draw();
});

// starting function
$(function () {
	$('section').hide();
	$('#landing-page').show();
});

// header refreshes the page
$('header').click(function (event) {
	event.preventDefault();
	location.reload();
})

//to go to sign up page
$('#to-sign-in-page').click(function (event) {
	event.preventDefault();
	$('#landing-page').hide();
	$('#signup-page').show();
})

//submit sign in form
$('.sign-up-form').submit(function (event) {
	event.preventDefault();
	const name = $('#sign-up-name').val();
	const username = $('#sign-up-username').val();
	const password = $('#sign-up-password').val();

	if(name == "") {
		alert('Please add a name');
	}
	else if (username == "") {
		alert('Please add a email');
	}
	else if(password == "") {
		alert('Please add a password');
	}
	else {
		const newUser = {
			name: name,
			username: username,
			password: password
		};

		$.ajax({
			type: 'POST',
			url: '/users/create',
			dataType: 'json',
			data: JSON.stringify(newUser),
			contentType: 'application/json'
		})
		.done(function (result) {
			console.log(result)
			$('nav').show();
		})

		.fail(function(jqXHR, error, errorThrown) {
			console.log(jqXHR);
			console.log(error);
			console.log(errorThrown);
		});
	};
});


// go to login page from sign up page
$('.change-form-login').click(function (event) {
	event.preventDefault();
	$('#login-page').show();
	$('#signup-page').hide();
})

// submitting login form
$('.login-form').submit(function (event) {
	event.preventDefault();

	const username = $('.login-name').val();
	const password = $('.login-password').val();

	if(username == "") {
		alert('Please enter a username');
	}
	else if(password == "") {
		alert('Please enter a password');
	}
	else {
		const login = {
			username: username,
			password: password
		}

	$.ajax({
		type: 'POST',
		url: '/users/login',
		dataType: 'json',
		data: JSON.stringify(login),
		contentType: 'application/json'
	})

	.done(function (result) {
		console.log(result);
		$('#login-page').hide();
		$('#account-setup-page').show();
		$('#activity-form').show();
		$('#user-homepage').show();
		$('nav').show();
	})

	.fail(function (jqXHR, error, errorThrown) {
		console.log(jqXHR);
		console.log(error);
		console.log(errorThrown);
	});
} 
});


//change to sign up page from login page
$('.change-form-sign-up').click(function (event) {
	event.preventDefault();
	$('#login-page').hide();
	$('#signup-page').show();
});

// home button in nav
$('#home-button').click(function (event) {
	event.preventDefault();
	$('section').hide();
	$('#user-homepage').show();
});

// add activity buton in nav
$('#add-activity').click(function (event) {
	event.preventDefault();
	$('section').hide();
	$('#account-setup-page').show();
})


