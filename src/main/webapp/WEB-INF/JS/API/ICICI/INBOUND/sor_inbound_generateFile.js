// Function to generate text file
function ingenerateDefaultDataFile(data) {
	var textContent = '';
	$.each(data, function(index, entry) {
		textContent += 'API Key: ' + entry.apiKey + '\n';
		textContent += 'Total Count : ' + entry.totalCount + '\n';
		textContent += 'Success Count: ' + entry.successCount + '\n';
		textContent += 'Failed Count: ' + entry.failedCount + '\n';
		textContent += '_________________________________________';
		textContent += '\n';
	});
	// Create a Blob containing the text
	var blob = new Blob([textContent], { type: 'text/plain' });
	// Create a temporary anchor element to trigger the download
	var a = document.createElement('a');
	var url = window.URL.createObjectURL(blob);
	a.href = url;
	a.download = 'inboundDefault_data_' + currentdate + '.txt';
	// Append the anchor element to the body
	document.body.appendChild(a);
	// Programmatically trigger a click event on the anchor element
	a.click();
	// Remove the anchor element from the body
	document.body.removeChild(a);
	// Release the object URL
	window.URL.revokeObjectURL(url);
}

// Function to generate text file
function ingenerateApiKeyDataFile(data) {
	var textContent = '';
	$.each(data.inBoundDTOList, function(index, entry) {
		textContent += 'Transaction REF NO:: ' + entry.txnRefNo + '\n';
		textContent += 'Status: ' + entry.txnStatus + '\n';
		textContent += 'API Key: ' + entry.msgApiKey + '\n';
		textContent += 'Date inserted: ' + entry.msgInDttm + '\n';
		textContent += '_________________________________________';
		textContent += '\n';
	});
	// Create a Blob containing the text
	var blob = new Blob([textContent], { type: 'text/plain' });
	// Create a temporary anchor element to trigger the download
	var a = document.createElement('a');
	var url = window.URL.createObjectURL(blob);
	a.href = url;
	a.download = 'inbound_ApiKey_data_' + currentdate + '.txt';
	// Append the anchor element to the body
	document.body.appendChild(a);
	// Programmatically trigger a click event on the anchor element
	a.click();
	// Remove the anchor element from the body
	document.body.removeChild(a);
	// Release the object URL
	window.URL.revokeObjectURL(url);
}

// Function to generate text file
function ingeneratetxn_REF_NODataFile(data) {
	var textContent = '';
	$.each(data.inBoundDTOList, function(index, entry) {
		textContent += 'API Key: ' + entry.msgApiKey + '\n';
		textContent += 'Transaction REF NO: ' + entry.txnRefNo + '\n';
		textContent += 'Status: ' + entry.status + '\n';
		textContent += '_________________________________________';
		textContent += '\n';
	});
	// Create a Blob containing the text
	var blob = new Blob([textContent], { type: 'text/plain' });
	// Create a temporary anchor element to trigger the download
	var a = document.createElement('a');
	var url = window.URL.createObjectURL(blob);
	a.href = url;
	a.download = 'inbound_txn_ref_no_data_' + currentdate + '.txt';
	// Append the anchor element to the body
	document.body.appendChild(a);
	// Programmatically trigger a click event on the anchor element
	a.click();
	// Remove the anchor element from the body
	document.body.removeChild(a);
	// Release the object URL
	window.URL.revokeObjectURL(url);
}