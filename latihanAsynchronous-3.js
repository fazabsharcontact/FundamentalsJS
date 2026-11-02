// console.log('soal no 1');
// async function unduhData() {
//     const hasil = await Promise.resolve("Data berhasil diunduh.")
//     return hasil;
// };

// unduhData().then(console.log);

// console.log('soal no 2');
// async function ambilDataUser() {
//     const response = await fetch('https://typicode.com');
//     const data = await response.json();
//     return data;
// };

// ambilDataUser().then(console.log);

// console.log('soal no 3');
// async function ambilDataAman() {
//     try {
//         const response = await fetch('https://typicode.com');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Gagal memuat data:', error);
//     }
// };

// ambilDataAman().then(console.log);

// console.log('soal no 4');
// async function ambilSemuaPostingan() {
//     try {
//         const response = await fetch('https://typicode.com');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Gagal memuat data: ', error);
//     }
// };

// ambilSemuaPostingan().then(data => console.log(data.slice(0, 2)));

// console.log('soal no 5');
// async function ambilUserPostinganSatu() {
//     try {
//         const response = await fetch('https://typicode.com');
//         const semuaPost = await response.json();
//         const hasilSaring = semuaPost.filter((post) => post.userId === 1);

//         return hasilSaring;
//     } catch (error) {
//         console.error('Gagal memuat data: ', error);
//     }
// };

// ambilUserPostinganSatu().then(data => console.log(data.slice(0, 2)));

console.log('soal no 6');
async function publicApi() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const daftarUser = data.map(item => ({
            noId: item.userId,
            deskripsi: item.title
        }));

        return daftarUser;
    } catch (error) {
        console.error('Gagal memuat data: ', error);
    }
};

publicApi().then(console.log);

console.log('soal no 7');
async function ambilUniversitasNegara(negara) {
    try {
        const response = await fetch(`http://universities.hipolabs.com/search?country=${encodeURIComponent(negara)}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Gagal memuat data: ', error);
    }
};

ambilUniversitasNegara('indonesia').then(console.log);
