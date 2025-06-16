function outboundFetchDefaultDataByDate(startDate, endDate, page) {
	checkSession()
		.done(function(response) {
			showLoadingAlert(); // Show loading alert
			const url = `${contextName}/outbound/api/monitoring/default?startDate=${startDate}&endDate=${endDate}&pageNumber=${page}`;
			$.ajax({
				url: url,
				type: "POST",
				dataType: "json",
				success: function(data) {
					closeLoadingAlert(); // Close loading alert
					$('.api-key-card').text("");
					// Update the count displays
					$('.count-card').text(data.totalCountByDate);
					$('.success-count').text(data.successCountByDate);
					$('.failed-count').text(data.failedCountByDate);
					let totalPages = data.outBoundDTOList && data.outBoundDTOList.length > 0 ? data.outBoundDTOList[0].totalPages : 0;
					outboundDataByDefaultupdatePageNumbers(startDate, endDate, data.totalPages);
					outboundDisplayDefaultData(data, startDate, endDate);
					// Update current page and total pages
					currentPage = page;
					totalPages = data.totalPages;

					// Show/hide pagination buttons based on current page and total pages
					if (currentPage === 1) {
						$('#outdefaultprevPage').hide();
					} else {
						$('#outdefaultprevPage').show();
					}
					if (totalPages > 1 && currentPage < totalPages) {
						$('#outdefaultnextPage').show();
					} else {
						$('#outdefaultnextPage').hide();
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
					closeLoadingAlert(); // Close loading alert

					console.error('Error fetching data:', textStatus, errorThrown);
					if (jqXHR.status === 401) {
						// Redirect to the login page if unauthorized
						window.location.href = `${contextName}/sessionexpired`;
					} else {
						swal({
							title: 'Error!',
							text: 'Error While fetching outbound from start date ' + startDate + 'end Date ' + endDate + " " + textStatus,
							icon: 'error',
							button: 'Okay',
							className: "red-alert",
							closeOnClickOutside: false,
							closeOnEsc: false
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

function outboundDataByDefaultupdatePageNumbers(startDate, endDate, totalPages) {
	var pageNumbersContainer = $('.outdefaultpage-count');
	pageNumbersContainer.empty(); // Clear previous page numbers
	for (var i = 1; i <= totalPages; i++) {
		var pageNumberLink = $('<a href="#">').text(i);
		pageNumberLink.click(function() {
			currentPage = parseInt($(this).text()); // Capture the page number from the link
			outboundFetchDefaultDataByDate(startDate, endDate, currentPage);
		});
		if (i === currentPage) {
			pageNumberLink.addClass('page-number'); // Add class to highlight current page number
		}
		pageNumbersContainer.append(pageNumberLink);
		pageNumbersContainer.append('|'); // Add a space between each page number link
	}
}

function outboundFetchDataByDateApiKey(startDate, endDate, apiKey, page) {
	checkSession()
		.done(function(response) {
			showLoadingAlert(); // Show loading alert
			const url = `${contextName}/outbound/api/monitoring/allentries/apikey?startDate=${startDate}&endDate=${endDate}&apiKey=${apiKey}&pageNumber=${page}`;

			$.ajax({
				url: url,
				type: "POST",
				dataType: "json",
				success: function(data) {
					closeLoadingAlert(); // Close loading alert
					// Update the API key display
					$('.api-key-card').text(data.apiKey);
					$('.count-card').text(data.totalCount);
					$('.success-count').text(data.successCount);
					$('.failed-count').text(data.failedCount);
					// Update the page numbers display
					outboundDataByDateApiKeyupdatePageNumbers(startDate, endDate, apiKey, data.totalPages);
					outboundDisplayDateApiKeyData(data, startDate, endDate);
					// Update current page and total pages
					currentPage = page;
					totalPages = data.totalPages;
					// Show/hide pagination buttons based on current page and total pages
					if (currentPage === 1) {
						$('#outapikeyprevPage').hide();
					} else {
						$('#outapikeyprevPage').show();
					}
					if (totalPages > 1 && currentPage < totalPages) {
						$('#outapikeynextPage').show();
					} else {
						$('#outapikeynextPage').hide();
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
							text: 'Error While fetching outbound data by ApiKey '+ apiKey +' from start date ' + startDate + 'end Date ' + endDate + " " + textStatus,
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


function outboundDataByDateApiKeyupdatePageNumbers(startDate, endDate, apikey, totalPages) {
    var pageNumbersContainer = $('.outapikeypage-count');
    pageNumbersContainer.empty(); // Clear previous page numbers

    var pagesPerGroup = 10; // Number of pages to display at once
    var totalGroups = Math.ceil(totalPages / pagesPerGroup); // Total number of page groups
    var currentGroup = 1; // Start with the first group

    // Function to render a group of pageslogins
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
                outboundFetchDataByDateApiKey(startDate, endDate, apikey, currentPage);
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



function outboundFetchDataByDateApiKeyStatus(startDate, endDate, apiKey, status, page) {
	checkSession()
		.done(function(response) {
			showLoadingAlert(); // Show loading alert
			const url = `${contextName}/outbound/api/monitoring/allentries/apikeystatus?startDate=${startDate}&endDate=${endDate}&apiKey=${apiKey}&status=${status}&pageNumber=${page}`;
			$.ajax({
				url: url,
				type: "POST",
				dataType: "json",
				success: function(data) {
					closeLoadingAlert(); // Close loading alert
					$('.api-key-card').text(data.apiKey);
					$('.count-card').text(data.totalCount);
					$('.success-count').text(data.successCount);
					$('.failed-count').text(data.failedCount);
					// Update the page numbers display
					outboundupdateDataByDateApiKeyStatusPageNumbers(startDate, endDate, apiKey, status, data.totalPages);
					outboundDisplayDateApiKeyStatusData(data, startDate, endDate);
					// Update current page and total pages
					currentPage = page;
					totalPages = data.totalPages;
					// Show/hide pagination buttons based on current page and total pages
					if (currentPage === 1) {
						$('#outapikeystatusprevPage').hide();
					} else {
						$('#outapikeystatusprevPage').show();
					}
					if (totalPages > 1 && currentPage < totalPages) {
						$('#outapikeystatusnextPage').show();
					} else {
						$('#outapikeystatusnextPage').hide();
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



function outboundupdateDataByDateApiKeyStatusPageNumbers(startDate, endDate, apikey, status, totalPages) {
    var pageNumbersContainer = $('.outapikeystatuspage-count');
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
                outboundFetchDataByDateApiKeyStatus(startDate, endDate, apikey, status, currentPage);
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



function outboundFetchDataByTxnRefNo(txnRefNo) {
	checkSession()
		.done(function(response) {
			showLoadingAlert(); // Show loading alert
			const url = `${contextName}/outbound/api/monitoring/entries/txnrefno?txnRefNo=${txnRefNo}`;

			$.ajax({
				url: url,
				type: "POST",
				dataType: "json",
				success: function(data) {
					closeLoadingAlert(); // Close loading alert

					$('.api-key-card').text("");
					$('.count-card').text("");
					$('.success-count').text("");
					$('.failed-count').text("");
					// Update the page numbers display
					outboundDisplayTxnRefNoData(data);
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
