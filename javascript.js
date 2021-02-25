//Navbar fixed
document.addEventListener("DOMContentLoaded", () => {
    console.log("para ver si funciona")
    headerHideShow();
    closeMenu();
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

const closeMenu = () => {
    let $links = document.querySelectorAll("a.navbar-collapse")

    $links.addEventListener("click", (e) => {
        return console.log("function closeMenu", e)
    })
}