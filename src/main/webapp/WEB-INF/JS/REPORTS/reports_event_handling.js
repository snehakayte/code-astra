$(document).ready(function() {





	$('#dateRangeForm').submit(function(event) {
		event.preventDefault(); // Prevent default form submission

		var startDate = $('#dateRangestartDate').val();
		var endDate = $('#dateRangeendDate').val();
		var reportName = $('#dateRangereportName').val();
		var fileType = $('#dateRangefileType').val();

		var currentDate = new Date();

		if (reportName == "Select" || reportName.trim() === "") {
			showAlert("Please select a report name.");
			$('#dateRangereportName').focus();
			return;
		}

		if (startDate.trim() === "") {
			showAlert("Please select a start date.");
			$('#dateRangestartDate').focus();
			return;
		}

		if (endDate.trim() === "") {
			showAlert("Please select an end date.");
			$('#dateRangeendDate').focus();
			return;
		}

		if (fileType == "NO_DATA" || fileType.trim() === "") {
			showAlert("Please select a report type.");
			$('#dateRangefileType').focus();
			return;
		}

		if (!startDate || !endDate) {
			showAlert("Please select both dates.");
			return;
		}


		var startDateObj = new Date(startDate);
		var endDateObj = new Date(endDate);
		/*
				if (endDateObj > currentDate) {
					showAlert("End date cannot be greater than the current date.");
					return;
				}
		
				if (startDateObj > endDateObj) {
					showAlert("Start date cannot be later than end date.");
					return;
				}
		
		*/
		generateFileDataByDate(startDate, endDate, reportName, fileType, reportType);
	});



	function setClientName(clientName) {
		$.ajax({
			url: contextName + "/inbound/api/monitoring/clientname/" + clientName,
			type: "POST",
			success: function(data) {


			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.error('Error while setting client Name:', textStatus, errorThrown);
			}
		});
	}



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





});
