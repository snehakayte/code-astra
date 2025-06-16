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

function inboundFetchDefaultDataByDate(startDate, endDate, page) {
	checkSession()
		.done(function(response) {
			// If session is valid, proceed with the main API call
			showLoadingAlert();
			const url = `${contextName}/inbound/api/monitoring/default?startDate=${startDate}&endDate=${endDate}&pageNumber=${page}`;
			$.ajax({
				url: url,
				type: "POST",
				dataType: "json",
				success: function(data) {
					// Handle success response
					swal.close();
					$('#startDate').val('');
            		$('#endDate').val('');
					$('.api-key-card').text("");
					$('.count-card').text(data.totalCountByDate);
					$('.success-count').text(data.successCountByDate);
					$('.failed-count').text(data.failedCountByDate);
					let totalPages = data.inBoundDTOList && data.inBoundDTOList.length > 0 ? data.inBoundDTOList[0].totalPages : 0;
					inboundDataByDefaultupdatePageNumbers(startDate, endDate, totalPages);
					inboundDisplayDefaultData(data, startDate, endDate);
					// Update current page and total pages
					currentPage = page;
					totalPages = data.totalPages;

					// Show/hide pagination buttons based on current page and total pages
					if (currentPage === 1) {
						$('#indefaultprevPage').hide();
					} else {
						$('#indefaultprevPage').show();
					}
					if (totalPages > 1 && currentPage < totalPages) {
						$('#indefaultnextPage').show();
					} else {
						$('#indefaultnextPage').hide();
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
					closeLoadingAlert();
					console.error('Error fetching data:', textStatus, errorThrown);

					if (jqXHR.status === 401) {
						// Redirect to the login page if unauthorized
						window.location.href = `${contextName}/sessionexpired`;
					} else {
						swal({
							title: 'Error!',
							text: 'Error fetching data: ' + textStatus,
							icon: 'error',
							button: 'Okay',
							className: "red-alert"
						});
					}
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



function inboundDataByDefaultupdatePageNumbers(startDate, endDate, totalPages) {
	var pageNumbersContainer = $('.indefaultpage-count');
	pageNumbersContainer.empty(); // Clear previous page numbers
	for (var i = 1; i <= totalPages; i++) {
		var pageNumberLink = $('<a href="#">').text(i);
		pageNumberLink.click(function() {
			currentPage = parseInt($(this).text()); // Capture the page number from the link
			inboundFetchDefaultDataByDate(startDate, endDate, currentPage);
		});
		if (i === currentPage) {
			pageNumberLink.addClass('page-number'); // Add class to highlight current page number
		}
		pageNumbersContainer.append(pageNumberLink);
		pageNumbersContainer.append('|'); // Add a space between each page number link
	}
}





function inboundFetchDataByDateApiKey(startDate, endDate, apiKey, page) {
	checkSession()
		.done(function(response) {
			showLoadingAlert(); // Show loading alert
			const url = `${contextName}/inbound/api/monitoring/allentries/apikey?startDate=${startDate}&endDate=${endDate}&apiKey=${apiKey}&pageNumber=${page}`;

			$.ajax({
				url: url,
				type: "POST",
				dataType: "json",
				success: function(data) {
					// Close the swal alert
					swal.close();
					// Update the API key display
					$('.api-key-card').text(data.apiKey);
					$('.count-card').text(data.totalCount);
					$('.success-count').text(data.successCount);
					$('.failed-count').text(data.failedCount);
					inboundDataByDateApiKeyupdatePageNumbers(startDate, endDate, apiKey, data.totalPages);
					inboundDisplayDateApiKeyData(data, startDate, endDate);
					// Update current page and total pages
					currentPage = page;
					totalPages = data.totalPages;
					// Show/hide pagination buttons based on current page and total pages
					if (currentPage === 1) {
						$('#inapikeyprevPage').hide();
					} else {
						$('#inapikeyprevPage').show();
					}
					if (totalPages > 1 && currentPage < totalPages) {
						$('#inapikeynextPage').show();
					} else {
						$('#inapikeynextPage').hide();
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
					closeLoadingAlert();
					console.error('Error fetching data:', textStatus, errorThrown);

					if (jqXHR.status === 401) {
						// Redirect to the login page if unauthorized
						window.location.href = `${contextName}/sessionexpired`;
					} else {
						swal({
							title: 'Error!',
							text: 'Error fetching data: ' + textStatus,
							icon: 'error',
							button: 'Okay',
							className: "red-alert"
						});
					}
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

function inboundDataByDateApiKeyupdatePageNumbers(startDate, endDate, apiKey, totalPages) {
    var pageNumbersContainer = $('.inapikeypage-count');
    pageNumbersContainer.empty(); // Clear previous page numbers

    var pagesPerGroup = 10; // Number of pages to display at once
    var totalGroups = Math.ceil(totalPages / pagesPerGroup); // Total number of page groups
    var currentGroup = 1; // Start with the first group

    // Function to render a group of pages
    function renderPageGroup(group) {
        pageNumbersContainer.empty(); // Clear previous pages

        // Calculate the start and end page numbers for the current group
        var startPage = (group - 1) * pagesPerGroup + 1;
        var endPage = Math.min(group * pagesPerGroup, totalPages);

        // Render page links for the current group
        for (var i = startPage; i <= endPage; i++) {
            var pageNumberLink = $('<a href="#">').text(i);
            pageNumberLink.click(function () {
                currentPage = parseInt($(this).text()); // Capture the page number from the link
                inboundFetchDataByDateApiKey(startDate, endDate, apiKey, currentPage);
            });
            if (i === currentPage) {
                pageNumberLink.addClass('page-number'); // Add class to highlight current page number
            }
            pageNumbersContainer.append(pageNumberLink);
            pageNumbersContainer.append(' | '); // Add a separator between page links
        }

        // If there's a next group, add the ">>" link
        if (group < totalGroups) {
            var nextGroupLink = $('<a href="#">').text('>>');
            nextGroupLink.click(function () {
                currentGroup = group + 1; // Move to the next group
                renderPageGroup(currentGroup); // Render the next group of pages
            });
            pageNumbersContainer.append(nextGroupLink); // Append the ">>" link
        }

        // If there's a previous group, add the "<<" link
        if (group > 1) {
            var prevGroupLink = $('<a href="#">').text('<<');
            prevGroupLink.click(function () {
                currentGroup = group - 1; // Move to the previous group
                renderPageGroup(currentGroup); // Render the previous group of pages
            });
            pageNumbersContainer.prepend(prevGroupLink); // Prepend the "<<" link
        }
    }

    // Render the first group of pages
    renderPageGroup(currentGroup);
}



function inboundFetchDataByDateApiKeyStatus(startDate, endDate, apiKey, status, page) {
	checkSession()
		.done(function(response) {
			showLoadingAlert(); // Show loading alert
			const url = `${contextName}/inbound/api/monitoring/allentries/apikeystatus?startDate=${startDate}&endDate=${endDate}&apiKey=${apiKey}&status=${status}&pageNumber=${page}`;

			$.ajax({
				url: url,
				type: "POST",
				dataType: "json",
				success: function(data) {
					// Close the swal alert
					swal.close();
					$('.api-key-card').text(data.apiKey);
					$('.count-card').text(data.totalCount);
					$('.success-count').text(data.successCount);
					$('.failed-count').text(data.failedCount);
					inboundupdateDataByDateApiKeyStatusPageNumbers(startDate, endDate, apiKey, status, data.totalPages);
					inboundDisplayDateApiKeyStatusData(data, startDate, endDate);
					// Update current page and total pages
					currentPage = page;
					totalPages = data.totalPages;
					// Show/hide pagination buttons based on current page and total pages
					if (currentPage === 1) {
						$('#inapikeystatusprevPage').hide();
					} else {
						$('#inapikeystatusprevPage').show();
					}
					if (totalPages > 1 && currentPage < totalPages) {
						$('#inapikeystatusnextPage').show();
					} else {
						$('#inapikeystatusnextPage').hide();
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
					closeLoadingAlert();
					console.error('Error fetching data:', textStatus, errorThrown);

					if (jqXHR.status === 401) {
						// Redirect to the login page if unauthorized
						window.location.href = `${contextName}/sessionexpired`;
					} else {
						swal({
							title: 'Error!',
							text: 'Error fetching data: ' + textStatus,
							icon: 'error',
							button: 'Okay',
							className: "red-alert"
						});
					}
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


function inboundupdateDataByDateApiKeyStatusPageNumbers(startDate, endDate, apiKey, status, totalPages) {
    var pageNumbersContainer = $('.inapikeystatuspage-count');
    pageNumbersContainer.empty(); // Clear previous page numbers

    var pagesPerGroup = 10; // Number of pages to display at once
    var totalGroups = Math.ceil(totalPages / pagesPerGroup); // Total number of page groups
    var currentGroup = 1; // Start with the first group

    // Function to render a group of pages
    function renderPageGroup(group) {
        pageNumbersContainer.empty(); // Clear previous pages

        // Calculate the start and end page numbers for the current group
        var startPage = (group - 1) * pagesPerGroup + 1;
        var endPage = Math.min(group * pagesPerGroup, totalPages);

        // Render page links for the current group
        for (var i = startPage; i <= endPage; i++) {
            var pageNumberLink = $('<a href="#">').text(i);
            pageNumberLink.click(function () {
                currentPage = parseInt($(this).text()); // Capture the page number from the link
                inboundFetchDataByDateApiKeyStatus(startDate, endDate, apiKey, status, currentPage);
            });
            if (i === currentPage) {
                pageNumberLink.addClass('page-number'); // Add class to highlight current page number
            }
            pageNumbersContainer.append(pageNumberLink);
            pageNumbersContainer.append(' | '); // Add a separator between page links
        }

        // If there's a next group, add the ">>" link
        if (group < totalGroups) {
            var nextGroupLink = $('<a href="#">').text('>>');
            nextGroupLink.click(function () {
                currentGroup = group + 1; // Move to the next group
                renderPageGroup(currentGroup); // Render the next group of pages
            });
            pageNumbersContainer.append(nextGroupLink); // Append the ">>" link
        }

        // If there's a previous group, add the "<<" link
        if (group > 1) {
            var prevGroupLink = $('<a href="#">').text('<<');
            prevGroupLink.click(function () {
                currentGroup = group - 1; // Move to the previous group
                renderPageGroup(currentGroup); // Render the previous group of pages
            });
            pageNumbersContainer.prepend(prevGroupLink); // Prepend the "<<" link
        }
    }

    // Render the first group of pages
    renderPageGroup(currentGroup);
}





function inboundFetchDataByTxnRefNo(txnRefNo) {
	checkSession()
		.done(function(response) {
			showLoadingAlert(); // Show loading alert
			const url = `${contextName}/inbound/api/monitoring/entries/txnrefno?txnRefNo=${txnRefNo}`;

			$.ajax({
				url: url,
				type: "POST",
				dataType: "json",
				success: function(data) {
					// Close the swal alert
					swal.close();
					$('.api-key-card').text("");
					// Update the count displays
					$('.count-card').text("");
					$('.success-count').text("");
					$('.failed-count').text("");
					// Update the page numbers display
					inboundDisplayTxnRefNoData(data);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					closeLoadingAlert();
					console.error('Error fetching data:', textStatus, errorThrown);

					if (jqXHR.status === 401) {
						// Redirect to the login page if unauthorized
						window.location.href = `${contextName}/sessionexpired`;
					} else {
						swal({
							title: 'Error!',
							text: 'Error fetching data: ' + textStatus,
							icon: 'error',
							button: 'Okay',
							className: "red-alert"
						});
					}
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
