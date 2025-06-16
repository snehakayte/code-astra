// Function to show the loading alert
function showLoadingAlert() {
	swal({
		title: 'Loading...',
		text: 'Fetching data, please wait.',
		icon: 'info', // Placeholder for a spinner
		buttons: false, // Hide default buttons
		closeOnClickOutside: false,
		closeOnEsc: false
	});
}

// Function to close the loading alert
function closeLoadingAlert() {
	swal.close();
}

function checkSession() {
	const url = `${contextName}/inbound/api/monitoring/checkSession`;

	return $.ajax({
		url: url,
		type: "POST",
		dataType: "text", // Change to "text" since the response might not be JSON
		timeout: 5000
	});
}

function getUserData() {
	checkSession()
		.done(function(response) {
			// If session is valid, proceed with the main API call
			showLoadingAlert(); // Show loading alert
			$.ajax({
				url: contextName + "/admin/api/monitoring/details",
				type: "POST",
				dataType: "json",
				success: function(data) {
					closeLoadingAlert(); // Close loading alert
					$('.user-count').text(data.totalUser);
					$('.first-count').text(data.firstUser);
					$('.active-count').text(data.activeUser);
					$('.blocked-count').text(data.blockedUser);
					displayGetUserData(data);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					closeLoadingAlert(); // Close loading alert
					console.error('Error fetching data:', textStatus,
						errorThrown);
				}
			});
		})
		.fail(function(jqXHR) {
			console.error("Session check failed:", jqXHR.status, jqXHR.responseText);
			// If session check fails (401), redirect to login page
			if (jqXHR.status === 401) {
				window.location.href = `${contextName}/sessionexpired`;
			}
		});
}

function getUserDataByUserId(userId) {
	checkSession()
		.done(function(response) {
			// If session is valid, proceed with the main API call
			showLoadingAlert(); // Show loading alert
			$.ajax({
				url: contextName + "/admin/api/monitoring/details/" + userId,
				type: "POST",
				dataType: "json",
				success: function(data) {
					closeLoadingAlert(); // Close loading alert
					displaygetUserDataByUserId(data);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					closeLoadingAlert(); // Close loading alert
					console.error('Error fetching data:', textStatus, errorThrown);
					swal({
						text: 'Error fetching user data.',
						className: "red-alert",
						closeOnClickOutside: false,
					});
				}
			});
		})
		.fail(function(jqXHR) {
			console.error("Session check failed:", jqXHR.status, jqXHR.responseText);
			// If session check fails (401), redirect to login page
			if (jqXHR.status === 401) {
				window.location.href = `${contextName}/sessionexpired`;
			}
		});
}


function deleteUserByUserId(userId) {
	checkSession()
		.done(function(response) {
			// If session is valid, proceed with the main API call
			showLoadingAlert(); // Show loading alert
			// Show SweetAlert confirmation dialog
			swal({
				title: 'Are you sure you want to delte User ?' + userId,
				text: "You won't be able to revert this!",
				icon: 'warning',
				buttons: {
					cancel: {
						text: "Cancel",
						value: null,
						visible: true,
						className: "btn btn-secondary",
						closeModal: true
					},
					confirm: {
						text: "Yes, delete it!",
						value: true,
						visible: true,
						className: "btn btn-danger",
						closeModal: true
					}
				}
			}).then((isConfirm) => {
				if (isConfirm) {
					// Proceed with AJAX request if user confirmed
					$.ajax({
						url: contextName + "/admin/api/monitoring/deleteuser/" + userId,
						type: "POST",
						dataType: "json",
						success: function(data) {
							closeLoadingAlert(); // Close loading alert
							getUserData(); // Refresh user data after deletion
							// Show SweetAlert for success message
							swal({
								text: "User successfully deleted " + userId,
								icon: "success",
								buttons: {
									confirm: {
										text: "OK",
										value: true,
										visible: true,
										className: "btn btn-primary",
										closeModal: true
									}
								}
							});
						},
						error: function(jqXHR, textStatus, errorThrown) {
							closeLoadingAlert(); // Close loading alert
							console.error('Error deleting user:', textStatus, errorThrown);
							// Show SweetAlert for error message
							swal({
								text: "Failed to delete user",
								icon: "error",
								buttons: {
									confirm: {
										text: "OK",
										value: true,
										visible: true,
										className: "btn btn-primary",
										closeModal: true
									}
								}
							});
						}
					});
				}
			});
		})
		.fail(function(jqXHR) {
			console.error("Session check failed:", jqXHR.status, jqXHR.responseText);
			// If session check fails (401), redirect to login page
			if (jqXHR.status === 401) {
				window.location.href = `${contextName}/sessionexpired`;
			}
		});
}




