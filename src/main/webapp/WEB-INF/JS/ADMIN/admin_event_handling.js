const currentdate = new Date().toISOString().split('T')[0];

$(document).ready(function() {

	$('#SignupPage, #UpdatePage, #DeletePage, #Countsection, #Usersection, #DisplayUpdate').hide();
	$('#DisplayWelcome').show();
	
	// Toggle submenu
	$('#toggleUsersSubmenu').click(function() {
		var $submenu = $('#usersSubmenu');
		if ($submenu.is(':visible')) {
			$submenu.slideUp(); // Hide the submenu
		} else {
			$submenu.slideDown(); // Show the submenu
		}
	});

	// Display user section
	$('#displayUser').click(function() {
		getUserData();
	});

	// Display signup section
	$('#displaySignup').click(function() {
		$('#UpdatePage, #DeletePage, #Countsection, #Usersection, #DisplayUpdate,#DisplayWelcome').hide();
		// Find the form within the SignupPage and reset it
		$('#SignupPage form')[0].reset();
		$('#SignupPage').show();
	});

	// Display update section
	$('#displayUpdate').click(function() {
		$('#SignupPage, #DeletePage, #Countsection, #Usersection, #DisplayUpdate,#DisplayWelcome').hide();
		$('#UpdatePage form')[0].reset();
		$('#UpdatePage').show();
	});

	// Display delete section
	$('#displayDelete').click(function() {
		$('#SignupPage, #UpdatePage, #Countsection, #Usersection, #DisplayUpdate,#DisplayWelcome').hide();
		$('#DeletePage form')[0].reset();
		$('#DeletePage').show();
	});

	// Form submission event listener
	$('#updateForm').submit(function(event) {
		event.preventDefault(); // Prevent the default form submission

		// Get the userId from the input field
		var userId = $('#updateUserIdInput').val();

		getUserDataByUserId(userId);
	});

	// Form submission event listener
	$('#deleteForm').submit(function(event) {
		event.preventDefault(); // Prevent the default form submission

		// Get the userId from the input field
		var userId = $('#deleteUserIdInput').val();

		deleteUserByUserId(userId);
	});


	// Function to update client info
	function updateClientInfo(clientName, logoImage) {
		// Update the count displays
		$('.count-card').text("");
		$('.active-count').text("");
		$('.blocked-count').text("");
	}
});


