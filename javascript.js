document.addEventListener("DOMContentLoaded", () => {
    headerHideShow();
    console.log(screen.width)
})


const headerHideShow = () => {
    const $header = document.getElementById('header-f');

    window.addEventListener('scroll', () => {

        if ( window.scrollY > 300 && window.scrollY < 3700 && screen.width > 1000) {
            $header.classList.add('header-fix')
        } else {
            $header.classList.remove('header-fix')
        }

    });

}