// const mahasiswa = {
//     nama : "Herdy",
//     nrp : "183040108",
//     email : "herdy@gmail.com"

// }
// console.log(JSON.stringify(mahasiswa));


// vanila js
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let mahasiswa = JSON.parse(this.responseText);
        console.log(mahasiswa);
    }
}

xhr.open('GET', 'coba.json', true);
xhr.send();


// //jquery
// $.getJSON('coba.json', function(data) {
//     console.log(data);
// });