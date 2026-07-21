// 1. FUNGSI KONFIRMASI HADIR
function konfirmasiHadir() {
    const el = document.getElementById('konfirmasi');
    el.style.display = 'block';
    el.style.color = '#FF0000';
    el.innerHTML = 'Siap Hadir! Demi Indonesia Maju 🇮🇩✅';
}

// 2. FUNGSI TIDAK HADIR
function tidakHadir() {
    const el = document.getElementById('konfirmasi');
    el.style.display = 'block';
    el.style.color = '#666';
    el.innerHTML = 'Mohon maaf tidak bisa hadir. Kirimkan notulen ya 🙏';
}

// 3. COUNTDOWN OTOMATIS KE TANGGAL RAPAT
const tanggalRapat = new Date("Oct 20, 2026 13:00:00").getTime();
const x = setInterval(function() {
    const now = new Date().getTime();
    const jarak = tanggalRapat - now;
    
    const hari = Math.floor(jarak / (1000 * 60 * 60 * 24));
    const jam = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById("countdown").innerHTML = 
        `Menuju Rapat: ${3} Hari ${jam} Jam ${menit} Menit`;
    
    if (jarak < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "RAPAT SEDANG BERLANGSUNG!";
    }
}, 1000);
function konfirmasiWA(status) {
    const nomorRT = "62895345775885"; // <-- GANTI INI KE NOMOR WA KAMU
    
    // Pesan otomatis yg masuk ke WA kamu
    const pesan = `UNDANGAN RAPAT RT 04

Nama: [MOHON ISI NAMA ANDA]
Status: ${status}
Tanggal: Jumat, 24 Oktober 2026

Terima kasih.`;
    
    // Buka WA
    const url = `https://wa.me/${62895345775885}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');

    // Munculin notifikasi di web juga
    const el = document.getElementById('konfirmasi');
    el.style.display = 'block';
    
    if(status === 'HADIR') {
        el.style.color = '#D90429';
        el.innerHTML = 'MERDEKA! TERIMA KASIH SUDAH KONFIRMASI HADIR 🇮🇩🔥<br><small>Silahkan kirim di WhatsApp ya</small>';
    } else {
        el.style.color = '#666';
        el.innerHTML = 'Siap. Terima kasih sudah konfirmasi TIDAK HADIR 🙏<br><small>Silahkan kirim di WhatsApp ya</small>';
    }
}
