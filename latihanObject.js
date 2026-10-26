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