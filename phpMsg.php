<?php
// Database connection
$link = mysqli_connect("localhost", "root", "", "mawasemna");

// Check connection
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form data
$name = mysqli_real_escape_string($link, $_POST['name']);
$email = mysqli_real_escape_string($link, $_POST['email']);
$message = mysqli_real_escape_string($link, $_POST['message']);

// SQL Query to insert data
$sql = "INSERT INTO messages (users, email, messageUser) VALUES ('$name', '$email', '$message')";

if (mysqli_query($link, $sql)) {
    echo "Message sent successfully!";
    // $message = "<p style='color: green;'>Message sent successfully!</p>";
    
} else {
    echo "Error: " . mysqli_error($link);
    //  $message = "<p style='color: red;'>Error sending message: " . mysqli_error($link) . "</p>";
}

// Close connection
mysqli_close($link);
?>
