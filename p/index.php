<?php
// Mengambil URL
$request = trim($_SERVER['REQUEST_URI'], '/');

// Menentukan file berdasarkan URL
switch ($request) {
    case '':
        include 'index.html'; // Default ke index.html
        break;
    case 'lore':
        include 'lore.html';
        break;
    default:
        http_response_code(404);
        echo "404 Not Found";
        break;
}
?>