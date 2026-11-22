
// Menampilkan pesan ketika website dibuka
console.log("Website Personal Profile berhasil dimuat!");

// Interaksi formulir kontak
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(`Terima kasih, ${name}! Ini hanya simulasi formulir. Pesan belum dikirim ke server.`);

    contactForm.reset();
});