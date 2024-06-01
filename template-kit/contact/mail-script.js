document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const statusElement = document.getElementById('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        fetch('send_mail.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            statusElement.textContent = data;
            if (data === "Mail sent successfully") {
                form.reset(); // Reset the form if needed
            }
        })
        .catch(error => {
            console.error('Error:', error);
            statusElement.textContent = "Error occurred while sending mail";
        });
    });
});
