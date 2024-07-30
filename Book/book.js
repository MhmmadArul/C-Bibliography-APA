const button = document.querySelector('.btn');

button.addEventListener('click' , function() {
    const nadep1 = document.querySelector('#namaDepan1').value;
    const nateng1 = document.querySelector('#namaTengah1').value;
    const nakh1 = document.querySelector('#namaAkhir1').value;

    const nadep2 = document.querySelector('#namaDepan2').value;
    const nateng2 = document.querySelector('#namaTengah2').value;
    const nakh2 = document.querySelector('#namaAkhir2').value;

    const nadep3 = document.querySelector('#namaDepan3').value;
    const nateng3 = document.querySelector('#namaTengah3').value;
    const nakh3 = document.querySelector('#namaAkhir3').value;

    const thunTerbit = document.querySelector('#tahunTerbit').value;

    const judulBuku = document.querySelector('#judulBuku').value;

    const penerbit = document.querySelector('#penerbit').value

    const show = document.querySelector('#show');
    show.innerHTML = nakh1  + ',' + (nadep1.charAt(0)) + '.' + (nateng1.charAt(0)) + '.,' + nakh2 + ',' + (nadep2.charAt(0)) + '.' + (nateng2.charAt(0)) + '.,' + nakh3 + ',' + (nadep3.charAt(0)) + '.' + (nateng3.charAt(0)) + '.' + '(' + thunTerbit + ').' + judulBuku + '.' + penerbit + '.';
})