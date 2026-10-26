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
    return daftarNilai.filter((kata) => kata >= 75);
}

const nilaiSiswa = [50, 60, 75, 89, 90];
console.log(filterNilaiLulus(nilaiSiswa));

console.log('Soal nomor 2');// Soal no 2
function hitungKataPanjang(daftarKata) {
    const seleksiKata = daftarKata.filter((kata) => kata.length > 5);
    const hasilSaringan = seleksiKata.length;

    return hasilSaringan;
};

console.log(hitungKataPanjang(["buku", "pesawat", "mobil", "matahari"]));

console.log('Soal nomor 3');// Soal no 3
function periksaTas(isiTas) {
    const seleksiIsiTas = isiTas.filter((isi) => isi === 'pisau');
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
    return daftarBuah.filter((buah) => buah[0] === hurufDepan);
};

console.log(filterBuah(['mangga', 'nanas', 'markisa', 'apel'], 'm'));

console.log('Soal nomor 5');// Soal no 5
function bukuKapital(daftarNama) {
    return daftarNama.map((nama) => nama.toUpperCase());
};

console.log(bukuKapital(['nama', 'saya', 'boy']));

console.log('Soal nomor 6');// Soal no 6
const keranjang = [
  { nama: "Sepatu", harga: 250000 },
  { nama: "Kaos", harga: 75000 },
  { nama: "Topi", harga: 50000 }
];

function ambilNamaProduk(daftarProduk) {
    return daftarProduk.map((produk) => produk.nama);
};

console.log(ambilNamaProduk(keranjang));

console.log('Soal nomor 7');// Soal no 7
function hitungDiskon(daftarHarga) {
    return daftarHarga.map((harga) => harga - 10000);
};

const hargaAwal = [50000, 100000, 15000];
console.log(hitungDiskon(hargaAwal));

console.log('Soal nomor 8');// Soal no 8
function hitungTotalPengeluaran(pengeluaran) {
    return pengeluaran.reduce((total, harga) => total + harga, 0);
};

const pengeluaranSaatIni = [12000, 45000, 30000];
console.log(hitungTotalPengeluaran(pengeluaranSaatIni));

console.log('Soal nomor 9');// Soal no 9
function ambilBarangMurah(daftarBarang) {
    const hasilSaring = daftarBarang.filter((barang) => barang.harga < 100000);
    const produkLolos = hasilSaring.map((barang) => barang.nama);

    return produkLolos;
};

const barang = [
    { nama: 'kemeja', harga: 150000 },
    { nama: 'kaos', harga: 70000 },
    { nama: 'kaos kaki', harga: 25000 }
];

console.log(ambilBarangMurah(barang));

console.log('Soal nomor 10');// Soal no 10
function hitungTotalMewah(daftarHarga) {
    const hasilSaring = daftarHarga.filter((harga) => harga > 500000);
    const jumlahHargaSaring = hasilSaring.reduce((total, harga) => total + harga, 0);

    return jumlahHargaSaring;
};

console.log(hitungTotalMewah([600000, 200000, 550000]));

console.log('Soal nomor 11');// Soal no 11
function hitungTotalPajak(hargaAsli) {
    const hargaPajak = hargaAsli.map((harga) => harga + 2000);
    const hargaAkhir = hargaPajak.reduce((total, harga) => total + harga, 0);

    return hargaAkhir;
};

console.log(hitungTotalPajak([1000, 2000, 3000]));