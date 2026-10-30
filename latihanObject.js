console.log('soal no 1')
function buatKalimatProfil(user) {
    return `${user.nama} berusia ${user.umur} tahun`
};

const userProfil = {
    nama: 'Boy',
    umur: '25',
    kota: 'Bandung'
};

console.log(buatKalimatProfil(userProfil));

console.log('soal no 2')
function updateStatusPesanan(pesanan, statusBaru) {
    pesanan.status = statusBaru;
    return pesanan;
};

const dataOrder = {
    id: 101,
    status: 'diproses'
};

console.log(updateStatusPesanan(dataOrder, 'dikirim'));

console.log('soal no 3')
function cekSertifikasiHalal(produk) {
    if ('halal' in produk) {
        return true;
    } else {
        return false;
    }
};

const produk1 = {
    nama: 'keripik',
    halal: 'true'
};

const produk2 = {
    nama: 'donat',
    rasa: 'manis'
};

console.log(cekSertifikasiHalal(produk2));

console.log('soal no 4')
function hapusPassword(dataUser) {
    delete dataUser.password;
    return dataUser;
};

const data = {
    nama: 'Boy',
    email: 'boy@email.com',
    password: 'rahasia00'
};

console.log(hapusPassword(data));

console.log('soal no 5')
function ambilKunciObjek(produk) {
    return Object.keys(produk);
};

const dataProduk = {
    id: 1,
    nama: 'laptop',
    harga: 1000000,
    stok: 1
};

console.log(ambilKunciObjek(dataProduk));

console.log('soal no 6')
function hitungTotalNilai(rapor) {
    let total = 0;

    for (let mapel in rapor) {
        total += rapor[mapel]
    }

    return total;
};

const nilaiRapor = { matematika: 80, fisika: 75, kimia: 85 };
console.log(hitungTotalNilai(nilaiRapor));