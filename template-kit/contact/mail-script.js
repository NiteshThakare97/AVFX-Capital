
// This is the older one when using PHP 

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('myForm');
//     const statusElement = document.getElementById('status');

//     form.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent the default form submission

//         const formData = new FormData(form);

//         fetch('send_mail.php', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => response.text())
//         .then(data => {
//             statusElement.textContent = data;
//             if (data === "Mail sent successfully") {
//                 form.reset(); // Reset the form if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             statusElement.textContent = "Error occurred while sending mail";
//         });
//     });
// });



// This is the new JAvascript code for Emailjs.com 
function emailSend() {
    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = "Name " + userName + "<br/> Phone " + phone + "<br/> Email " + email;
    console.log('Sending email with the following details:', {
        userName: userName,
        phone: phone,
        email: email,
        messageBody: messageBody
    });

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "siamaq662@gmail.com",
        Password: "82F9D719F84E0877DA96B44DF31D95BA5066",
        To: 'nthakare09@gmail.com',
        From: "siamaq662@gmail.com",
        Subject: "This is the subject",
        Body: messageBody
    }).then(
        message => {
            console.log('Email send response:', message);
            if (message == 'OK') {
                swal("Successful", "Email sent successfully!", "success");
            } else {
                swal("Error", "Failed to send email.", "error");
            }
        }
    );
}
