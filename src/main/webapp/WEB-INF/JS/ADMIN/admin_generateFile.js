// Function to generate text file
function usersectionentriesFile(data) {
	
    var textContent = '';
    $.each(data.userDto, function(index, entry) {		
        textContent += 'User Id: ' + entry.userId + '\n';
        textContent += 'User Name : ' + entry.userName + '\n';
        textContent += 'User Groups: ' + entry.userGroups + '\n';
        textContent += 'User Status: ' + entry.userStatus + '\n';
        textContent += 'User Type: ' + entry.userType + '\n';
        textContent += 'Email : ' + entry.email + '\n';
        textContent += '_________________________________________';
        textContent += '\n';
    });

    // Create a Blob containing the text
    var blob = new Blob([textContent], { type: 'text/plain' });

    // Create a temporary anchor element to trigger the download
    var a = document.createElement('a');
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'usersectionentries_' + currentdate + '.txt'; 

    // Append the anchor element to the body
    document.body.appendChild(a);

    // Programmatically trigger a click event on the anchor element
    a.click();

    // Remove the anchor element from the body
    document.body.removeChild(a);

    // Release the object URL
    window.URL.revokeObjectURL(url);
}