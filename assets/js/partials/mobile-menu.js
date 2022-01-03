import MobileMenu from 'mmenu-light';

export default function () {
    const menu = new MobileMenu(document.querySelector("#mobile-menu"), "(max-width: 1024px)", "( slidingSubmenus: false)");

    let dir = document.querySelector('html').getAttribute("dir");
    const navigator = menu.navigation({title: salla.lang.get('blocks.header.main_menu')});
    const drawer = menu.offcanvas({position: dir == 'rtl' ? "right" : ""});

    document.querySelector("a[href='#mobile-menu']")
        .addEventListener("click", (evnt) => {
            evnt.preventDefault();
            drawer.close();
            drawer.open();
        });

    document.querySelectorAll(".close-mobile-menu").forEach((elem) => {
        elem.addEventListener("click", (evnt) => {
            evnt.preventDefault();
            drawer.close();
        });
    })
}