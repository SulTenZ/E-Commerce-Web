const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});



let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};



const buttons = document.querySelectorAll(".spesifikasi-btn");

buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
        const spesifikasi = document.querySelectorAll(".spesifikasi")[index];

        if (spesifikasi.style.display === "none" || spesifikasi.style.display === "") {
            spesifikasi.style.display = "block";
            button.textContent = "Sembunyikan Spesifikasi";
        } else {
            spesifikasi.style.display = "none";
            button.textContent = "Lihat Spesifikasi Lengkap";
        }
    });
});
