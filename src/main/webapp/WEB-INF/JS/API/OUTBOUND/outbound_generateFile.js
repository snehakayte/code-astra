// Function to generate HTML table and download as a file
function outgenerateDefaultDataFile(data) {
	var tableContent = '<table border="1">';
	// Adding table header
	tableContent += '<tr>';
	tableContent += '<th>API Key</th>';
	tableContent += '<th>Total Count</th>';
	tableContent += '<th>Success Count</th>';
	tableContent += '<th>Failed Count</th>';
	tableContent += '</tr>';
	// Adding table rows
	for (var i = 0; i < data.length; i++) {
		var entry = data[i];
		tableContent += '<tr>';
		tableContent += '<td>' + entry.apiKey + '</td>';
		tableContent += '<td>' + entry.totalCount + '</td>';
		tableContent += '<td>' + entry.successCount + '</td>';
		tableContent += '<td>' + entry.failedCount + '</td>';
		tableContent += '</tr>';
	}
	tableContent += '</table>';
	// Create a Blob containing the HTML table
	var blob = new Blob([tableContent], { type: 'text/html' });
	// Create a temporary anchor element to trigger the download
	var a = document.createElement('a');
	var url = window.URL.createObjectURL(blob);
	a.href = url;
	a.download = 'outboundDefault_data_' + currentdate + '.html';
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
function outgenerateApiKeyDataFile(data) {
	var textContent = '';
	$.each(data.outBoundDTOList, function(index, entry) {
		textContent += 'REC SEQ: ' + entry.recSeq + '\n';
		textContent += 'Transaction REF NO:: ' + entry.txnRefNo + '\n';
		textContent += 'Status: ' + entry.status + '\n';
		textContent += 'API Key: ' + entry.apiKey + '\n';
		textContent += 'Request Date: ' + entry.requestDttm + '\n';
		textContent += 'ResponseCode: ' + entry.responsecode + '\n';
		textContent += 'ResponseText: ' + entry.responsetext + '\n';
		textContent += '_________________________________________';
		textContent += '\n';
	});
	// Create a Blob containing the text
	var blob = new Blob([textContent], { type: 'text/plain' });
	// Create a temporary anchor element to trigger the download
	var a = document.createElement('a');
	var url = window.URL.createObjectURL(blob);
	a.href = url;
	a.download = 'outbound_ApiKey_data_' + currentdate + '.txt';
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
function outgeneratetxn_REF_NODataFile(data) {
	var textContent = '';
	$.each(data.outBoundDTOList, function(index, entry) {
		textContent += 'API Key: ' + entry.apiKey + '\n';
		textContent += 'Transaction REF NO: ' + entry.txnRefNo + '\n';
		textContent += 'Status: ' + entry.status + '\n';
		textContent += 'Response Code: ' + entry.responsecode + '\n';
		textContent += 'Response Text: ' + entry.responsetext + '\n';
		textContent += '_________________________________________';
		textContent += '\n';
	});
	// Create a Blob containing the text
	var blob = new Blob([textContent], { type: 'text/plain' });
	// Create a temporary anchor element to trigger the download
	var a = document.createElement('a');
	var url = window.URL.createObjectURL(blob);
	a.href = url;
	a.download = 'outbound_txn_REF_NO_data_' + currentdate + '.txt';
	// Append the anchor element to the body
	document.body.appendChild(a);
	// Programmatically trigger a click event on the anchor element
	a.click();
	// Remove the anchor element from the body
	document.body.removeChild(a);
	// Release the object URL
	window.URL.revokeObjectURL(url);
}