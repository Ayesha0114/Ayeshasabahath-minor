
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();


    let phoneNumber = document.getElementById('phone').value;
    let pincode = document.getElementById('zip').value;

    if (phoneNumber.length !== 10) {
        alert('You have entered Invalid phone number');
        return; 
    }

    if (pincode.length !== 6) {
        alert('Sorry! This pincode is Invalid');
        return;
    }


    alert('Your Registration is successful!'); // For demonstration purposes

    document.getElementById('registrationForm').submit();
});