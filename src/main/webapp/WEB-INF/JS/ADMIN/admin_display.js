
function displayGetUserData(data) {
	$('#SignupPage,#UpdatePage,#DeletePage,#DisplayUpdate,#DisplayWelcome').hide();
	$('#Usersection, #Countsection').show();

	var tbody = $('#usersectionentries tbody');
	tbody.empty(); // Clear previous entries

	if (data.totalUser === 0) {
		tbody.append('<br></br>');
		tbody.append('<tr><td colspan="8" style="text-align: center; padding-left: 350px;"><p style="text-align: left; color: red;">No Single User is Registered Till Now</p></td></tr>');
	} else {
		// Iterate through the fetched data and populate the table
		$.each(data.userDto, function(index, entry) {
			var row = $('<tr>');
			row.append($('<td>').text(entry.userId));
			row.append($('<td>').text(entry.userName));
			row.append($('<td>').text(entry.userGroups));
			row.append($('<td>').text(entry.userStatus));
			row.append($('<td>').text(entry.userType));

			// Append update image to the row
			var updateImg = $('<img>').attr('src', contextPath + '/LOGO/User/update.png')
				.attr('alt', 'Update')
				.css({ 'width': '30px', 'height': '30px', 'margin-right': '8px' })
				.click(function() {
					getUserDataByUserId(entry.userId); // Call your function with userId
				});

			// Append delete image to the row
			var deleteImg = $('<img>').attr('src', contextPath + '/LOGO/User/delete.png')
				.attr('alt', 'Delete')
				.css({ 'width': '30px', 'height': '30px', 'margin-right': '8px' })
				.click(function() {
					deleteUserByUserId(entry.userId);
				});

			// Append both images to the row
			row.append($('<td>').append(updateImg));
			row.append($('<td>').append(deleteImg));

			tbody.append(row);
		});
	}

	// Bind click event to the download button
	$('#downloadusersectionentriesButton').off('click').on('click', function() {
		usersectionentriesFile(data);
	});
}


function displaygetUserDataByUserId(userDTO) {
	// Hide all sections except the one to display update
	$('#SignupPage, #UpdatePage, #DeletePage, #Countsection, #Usersection, #DisplayWelcome').hide();
	$('#DisplayUpdate').show();

	var sectionSelector = '#DisplayUpdate';

	// Clear previous data for specific input types
	$(sectionSelector + ' input[type="text"], input[type="email"], input[type="tel"], input[type="date"], input[type="number"]').val('');
	$(sectionSelector + ' input[name="userGroups"]').prop('checked', false);
	$(sectionSelector + ' input[name="userStatus"]').prop('checked', false);

	// Populate fields with data from userDTO
	$(sectionSelector + ' input[name="userId"]').val(userDTO.userId || '');
	$(sectionSelector + ' input[name="empId"]').val(userDTO.empId || '');
	$(sectionSelector + ' input[name="mobile"]').val(userDTO.mobile || '');
	$(sectionSelector + ' input[name="userName"]').val(userDTO.userName || '');
	$(sectionSelector + ' input[name="state"]').val(userDTO.state || '');
	$(sectionSelector + ' input[name="city"]').val(userDTO.city || '');
	$(sectionSelector + ' input[name="country"]').val(userDTO.country || '');
	$(sectionSelector + ' input[name="region"]').val(userDTO.region || '');
	$(sectionSelector + ' input[name="postalPincode"]').val(userDTO.postalPincode || '');
	$(sectionSelector + ' input[name="email"]').val(userDTO.email || '');
	var dob = userDTO.dob || '';
	var joiningDate = userDTO.joiningDate || '';

	// Extract the date part from dob (removing the time part)
	if (dob) {
		dob = dob.split(' ')[0]; // This will take the first part before the space
	}
	// Set the values in the input fields
	$(sectionSelector + ' input[name="dob"]').val(dob);
	$(sectionSelector + ' input[name="joiningDate"]').val(joiningDate);
	
	// Checkboxes for userGroups
	$(sectionSelector + ' input[name="userGroups"]').each(function() {
		var groupName = $(this).val();
		if (userDTO.userGroups && userDTO.userGroups.includes(groupName)) {
			$(this).prop('checked', true);
		} else {
			$(this).prop('checked', false);
		}
	});

	// Radio buttons for userStatus
	if (userDTO.userStatus) {
		$(sectionSelector + ' input[name="userStatus"][value="' + userDTO.userStatus + '"]').prop('checked', true);
	}
}
