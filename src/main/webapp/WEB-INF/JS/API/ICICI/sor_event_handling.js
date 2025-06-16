let totalPages = 1;
var clientName = '';
var apiType = '';
const currentdate = new Date().toISOString().split('T')[0];

$(document).ready(function() {
	// Hide the tablesection and buttonsection initially
	$('#inboundButtonsection, #outboundButtonsection,#dateRangeForm, #indefaultsection, #outdefaultsection, #inapikeysection, #outapikeysection, #inapikeystatussection, #outapikeystatussection, #intxnRefNosection, #outtxnRefNosection').hide();


	if (userGroups.length === 1 && userGroups[0] === "ICICI") {
		
		// Explicitly set apiType and call the appropriate function
		apiType = 'inbound';
		setClientName('ICICI');
		updateClientInfo(clientName, 'ICICI.png');

		$('#inboundButtonsection,#dateRangeForm').show();

		// Update button states
		$('#outboundButton').removeClass('active');
		$(this).addClass('active');

		// Rebind the click events for inbound and outbound buttons
		$('#inboundButton').off('click').on('click', function() {
			$('#dateRangeForm').show();

			// Explicitly set apiType and call the appropriate function
			apiType = 'inbound';
			var currentPage = 1; // Reset current page to 1
			inboundFetchDefaultDataByDate(currentdate, currentdate, currentPage);

			// Update button states
			$('#outboundButton').removeClass('active');
			$(this).addClass('active');
		});

		$('#outboundButton').off('click').on('click', function() {
			$('#dateRangeForm').show();

			// Explicitly set apiType and call the appropriate function
			apiType = 'outbound';
			var currentPage = 1; // Reset current page to 1
			outboundFetchDefaultDataByDate(currentdate, currentdate, currentPage);

			// Update button states
			$('#inboundButton').removeClass('active');
			$(this).addClass('active');
		});
	}


	/*	// Iterate over allowedGroups array to handle click events dynamically
		iciciGroups.forEach(function(group) {
			var selector = '#' + group.toUpperCase();
			$(selector).click(function() {
				clientName = $(this).find('a').text().trim();
				setClientName(clientName);
				var logoImage = $(this).find('img').attr('src').split('/').pop();
				updateClientInfo(clientName, logoImage);
	
	
				if (outboundGroups.includes(clientName)) {
					var currentPage = 1; // Reset current page to 1
					$('#inboundButtonsection, #outboundButtonsection').show();
					$('#inboundButton').off('click').on('click', function() {
						$('#dateRangeForm').show();
	
						// Set apiType and call inboundfetchDefaultDataByDate
						apiType = $(this).attr('value');
						inboundFetchDefaultDataByDate(currentdate, currentdate, currentPage);
						// Remove CSS class from outbound button and add it to inbound button
						$('#outboundButton').removeClass('active');
						$(this).addClass('active');
					});
					$('#outboundButton').off('click').on('click', function() {
						$('#dateRangeForm').show();
	
						var currentPage = 1; // Reset current page to 1
	
						// Set apiType and call outboundfetchDefaultDataByDate
						apiType = $(this).attr('value');
						outboundFetchDefaultDataByDate(currentdate, currentdate, currentPage);
						// Remove CSS class from inbound button and add it to outbound button
						$('#inboundButton').removeClass('active');
						$(this).addClass('active');
					});
				} else {
					$('#inboundButtonsection, #indefaultsection, #dateRangeForm').show();
					$('#outboundButtonsection').hide();
				}
	
			});
		});*/

	$('#dateRangeForm').submit(function(event) {
		event.preventDefault(); // Prevent default form submission

		var startDate = $('#startDate').val(); // Get the start date from the input field
		var endDate = $('#endDate').val(); // Get the end date from the input field
		var currentDate = new Date();

		var daysAgo = new Date();
		daysAgo.setDate(currentDate.getDate() - 15);

		if (!startDate || !endDate) {
			showAlert("Please select both dates.");
			return; // Exit the function if either date is missing
		}


		var startDateObj = new Date(startDate);
		var endDateObj = new Date(endDate);

		if (startDateObj < daysAgo) {
			showAlert("Start date cannot be more than 15 days before the current date.");
			return;
		}

		if (endDateObj > currentDate) {
			showAlert("End date cannot be greater than the current date.");
			return;
		}

		if (startDateObj > endDateObj) {
			showAlert("Start date cannot be later than end date.");
			return;
		}

		var currentPage = 1; // Reset current page to 1


		if (apiType === 'outbound') {
			outboundFetchDefaultDataByDate(startDate, endDate, currentPage);
		} else {
			inboundFetchDefaultDataByDate(startDate, endDate, currentPage);
		}
	});

	// Function to show SweetAlert
	function showAlert(errorMessage) {
		if (errorMessage !== null && errorMessage !== "" && errorMessage !== "null") {
			swal({
				text: errorMessage,
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
	}

	function setClientName(clientName) {
		$.ajax({
			url: contextName + "/inbound/api/monitoring/clientname/" + clientName,
			type: "POST",
			success: function(data) {
				$('#indefaultsection, #outdefaultsection, #inapikeysection, #outapikeysection, #inapikeystatussection, #outapikeystatussection, #intxnRefNosection, #outtxnRefNosection').hide();

				if (!outboundGroups.includes(clientName)) {
					var currentPage = 1;
					apiType = $(this).attr('value');
					inboundFetchDefaultDataByDate(currentdate, currentdate, currentPage);
				} else {
					$('#dateRangeForm').hide();
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.error('Error while setting client Name:', textStatus, errorThrown);
			}
		});
	}


});



function updateClientInfo(clientName, logoImage) {
	// Update the API key display
	$('.api-key-card').text("");
	// Update the count displays
	$('.count-card').text("");
	$('.success-count').text("");
	$('.failed-count').text("");
	// Update client name
	$('.card .card-inner .logo-container .client img').attr('src', contextPath + '/LOGO/Clients/' + logoImage);

	$('.card .card-inner .text-primary').text(clientName);
	// Update logo image using the contextPath variable
}
