document.addEventListener("DOMContentLoaded", () => {
    headerHideShow();
})


const headerHideShow = () => {
    const $header = document.getElementById('header-f');

    window.addEventListener('scroll', () => {

        if ( window.scrollY > 300 && window.scrollY < 3700 ) {
            $header.classList.add('header-fix')
        } else {
            $header.classList.remove('header-fix')
        }

    });

}