
const hargaTiketPerTujuan = {
    Jakarta: 500000,
    Bandung: 300000,
    Bekasi: 350000,
    Majalengka: 200000,
};

function isiHargaTiket() {
    const tujuan = document.getElementById("tujuan").value;
    const hargaTiket = document.getElementById("hargaTiket");
    hargaTiket.value = hargaTiketPerTujuan[tujuan];
}

function hitungTotalBayar() {
    const hargaTiket = parseFloat(document.getElementById("hargaTiket").value);
    const jumlahTiket = parseFloat(document.getElementById("jumlahTiket").value);
    const diskon = parseFloat(document.getElementById("diskon").value) || 0;
    const member = document.getElementById("member").checked;

    let totalBayar = hargaTiket * jumlahTiket;

    if (diskon > 0) {
        totalBayar -= (totalBayar * diskon) / 100;
    }

    if (member) {
        totalBayar *= 0.9;
    }

    document.getElementById("totalBayar").value = totalBayar;
}

document.getElementById("tujuan").addEventListener("change", isiHargaTiket);
isiHargaTiket();
