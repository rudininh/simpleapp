function keliling_lingkaran() {
    console.log("saya terpanggil");
    const phi = 3.14;

    let r = document.getElementById("jarijari").value;
    let K_lingkaran = 2 * phi * r;
    console.log(K_lingkaran);

    document.getElementById("keliling").value = K_lingkaran;

    // return K_lingkaran;
}

function keliling_lingkaran_2(r) {
    console.log("saya terpanggil");
    const phi = 3.14;

    let K_lingkaran = 2 * phi * r;
    console.log(K_lingkaran);

    return K_lingkaran;
}
