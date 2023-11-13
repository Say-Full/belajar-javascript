// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang 'JAVASCRIPT LANJUTAN'
const videoJsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// Hitung durasi masing-masing video
    .map(item => item.dataset.duration) // Krn kita ada buat elemen HTML baru yg bernama duration (data-duration), maka kita bs pkk method dataset di JS untuk ambil datanya dr HTML

// Ubah durasinya dari string menjadi angka dan ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// Jumlahkan semua detik
    .reduce((total, detik) => total + detik);

// Ubah formatnya menjadi jam : menit : detik
const jam = Math.floor(videoJsLanjut / 3600);
const menit = Math.floor( (videoJsLanjut - jam * 3600) / 60 );
const detik = Math.floor( (videoJsLanjut - jam * 3600) - (menit * 60) );

// Simpan di DOM
const spanJumlahVideo = document.querySelector('.jumlah-video');
spanJumlahVideo.textContent = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const spanTotalDurasi = document.querySelector('.total-durasi');
spanTotalDurasi.textContent = `${jam} jam : ${menit} menit : ${detik} detik`;