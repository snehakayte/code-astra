$(document).ready(function() {
    const currentDate = new Date().toISOString().split('T')[0];
    const secretKey = 'a7f4c2e9d183b56e40fa9b12c8d6e37a';

    // Regex Patterns
    const userIdPattern = /^[A-Za-z]+$/;
    const empIdPattern = /^[A-Za-z0-9\-]+$/;
    const mobilePattern = /^[0-9]{10}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const textPattern = /^[A-Za-z ]+$/;
    const postalPincodePattern = /^[0-9]{6}$/;

    // Form Submission Handlers
    $('#registrationForm').off('submit').on('submit', handleRegistrationFormSubmit);
    $('#updatedForm').off('submit').on('submit', handleUpdatedFormSubmit);

    // Registration Form Submit Handler
    function handleRegistrationFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = gatherRegistrationFormData();
        const validationErrors = validateFormData(formData);

        if (validationErrors.length > 0) {
            showError(validationErrors[0]); // Show the first error
            return;
        }

        // Check if User ID is unique before registration
        checkUserIdUnique(formData.userId, formData.email, formData.mobile, formData.dob);
    }

    // Update Form Submit Handler
    function handleUpdatedFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = gatherUpdatedFormData();
        const validationErrors = validateFormData(formData);

        if (validationErrors.length > 0) {
            showError(validationErrors[0]); // Show the first error
            return;
        }

        // Encrypt email and mobile before submitting the update form
        $('input[name="email"]').val(encryptField(formData.email));
        $('input[name="mobile"]').val(encryptField(formData.mobile));

        // Submit the updated form
        $("#updatedForm").off("submit").submit();
    }

    // Gather form data
    function gatherRegistrationFormData() {
        return {
            userId: $('#userId').val(),
            empId: $('#empId').val(),
            userName: $('#userName').val(),
            mobile: $('#mobile').val(),
            email: $('#email').val(),
            dob: $('#dob').val(),
            joiningDate: $('#joiningDate').val(),
            clientGroups: $('input[name="userGroups"]:checked'),
            state: $('#state').val(),
            city: $('#city').val(),
            country: $('#country').val(),
            region: $('#region').val(),
            postalPincode: $('#postalPincode').val()
        };
    }

    // Gather updated form data
    function gatherUpdatedFormData() {
        return {
            empId: $('#UPDATEempId').val(),
            userName: $('#UPDATEuserName').val(),
            mobile: $('#UPDATEmobile').val(),
            email: $('#UPDATEemail').val(),
            dob: $('#UPDATEdob').val(),
            joiningDate: $('#UPDATEjoiningDate').val(),
            clientGroups: $('input[name="userGroups"]:checked'),
            state: $('#UPDATEstate').val(),
            city: $('#UPDATEcity').val(),
            country: $('#UPDATEcountry').val(),
            region: $('#UPDATEregion').val(),
            postalPincode: $('#UPDATEpostalPincode').val()
        };
    }

    // Form validation
    function validateFormData(data) {
        const errors = [];

        if (!userIdPattern.test(data.userId)) {
            errors.push("User ID should only contain alphabets, no white spaces.");
        }
        if (!empIdPattern.test(data.empId)) {
            errors.push("Employee No. should only contain alphanumeric characters and hyphens.");
        }
        if (data.mobile && !mobilePattern.test(data.mobile)) {
            errors.push("Mobile number should be 10 digits.");
        }
        console.log("email :"+data.email)
        if (!emailPattern.test(data.email)) {
            errors.push("Please enter a valid email.");
        }

        if (!validateDOB(data.dob)) {
            errors.push("Date of Birth must be at least 20 years ago.");
        }
        if (!isJoiningDateValid(data.joiningDate)) {
            errors.push("Date of Joining must be in the past, but not today or a future date.");
        }
        if (data.clientGroups.length === 0) {
            errors.push("Please select at least one Client Group.");
        }
        if (!textPattern.test(data.userName)) {
            errors.push("User Name should only contain alphabets.");
        }
        if (data.state && !textPattern.test(data.state)) {
            errors.push("State should only contain alphabets.");
        }
        if (data.city && !textPattern.test(data.city)) {
            errors.push("City should only contain alphabets.");
        }
        if (data.country && !textPattern.test(data.country)) {
            errors.push("Country should only contain alphabets.");
        }
        if (data.region && !textPattern.test(data.region)) {
            errors.push("Region should only contain alphabets.");
        }
        if (data.postalPincode && !postalPincodePattern.test(data.postalPincode)) {
            errors.push("Post Code should be a 6-digit number.");
        }

        return errors;
    }

    // Display error messages
    function showError(message) {
        swal({ text: message, icon: "error", closeOnClickOutside: false });
    }

    // Validate Date of Birth (at least 20 years ago)
    function validateDOB(dob) {
        const today = new Date();
        const birthDate = new Date(dob);
        const age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        return age > 20 || (age === 20 && (month > 0 || (month === 0 && today.getDate() >= birthDate.getDate())));
    }

    // Validate Date of Joining (must be in the past, but not today or future)
    function isJoiningDateValid(joiningDate) {
        const today = new Date();
        const joiningDateDate = new Date(joiningDate);
        const oneDayBeforeToday = new Date();
        oneDayBeforeToday.setDate(today.getDate() - 1);
        return joiningDateDate <= oneDayBeforeToday;
    }

    // Encrypt field value
    function encryptField(value) {
        const iv = CryptoJS.lib.WordArray.random(16);
        const encryptedValue = CryptoJS.AES.encrypt(value, CryptoJS.enc.Utf8.parse(secretKey), {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7
        });
        return iv.toString(CryptoJS.enc.Base64) + ":" + encryptedValue.ciphertext.toString(CryptoJS.enc.Base64);
    }

    // Check if User ID is unique during registration
    function checkUserIdUnique(userId, email, mobile, dob) {
        checkSession()
            .done(function(response) {
                $.ajax({
                    url: contextName + '/admin/api/monitoring/usercount/' + userId,
                    type: 'POST',
                    dataType: 'json',
                    success: function(count) {
                        if (count > 0) {
                            showError('User ID already exists. Please choose a different one.');
                        } else {
                            // Encrypt fields before registration submission
                            $('input[name="email"]').val(encryptField(email));
                            $('input[name="mobile"]').val(encryptField(mobile));
                            $("#registrationForm").off("submit").submit(); // Correct form submission for registration
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.error('Error checking user ID:', textStatus, errorThrown);
                        showError('An error occurred while checking the User ID. Please try again.');
                    }
                });
            })
            .fail(function(jqXHR) {
                console.error("Session check failed:", jqXHR.status, jqXHR.responseText);
                if (jqXHR.status === 401) {
                    window.location.href = `${contextName}/sessionexpired`;
                }
            });
    }
});
