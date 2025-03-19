<?php
// Database connection details
$servername = "localhost";
$username = "database_username";  //  database username
$password = "database_password";  //  database password
$dbname = "database_name";  //  database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data
    $first_name = htmlspecialchars(trim($_POST['first-name']));
    $last_name = htmlspecialchars(trim($_POST['last-name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $country = htmlspecialchars(trim($_POST['country']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid email format'); window.history.back();</script>";
        exit;
    }

    // Prepare and bind SQL statement
    $stmt = $conn->prepare("INSERT INTO contact_requests (first_name, last_name, email, phone, country, message) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $first_name, $last_name, $email, $phone, $country, $message);

    // Execute the query
    if ($stmt->execute()) {
        echo "<script>alert('Your message has been sent successfully.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Error: " . $stmt->error . "'); window.history.back();</script>";
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "<script>alert('Invalid request.'); window.history.back();</script>";
}
?>
