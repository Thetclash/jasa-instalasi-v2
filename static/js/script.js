function redirectWA(serviceName) {
    const phoneNumber = "6282253823713"; // Ganti dengan nomor WA Anda
    const message = encodeURIComponent(`Halo, saya tertarik dengan layanan ${serviceName}. Bisa dibantu?`);
    const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = waUrl;
}
