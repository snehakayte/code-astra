// Function to show the loading alert
function showLoadingAlert() {
	swal({
		title: 'Processing...',
		text: 'Report is generating in the backend. It may take some time. Please wait...',
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
		dataType: "text",
		timeout: 5000
	});
}


function generateFileDataByDate(startDate, endDate, reportName, fileType, reportType) {
    checkSession()
        .done(function() {
            // If session is valid, proceed with the file generation and download
            showLoadingAlert();

            const url = `${contextName}/report/generateJRXML?startDate=${startDate}&endDate=${endDate}&reportName=${reportName}&fileType=${fileType}&reportType=${reportType}`;

            // Trigger the download directly by setting window.location.href
            window.location.href = url;  // This will prompt the file download

            // Automatically close the loading alert after 2 seconds
            setTimeout(() => {
                closeLoadingAlert();
            }, 2000);
        })
        .fail(function(jqXHR) {
            console.error("Session check failed:", jqXHR.status, jqXHR.responseText);
            // If session check fails (401), redirect to login page
            if (jqXHR.status === 401) {
                window.location.href = `${contextName}/sessionexpired`;
            } else {
                swal({
                    title: 'Error!',
                    text: 'Failed to validate session.',
                    icon: 'error',
                    button: 'Okay',
                    className: "red-alert"
                });
            }
        });
}


