// Struktur File: js/script.js

// 1. Fungsionalitas Welcoming Speech (Poin 4)
document.addEventListener('DOMContentLoaded', () => {
    // Meminta nama pengguna
    let userName = prompt("Silakan masukkan Nama Anda:");
    
    // Default jika pengguna membatalkan atau tidak memasukkan nama
    if (!userName || userName.trim() === "") {
        userName = "Pengunjung";
    }

    const welcomeElement = document.getElementById('welcome-message');
    if (welcomeElement) {
        // Mengganti teks sapaan
        welcomeElement.textContent = `Hi ${userName}, Welcome To Website`;
    }

    // Menampilkan tanggal hari ini di output form
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        const now = new Date();
        // Format tanggal sesuai current output
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
        currentDateElement.textContent = now.toLocaleDateString('en-US', options).replace(',', '') + ' ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
    }
});


// 2. Fungsionalitas Validate Form & Show Value (Poin 5)
const messageForm = document.getElementById('message-form');
const outputData = document.getElementById('output-data');

if (messageForm) {
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk submit secara default (reload halaman)
        
        // --- 2.1. Validasi Sederhana ---
        const nameInput = document.getElementById('name');
        const birthDateInput = document.getElementById('birth-date');
        const genderInput = messageForm.querySelector('input[name="gender"]:checked');
        const pesanInput = document.getElementById('pesan');

        // Pastikan semua field terisi (required di HTML sudah ada, ini validasi tambahan)
        if (!nameInput.value || !birthDateInput.value || !genderInput || !pesanInput.value) {
            alert("Semua kolom harus diisi!");
            return;
        }

        // --- 2.2. Mengambil Nilai ---
        const data = {
            name: nameInput.value,
            birthDate: birthDateInput.value,
            gender: genderInput.value,
            pesan: pesanInput.value
        };

        // --- 2.3. Menampilkan Nilai ke HTML ---
        const outputHTML = `
            <p><strong>Nama:</strong> ${data.name}</p>
            <p><strong>Tanggal Lahir:</strong> ${data.birthDate}</p>
            <p><strong>Jenis Kelamin:</strong> ${data.gender}</p>
            <p><strong>Pesan:</strong> ${data.pesan}</p>
            <p style="margin-top: 15px; font-size: 0.9em; color: green;">Data berhasil disubmit!</p>
        `;

        outputData.innerHTML = outputHTML;

        // Opsi: Mereset form setelah submit berhasil
        // messageForm.reset();
    });
}