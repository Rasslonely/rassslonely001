const nama = "Rasslonely";
let usia = 17;

let biodata = document.getElementById('biodata');

// DARK-MODE
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 20) {
        generasi = "generasi remaja";
    } else if (usia > 19 && usia < 30) {
        generasi = "generasi dewasa";
    } else if (usia > 3 && usia < 11) {
        generasi = "generasi anak-anak";
    } else if (usia < 4) {
        generasi = "generasi balita";
    } else {
        generasi = "generasi alien";
    }

    return biodata.innerHTML = generasi;
}

// console.log (`nama saya adalah ${nama} dan umur saya adalah ${usia} tahun`);

console.log(nama)
console.log(usia)

generateBiodata();