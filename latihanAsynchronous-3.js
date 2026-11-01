console.log('soal no 1');
async function unduhData() {
    const hasil = await Promise.resolve("Data berhasil diunduh.")
    return hasil;
};

unduhData().then(console.log);

console.log('soal no 2');
async function ambilDataUser() {
    const response = await fetch('https://typicode.com');
    const data = await response.json();
    return data;
};

ambilDataUser().then(console.log);

console.log('soal no 3');
async function ambilDataAman() {
    try {
        const response = await fetch('https://typicode.com');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Gagal memuat data:', error);
    }
};

ambilDataAman().then(console.log);