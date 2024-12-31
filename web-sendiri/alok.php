<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Ambil data dari form
    $judul = $_POST['judul'];
    $nama = $_POST['nama'];
    $deskripsi = $_POST['deskripsi'];
    $gambar = $_POST['gambar'];

    // Menyusun konten HTML
    $htmlContent = "
    <!DOCTYPE html>
    <html lang='id'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>$judul</title>
        <style>
            body { font-family: Arial, sans-serif; }
            img { max-width: 100%; height: auto; }
        </style>
    </head>
    <body>
        <h1>$judul</h1>
        <h2>Nama: $nama</h2>
        <p>$deskripsi</p>
        <img src='$gambar' alt='Gambar Halaman'>
    </body>
    </html>";

    // Tentukan folder untuk menyimpan file baru
    $folderPath = 'pages/'; // Folder 'pages' untuk menyimpan halaman HTML baru
    if (!file_exists($folderPath)) {
        mkdir($folderPath, 0777, true); // Membuat folder jika belum ada
    }

    // Tentukan nama file baru
    $fileName = strtolower(str_replace(' ', '_', $judul)) . '.html'; // Nama file berdasarkan judul

    // Menyimpan konten HTML ke dalam file
    file_put_contents($folderPath . $fileName, $htmlContent);

    // Memberi pesan sukses dan link ke halaman yang baru dibuat
    echo "Halaman HTML berhasil dibuat! <br>";
    echo "Klik <a href='$folderPath$fileName'>di sini</a> untuk melihat halaman baru.";
}
?>
