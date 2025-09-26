// DOM SELECTION
// document.getElementById() -> mengembalikan element
const judul = document.getElementById('judul');

judul.style.color = 'blue'; //memanipulasi style warna dari text id = 'judul'
judul.style.backgroundColor = '#ddd'; //memanipulasi style background text dari id = 'judul'
judul.innerHTML = 'Nurmieai'; //memanipulasi text dari id = 'judul'

// document.getElementsByTagName() -> mengembalikan HTMLCollections
const p = document.getElementsByTagName('p');
for ( let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue'; //karena bentuknya beda dengan elements jadinya tidak bisa langsung select semua element p. karena ini seperti array, jadi masukkan indeks nya '[2]' terlebih dahalu
}

const h1 = document.getElementsByTagName('h1')[0]; //indeks bisa langsung inline jika hanya ingin memanipulasi satu indeks saja
h1.style.fontSize = '50px';

// document.getElementsByClassName -> HTMLCollections
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Javascript coy'; //mirip seperti byTagName, namun yang di ambil adalah class nya. dan bentuk indeks bisa di taruh seperti ini maupun seperti yang sebelumnya.