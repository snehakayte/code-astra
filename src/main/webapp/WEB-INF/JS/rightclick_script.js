// Function to disable specific keys and right-click
function disableKeysAndRightClick() {
    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Keydown event listener
    document.addEventListener('keydown', function(event) {
        // Disable F12 key
        if (event.keyCode === 123) {
            alert('No F-keys');
            event.preventDefault();
            return;
        }

        // Disable Ctrl + Shift + I (Inspect Element)
        if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
            event.preventDefault();
            return;
        }

        // Disable Ctrl + Shift + J (Console)
        if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
            event.preventDefault();
            return;
        }

        // Disable Ctrl + U (View Source)
        if (event.ctrlKey && event.keyCode === 85) {
            event.preventDefault();
            return;
        }

        // Disable Ctrl + N (New Window)
        if (event.ctrlKey && event.keyCode === 78) {
            alert("No new window");
            event.preventDefault();
            return;
        }

        // Disable F5 (Refresh)
        if (event.keyCode === 116) {
            event.preventDefault();
            window.status = 'F5 is disabled';
            return;
        }

        // Disable Backspace key in certain conditions
        var target = event.target;
        if ((target.tagName.toUpperCase() === 'INPUT' && (target.type.toUpperCase() === 'TEXT' || target.type.toUpperCase() === 'PASSWORD' || target.type.toUpperCase() === 'FILE')) || target.tagName.toUpperCase() === 'TEXTAREA') {
            if (target.readOnly || target.disabled) {
                event.preventDefault();
                window.status = 'Backspace is disabled';
            }
        } else {
            if (event.keyCode === 8) { // Backspace
                event.preventDefault();
                window.status = 'Backspace is disabled';
            }
        }
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    disableKeysAndRightClick();
});