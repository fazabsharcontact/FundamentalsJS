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

// console.log('soal no 6');
// async function publicApi() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         const daftarUser = data.map(item => ({
//             noId: item.userId,
//             deskripsi: item.title
//         }));

//         return daftarUser;
//     } catch (error) {
//         console.error('Gagal memuat data: ', error);
//     }
// };

// publicApi().then(console.log);

// console.log('soal no 7');
// async function ambilUniversitasNegara(negara) {
//     try {
//         const response = await fetch(`http://universities.hipolabs.com/search?country=${encodeURIComponent(negara)}`);
//         const data = await response.json();

//         return data;
//     } catch (error) {
//         console.error('Gagal memuat data: ', error);
//     }
// };

// ambilUniversitasNegara('indonesia').then(console.log);

console.log('soal no 8');
async function ambilProfilLengkap(idUser) {
    const ambilDataUser = fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`);
    const ambilDataPost = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${idUser}`);

    try {
        const [responseUser, responsePost] = await Promise.all([ambilDataUser, ambilDataPost]);

        const dataUser = await responseUser.json();
        const dataPost = await responsePost.json();

        console.log('Data berhasil dimuat, id: ', idUser);

        return {
            user: dataUser,
            post: dataPost
        };
    } catch (error) {
        console.error('gagal memuat data, error: ', error);
        throw error;
    }
};

ambilProfilLengkap(7).then(console.log);

console.log('soal no 9');
async function ambilPostById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = response.json();

        return data;
        response.ok
    }
}