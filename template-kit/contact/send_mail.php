<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "siamaq662@gmail.com"; // Replace with your email address
    $name = htmlspecialchars($_POST['form-field-name']);
    $email = filter_var($_POST['form-field-email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['form-field-field_f77c348']);
    $subject = htmlspecialchars($_POST['form-field-field_8c8086b']);
    $message = htmlspecialchars($_POST['form-field-message']);
    
    $full_message = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";
    
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $full_message, $headers)) {
        echo "Mail sent successfully";
    } else {
        echo "Failed to send mail";
    }
} else {
    echo "Invalid request";
}
?>
