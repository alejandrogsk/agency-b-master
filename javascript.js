//Navbar fixed
const position = window.addEventListener('scroll', () => {

    const $header = document.getElementById('header-f');

    if ( window.scrollY > 300 && window.scrollY < 3700 ) {
        $header.classList.add('header-fix')
    } else {
        $header.classList.remove('header-fix')
    }
});