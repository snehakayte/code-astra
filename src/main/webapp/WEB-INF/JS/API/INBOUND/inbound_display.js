function inboundDisplayDefaultData(data, startDate, endDate) {
	const $sectionsToShow = $('#buttonsection, #indefaultsection');
	const $sectionsToHide = $('#outdefaultsection, #inapikeysection, #outapikeysection, #inapikeystatussection, #outapikeystatussection, #intxnRefNosection, #outtxnRefNosection');
	const $tbody = $('#indefault tbody');
	const $nextPageButton = $('#defaultnextPage');
	const $prevPageButton = $('#defaultprevPage');
	const $downloadButton = $('#downloadInDefaultDataFileButton');
	const $apiKeySearchInput = $('#inApiKeySearch');

	// Clear sections and show relevant sections
	$sectionsToShow.show();
	$sectionsToHide.hide();

	// Clear previous entries in the table body and API keys dropdown
	$tbody.empty();

	// Clear previous entries in Search box
	$apiKeySearchInput.val('');
	$('#inByTxnRefNo').val('');

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
    $tbody.append('<tr><td colspan="5" style="text-align: center;"><p style="color: red;">No API requests are coming for INBOUND</p></td></tr>');
} else {
    data.apiResponseDTOs.forEach(entry => {
        $tbody.append(addRow(entry));
    });
}



	// Function to filter and display rows based on API key search (case insensitive)
	const filterAndDisplayRows = (apiKeySearch) => {
        $tbody.empty(); // Clear table body

        if (!data || !Array.isArray(data.apiResponseDTOs) || data.apiResponseDTOs.length === 0) {
            $tbody.append('<tr><td colspan="5" style="text-align: center;"><p style="color: red;">No API requests available</p></td></tr>');
            return;
        }

        let foundAny = false;

        data.apiResponseDTOs.forEach(entry => {
            if (entry.apiKey && entry.apiKey.toUpperCase().includes(apiKeySearch.toUpperCase())) {
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
	$('#inTxnRefNoSearchButton').on('click', function() {
		const txnRefNo = $('#inByTxnRefNo').val().trim(); // Get the TxnRefNo from the input field
		inboundFetchDataByTxnRefNo(txnRefNo);
	});



	const bindButtonClicks = () => {
		$tbody.off('click', '.fetchapi_keyButton, .totalCountButton').on('click', '.fetchapi_keyButton, .totalCountButton', function() {
			const apiKey = $(this).data('apiKey');
			currentPage = 1; // Reset current page to 1
			inboundFetchDataByDateApiKey(startDate, endDate, apiKey, currentPage);
		});

		$tbody.off('click', '.successCountButton').on('click', '.successCountButton', function() {
			const apiKey = $(this).data('apiKey');
			currentPage = 1; // Reset current page to 1
			inboundFetchDataByDateApiKeyStatus(startDate, endDate, apiKey, "00", currentPage);
		});

		$tbody.off('click', '.failedCountButton').on('click', '.failedCountButton', function() {
			const apiKey = $(this).data('apiKey');
			currentPage = 1; // Reset current page to 1
			inboundFetchDataByDateApiKeyStatus(startDate, endDate, apiKey, "11", currentPage);
		});
	};

	// Pagination buttons
	$nextPageButton.off('click').on('click', () => {
		currentPage++;
		inboundFetchDefaultDataByDate(startDate, endDate, currentPage);
	});

	$prevPageButton.off('click').on('click', () => {
		if (currentPage > 1) {
			currentPage--;
			inboundFetchDefaultDataByDate(startDate, endDate, currentPage);
		}
	});
	$downloadButton.off('click').on('click', () => {
		ingenerateDefaultDataFile(data);
	});
	bindButtonClicks();
}







function inboundDisplayDateApiKeyData(data, startDate, endDate) {
	const $sectionsToShow = $('#buttonsection, #inapikeysection, #indefaultsection');
	const $sectionsToHide = $('#outdefaultsection, #outapikeysection, #inapikeystatussection, #outapikeystatussection, #intxnRefNosection, #outtxnRefNosection');
	const $tbody = $('#inapikeyentries tbody');
	const $downloadButton = $('#downloadInApiKeyDataFileButton');
	const $nextPageButton = $('#inapikeynextPage');
	const $prevPageButton = $('#inapikeyprevPage');

	// Show relevant sections and hide others
	$sectionsToShow.show();
	$sectionsToHide.hide();

	// Clear previous entries in the table body
	$('#inByTxnRefNo').val('');
	$tbody.empty();



if (!data.inBoundDTOList || data.inBoundDTOList.length === 0) {
$tbody.append('<tr><td colspan="5" style="text-align: center;"><p style="color: red;">No API requests are coming for INBOUND Date from ' + startDate + ' to ' + endDate + '</p></td></tr>');
	} else {
		data.inBoundDTOList.forEach(entry => {
			const $row = $('<tr>').append(
				$('<td>').css('text-align', 'center').text(entry.msgClientId),
				$('<td>').css('text-align', 'center').append($('<button>').addClass('infetchTxnButton btn btn-apikey-success').text(entry.txnRefNo).data('txn-ref-no', entry.txnRefNo).css({ width: '350px', height: '50px', 'font-size': '15px'})),
				$('<td>').css('text-align', 'center').text(entry.txnStatus),
				$('<td>').css('text-align', 'center').text(entry.msgApiKey),
				$('<td>').css('text-align', 'center').text(entry.msgInDttm)
			);
			$tbody.append($row);
		});
	}

	$nextPageButton.off('click').on('click', () => {
		const apiKey = $tbody.find('tr:first-child td:nth-child(4)').text();
		currentPage++;
		inboundFetchDataByDateApiKey(startDate, endDate, apiKey, currentPage);
	});

	$prevPageButton.off('click').on('click', () => {
		if (currentPage > 1) {
			currentPage--;
			const apiKey = $tbody.find('tr:first-child td:nth-child(4)').text();
			inboundFetchDataByDateApiKey(startDate, endDate, apiKey, currentPage);
		}
	});

	$(document).off('click', '.infetchTxnButton').on('click', '.infetchTxnButton', function() {
		const txnRefNo = $(this).data('txn-ref-no');
		inboundFetchDataByTxnRefNo(txnRefNo);
	});


	$downloadButton.off('click').on('click', () => {
		ingenerateApiKeyDataFile(data);
	});

}

function inboundDisplayDateApiKeyStatusData(data, startDate, endDate) {
	const $sectionsToShow = $('#buttonsection, #inapikeystatussection, #indefaultsection');
	const $sectionsToHide = $('#outdefaultsection, #outapikeysection, #inapikeysection, #outapikeystatussection, #intxnRefNosection, #outtxnRefNosection');
	const $tbody = $('#inapikeystatusentries tbody');
	const $downloadButton = $('#downloadInApiKeyStatusDataFileButton');
	const $nextPageButton = $('#inapikeystatusnextPage');
	const $prevPageButton = $('#inapikeystatusprevPage');

	// Show relevant sections and hide others
	$sectionsToShow.show();
	$sectionsToHide.hide();

	// Clear previous entries in the table body
	$('#inByTxnRefNo').val('');

	$tbody.empty();

// Render table rows from data
if (!data.inBoundDTOList || data.inBoundDTOList.length === 0) {
$tbody.append('<tr><td colspan="5" style="text-align: center;"><p style="color: red;">No API requests are coming for INBOUND Date from ' + startDate + ' to ' + endDate + '</p></td></tr>');
	} else {
	data.inBoundDTOList.forEach(entry => {
		const $row = $('<tr>').append(
			$('<td>').css('text-align', 'center').text(entry.msgClientId),
			$('<td>').css('text-align', 'center').append($('<button>').addClass('infetchTxnButton btn btn-apikey-success').text(entry.txnRefNo).data('txn-ref-no', entry.txnRefNo).css({ width: '350px', height: '50px', 'font-size': '15px' })),
			$('<td>').css('text-align', 'center').text(entry.txnStatus),
			$('<td>').css('text-align', 'center').text(entry.msgApiKey),
			$('<td>').css('text-align', 'center').text(entry.msgInDttm)
		);
		$tbody.append($row);
	});
	}

	$(document).off('click', '.infetchTxnButton').on('click', '.infetchTxnButton', function() {
		const txnRefNo = $(this).data('txn-ref-no');
		inboundFetchDataByTxnRefNo(txnRefNo);
	});

	$downloadButton.off('click').on('click', () => {
		ingenerateApiKeyDataFile(data);
	});

	$nextPageButton.off('click').on('click', () => {
		const status = $tbody.find('tr:first-child td:nth-child(3)').text();
		const apiKey = $tbody.find('tr:first-child td:nth-child(4)').text();
		currentPage++;
		console.log("status is "+ status)
		inboundFetchDataByDateApiKeyStatus(startDate, endDate, apiKey, status, currentPage);
	});

	$prevPageButton.off('click').on('click', () => {
		if (currentPage > 1) {
			currentPage--;
			const status = $tbody.find('tr:first-child td:nth-child(3)').text();
			const apiKey = $tbody.find('tr:first-child td:nth-child(4)').text();
					console.log("status is "+ status)

			inboundFetchDataByDateApiKeyStatus(startDate, endDate, apiKey, status, currentPage);
		}
	});
}

function inboundDisplayTxnRefNoData(data) {
	const $sectionsToShow = $('#buttonsection, #intxnRefNosection, #indefaultsection');
	const $sectionsToHide = $('#outdefaultsection, #outapikeysection, #outtxnRefNosection, #inapikeystatussection, #outapikeystatussection, #inapikeysection');
	const $tbody = $('#intxnRefNo tbody');
	const $downloadButton = $('#downloadIntxn_REF_NODataFileButton');

	// Show relevant sections and hide others
	$sectionsToShow.show();
	$sectionsToHide.hide();

	// Clear previous entries in the table body
	$tbody.empty();

if (!data.inBoundDTOList || data.inBoundDTOList.length === 0) {
		$tbody.append('<tr><td colspan="5" style="text-align: center;"><p style="color: red;">No data available for the selected transaction reference number</p></td></tr>');
	} else {
		data.inBoundDTOList.forEach(entry => {
		const $row = $('<tr>').append(
			$('<td>').css('text-align', 'center').text(entry.msgApiKey),
			$('<td>').css('text-align', 'center').text(entry.txnRefNo),
			$('<td>').css('text-align', 'center').text(entry.msgInDttm),
			$('<td>').css('text-align', 'left').text(entry.xml),
			$('<td>').css('text-align', 'center').text(entry.txnStatus)
		);
		$tbody.append($row);
	});
}
	$downloadButton.off('click').on('click', () => {
		ingeneratetxn_REF_NODataFile(data);
	});
}

function inboundUpdateDataDisplay(data) {
	// Update the API key display
	$('.api-key-card').text(data.msg_API_KEY);
	// Update the count displays
	$('.count-card').text(data.totalCount);
	$('.success-count').text(data.successCount);
	$('.failed-count').text(data.failedCount);
	// Update the page numbers display
	inboundUpdatePageNumbers(data.totalPages);
	// Display the data in the table
	inboundDisplayData(data);
}