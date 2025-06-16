function outboundDisplayDefaultData(data, startDate, endDate) {
	const $sectionsToShow = $('#buttonsection, #outdefaultsection');
	const $sectionsToHide = $('#indefaultsection, #inapikeysection, #outapikeysection, #inapikeystatussection, #outapikeystatussection, #intxnRefNosection, #outtxnRefNosection');
	const $tbody = $('#outdefault tbody');
	const $nextPageButton = $('#outdefaultnextPage');
	const $prevPageButton = $('#outdefaultprevPage');
	const $downloadButton = $('#downloadOutDefaultDataFileButton');
	const $apiKeySearchInput = $('#outApiKeySearch');

	// Clear sections and show relevant sections
	$sectionsToShow.show();
	$sectionsToHide.hide();

	// Clear previous entries in the table body and API keys dropdown
	$tbody.empty();

	// Clear previous entries in Search box
	$apiKeySearchInput.val('');
	$('#outByTxnRefNo').val('');


	const createButton = (className, text, apiKey, date) => {
		return $('<button>')
			.addClass(className)
			.text(text)
			.data({ apiKey, date });
	};

	const addRow = (entry) => {
		const $row = $('<tr>').append(
			$('<td>').css('text-align', 'center').append(createButton('fetchapi_keyButton btn btn-apikey-success', entry.apiKey, entry.apiKey, entry.date)),
			$('<td>').css('text-align', 'center').text(entry.apiDesc),
			$('<td>').css('text-align', 'center').append(createButton('successCountButton btn btn-apikey-success', entry.successCount, entry.apiKey, entry.date)),
			$('<td>').css('text-align', 'center').append(createButton('failedCountButton btn btn-apikey-danger', entry.failedCount, entry.apiKey, entry.date)),
			$('<td>').css('text-align', 'center').append(createButton('totalCountButton btn btn-apikey-secondary', entry.totalCount, entry.apiKey, entry.date))
		);
		return $row;
	};

if (!data || !Array.isArray(data.apiResponseDTOs) || data.apiResponseDTOs.length === 0 || data.totalCountByDate === 0) {

		$tbody.append('<tr><td colspan="5" style="text-align: center;"><p style="color: red;">No API requests are coming for OUTBOUND</p></td></tr>');
	} else {
		data.apiResponseDTOs.forEach(entry => {
			$tbody.append(addRow(entry));
		});
	}

	// Function to filter and display rows based on API key search (case insensitive)
	const filterAndDisplayRows = (apiKeySearch) => {
		$tbody.empty(); // Clear table body

if (!data || !Array.isArray(data.apiResponseDTOs) || data.apiResponseDTOs.length === 0 || data.totalCountByDate === 0) {

		$tbody.append('<tr><td colspan="5" style="text-align: center;"><p style="color: red;">No API requests are coming for OUTBOUND</p></td></tr>');
	  return;
	}

		let foundAny = false;

		data.apiResponseDTOs.forEach(entry => {
			if (entry.apiKey.toUpperCase().includes(apiKeySearch.toUpperCase())) {
				$tbody.append(addRow(entry));
				foundAny = true;
			}
		});

		if (!foundAny) {
			$tbody.append('<tr><td colspan="5" style="text-align: center;"><p style="color: red;">No matching API key found</p></td></tr>');
		}
	};

	// Event listener for API key search input
	$apiKeySearchInput.on('keyup', function() {
		const apiKeySearch = $(this).val().trim(); // Get the API key search query from input field
		filterAndDisplayRows(apiKeySearch);
	});


	// Event listener for TxnRefNo search button
	$('#outTxnRefNoSearchButton').on('click', function() {
		const txnRefNo = $('#outByTxnRefNo').val().trim(); // Get the TxnRefNo from the input field
		outboundFetchDataByTxnRefNo(txnRefNo);
	});

	const bindButtonClicks = () => {
		$tbody.off('click', '.fetchapi_keyButton, .totalCountButton').on('click', '.fetchapi_keyButton, .totalCountButton', function() {
			const apiKey = $(this).data('apiKey');
			currentPage = 1; // Reset current page to 1
			outboundFetchDataByDateApiKey(startDate, endDate, apiKey, currentPage);
		});

		$tbody.off('click', '.successCountButton').on('click', '.successCountButton', function() {
			const apiKey = $(this).data('apiKey');
			currentPage = 1; // Reset current page to 1
			outboundFetchDataByDateApiKeyStatus(startDate, endDate, apiKey, "C", currentPage); // Success status
		});

		$tbody.off('click', '.failedCountButton').on('click', '.failedCountButton', function() {
			const apiKey = $(this).data('apiKey');
			currentPage = 1; // Reset current page to 1
			outboundFetchDataByDateApiKeyStatus(startDate, endDate, apiKey, "F", currentPage); // Failed status
		});
	};

	// Pagination buttons
	$nextPageButton.off('click').on('click', () => {
		currentPage++;
		outboundFetchDefaultDataByDate(startDate, endDate, currentPage);
	});

	$prevPageButton.off('click').on('click', () => {
		if (currentPage > 1) {
			currentPage--;
			outboundFetchDefaultDataByDate(startDate, endDate, currentPage);
		}
	});

	$downloadButton.off('click').on('click', () => {
		outgenerateDefaultDataFile(data);
	});

	bindButtonClicks();
}



function outboundDisplayDateApiKeyData(data, startDate, endDate) {
	const $sectionsToShow = $('#buttonsection, #outapikeysection, #outdefaultsection');
	const $sectionsToHide = $('#indefaultsection, #inapikeysection, #intxnRefNosection, #outtxnRefNosection, #inapikeystatussection, #outapikeystatussection');
	const $tbody = $('#outapikeyentries tbody');
	const $nextPageButton = $('#outapikeynextPage');
	const $prevPageButton = $('#outapikeyprevPage');
	const $downloadButton = $('#downloadOutApiKeyDataFileButton');

	// Clear sections and show relevant sections
	$sectionsToShow.show();
	$sectionsToHide.hide();

	// Clear previous entries in the table body
	$tbody.empty();
	$('#outByTxnRefNo').val('');





	// Render table rows from data
if (!data.outBoundDTOList || data.outBoundDTOList.length === 0) {
		$tbody.append('<tr><td colspan="5" style="text-align: center;"><p style="color: red;">No API requests are coming for OUTBOUND Date from ' + startDate + ' to ' + endDate + '</p></td></tr>');
	} else {
		data.outBoundDTOList.forEach(entry => {
			const $row = $('<tr>').append(
				$('<td>').css('text-align', 'center').text(entry.recSeq),
				$('<td>').css('text-align', 'center').append($('<button>').addClass('outfetchTxnButton btn btn-apikey-success').text(entry.txnRefNo).data('txn-ref-no', entry.txnRefNo).css({ width: '350px', height: '50px', 'font-size': '15px' })),
				$('<td>').css('text-align', 'center').text(entry.status),
				$('<td>').css('text-align', 'center').text(entry.apiKey),
				$('<td>').css('text-align', 'center').text(entry.requestDttm),
				$('<td>').css('text-align', 'center').text(entry.responseCode),
				$('<td>').css('text-align', 'center').text(entry.responseText)
			);
			$tbody.append($row);
		});
	}


	const bindButtonClicks = () => {
		// Unbind and bind click event for transaction buttons
		$('.outfetchTxnButton').off('click').on('click', function() {
			const txnRefNo = $(this).data('txn-ref-no');
			outboundFetchDataByTxnRefNo(txnRefNo);
		});

		// Bind click event for download button
		$downloadButton.off('click').on('click', function() {
			outgenerateApiKeyDataFile(data);
		});
	};

	// Pagination buttons
	$nextPageButton.off('click').on('click', function() {
		const apiKey = $('#outapikeyentries tbody tr:first-child td:nth-child(4)').text(); // Get the API key from the first row
		currentPage++;
		outboundFetchDataByDateApiKey(startDate, endDate, apiKey, currentPage);
	});

	$prevPageButton.off('click').on('click', function() {
		if (currentPage > 1) {
			currentPage--;
			const apiKey = $('#outapikeyentries tbody tr:first-child td:nth-child(4)').text(); // Get the API key from the first row
			outboundFetchDataByDateApiKey(startDate, endDate, apiKey, currentPage);
		}
	});

	bindButtonClicks();
}

function outboundDisplayDateApiKeyStatusData(data, startDate, endDate) {
	const $sectionsToShow = $('#buttonsection, #outapikeystatussection, #outdefaultsection');
	const $sectionsToHide = $('#indefaultsection, #outapikeysection, #inapikeysection, #inapikeystatussection, #intxnRefNosection, #outtxnRefNosection');
	const $tbody = $('#outapikeystatusentries tbody');
	const $nextPageButton = $('#outapikeystatusnextPage');
	const $prevPageButton = $('#outapikeystatusprevPage');
	const $downloadButton = $('#downloadOutApiKeyDataFileButton');

	// Clear sections and show relevant sections
	$sectionsToShow.show();
	$sectionsToHide.hide();

	// Clear previous entries in the table body
	$tbody.empty();
	$('#outByTxnRefNo').val('');




	// Render table rows from data
if (!data.outBoundDTOList || data.outBoundDTOList.length === 0) {
		$tbody.append('<tr><td colspan="5" style="text-align: center;"><p style="color: red;">No API requests are coming for OUTBOUND Date from ' + startDate + ' to ' + endDate + '</p></td></tr>');
	} else {
		data.outBoundDTOList.forEach(entry => {
			const $row = $('<tr>').append(
				$('<td>').css('text-align', 'center').text(entry.recSeq),
			$('<td>').css('text-align', 'center').append($('<button>').addClass('outfetchTxnButton btn btn-apikey-success').text(entry.txnRefNo).data('txn-ref-no', entry.txnRefNo).css({ width: '350px', height: '50px', 'font-size': '15px' })),
				$('<td>').css('text-align', 'center').text(entry.status),
				$('<td>').css('text-align', 'center').text(entry.apiKey),
				$('<td>').css('text-align', 'center').text(entry.requestDttm),
				$('<td>').css('text-align', 'center').text(entry.responseCode),
				$('<td>').css('text-align', 'center').text(entry.responseText)
			);
			$tbody.append($row);
		});
	}



	const bindButtonClicks = () => {
		// Unbind and bind click event for transaction buttons
		$('.outfetchTxnButton').off('click').on('click', function() {
			const txnRefNo = $(this).data('txn-ref-no');
			outboundFetchDataByTxnRefNo(txnRefNo);
		});

		// Bind click event for download button
		$downloadButton.off('click').on('click', function() {
			outgenerateApiKeyDataFile(data);
		});
	};

	// Pagination buttons
	$nextPageButton.off('click').on('click', function() {
		const status = $('#outapikeystatusentries tbody tr:first-child td:nth-child(3)').text(); // Get the status from the first row
		const apiKey = $('#outapikeystatusentries tbody tr:first-child td:nth-child(4)').text(); // Get the API key from the first row
		currentPage++;
		outboundFetchDataByDateApiKeyStatus(startDate, endDate, apiKey, status, currentPage);
	});

	$prevPageButton.off('click').on('click', function() {
		if (currentPage > 1) {
			currentPage--;
			const status = $('#outapikeystatusentries tbody tr:first-child td:nth-child(3)').text(); // Get the status from the first row
			const apiKey = $('#outapikeystatusentries tbody tr:first-child td:nth-child(4)').text(); // Get the API key from the first row
			outboundFetchDataByDateApiKeyStatus(startDate, endDate, apiKey, status, currentPage);
		}
	});

	bindButtonClicks();
}


function outboundDisplayTxnRefNoData(data) {
	const $sectionsToShow = $('#buttonsection, #outtxnRefNosection, #outdefaultsection');
	const $sectionsToHide = $('#indefaultsection, #inapikeysection, #outapikeysection, #inapikeystatussection, #outapikeystatussection, #intxnRefNosection, #inapikeysection');
	const $tbody = $('#outtxnRefNo tbody');
	const $downloadButton = $('#downloadOuttxn_REF_NODataFileButton');

	// Clear sections and show relevant sections
	$sectionsToShow.show();
	$sectionsToHide.hide();

	// Clear previous entries in the table body
	$tbody.empty();
	$('#outByTxnRefNo').val('');


	// Render table rows from data
if (!data.outBoundDTOList || data.outBoundDTOList.length === 0) {
		$tbody.append('<tr><td colspan="5" style="text-align: center;"><p style="color: red;">No data available for the selected transaction reference number</p></td></tr>');
	} else {
		data.outBoundDTOList.forEach(entry => {
			const $row = $('<tr>').append(
				$('<td>').css('text-align', 'center').text(entry.apiKey),
				$('<td>').css('text-align', 'center').text(entry.txnRefNo),
				$('<td>').css('text-align', 'center').text(entry.status),
				$('<td>').css('text-align', 'center').text(entry.responseCode),
				$('<td>').css('text-align', 'center').text(entry.responseText)
			);
			$tbody.append($row);
		});
	}

	const bindButtonClicks = () => {
		// Bind click event to the dynamically created buttons
		$('.fetchTxnButton').off('click').on('click', function() {
			const txnRefNo = $(this).data('txn-ref-no'); // Get the transaction reference number from data attribute
			outboundFetchDataByTxnRefNo(txnRefNo); // Call the function to fetch data by transaction reference number
		});

		// Bind click event for download button
		$downloadButton.off('click').on('click', function() {
			outgeneratetxn_REF_NODataFile(data);
		});
	};

	bindButtonClicks();
}