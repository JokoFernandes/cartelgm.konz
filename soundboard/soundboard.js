const allSounds = [
    document.getElementById("vine-boom"),
    document.getElementById("tuco-get-out"),
    document.getElementById("bakwe-the-hel-wak"),
    document.getElementById("wait-wait-wait-wait-wait-what-the-helllllll"),
    document.getElementById("sad"),
    document.getElementById("brain-fart"),
    document.getElementById("mimimimir"),
    document.getElementById("kokop"),
    document.getElementById("jawa100x"),
];

function Memesound(alok) {
    // Semua elemen suara yang ada
    

    // Hentikan semua suara yang sedang diputar
    allSounds.forEach(function(currentSound) {
        if (currentSound && !currentSound.paused) {
            currentSound.pause();
            currentSound.currentTime = 0;
        }
    });

    // Tentukan suara yang akan diputar berdasarkan nilai `alok`
    let sound = allSounds[alok];

    // Putar suara yang dipilih
    if (sound) {
        sound.play();
    }
}
function stopSound() {
    // Semua elemen suara yang ada
    
    allSounds.forEach(function(currentSound) {
        if (currentSound && !currentSound.paused) {
            currentSound.pause();
            currentSound.currentTime = 0;
        }
    });
}
