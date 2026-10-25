// function hitungTotal(arr) {
//     return arr.reduce((total, angka) => total + angka, 0);
// };

// console.log(hitungTotal([2, 4, 6]));

// function angkaGenap(arr) {
//     return arr.filter((angka) => angka % 2 === 0);
// };

// console.log(angkaGenap([1, 2, 3, 4]));

// function hitungKata(arr, kataKunci) {
    
//     const hasilSaringan = arr.filter(kata => kata === kataKunci);

//     return hasilSaringan.length;
// };

// const buah = ['apel', 'jeruk', 'apel'];

// console.log(hitungKata(buah, 'jeruk'));


console.log('Soal nomor 1');// Soal no 1
function filterNilaiLulus(daftarNilai) {
    return daftarNilai.filter(kata => kata >= 75);
}

const nilaiSiswa = [50, 60, 75, 89, 90];
console.log(filterNilaiLulus(nilaiSiswa));

console.log('Soal nomor 2');// Soal no 2
function hitungKataPanjang(daftarKata) {
    const seleksiKata = daftarKata.filter(kata => kata.length > 5);
    const hasilSaringan = seleksiKata.length;

    return hasilSaringan;
};

console.log(hitungKataPanjang(["buku", "pesawat", "mobil", "matahari"]));

console.log('Soal nomor 3');// Soal no 3
function periksaTas(isiTas) {
    const seleksiIsiTas = isiTas.filter(isi => isi === 'pisau');
    const temuanPisau = seleksiIsiTas.length;

    if (temuanPisau > 0) {
        return 'bahaya';
    } else {
        return 'aman';
    }
};

console.log(periksaTas(['sepatu', 'kalung', 'pisau']));

console.log('Soal nomor 4');// Soal no 4
function filterBuah(daftarBuah, hurufDepan) {
    return daftarBuah.filter(buah => buah[0] === hurufDepan);
};

console.log(filterBuah(['mangga', 'nanas', 'markisa', 'apel'], 'm'));