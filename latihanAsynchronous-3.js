console.log('soal no 1');
async function unduhData() {
    const hasil = await Promise.resolve("Data berhasil diunduh.")
    return hasil;
};

unduhData().then(console.log);