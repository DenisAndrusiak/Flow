const scrollBtn = document.createElement("button");
scrollBtn.classList.add("scroll-to-top");
scrollBtn.setAttribute("aria-label", "Повернутися вгору");

scrollBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add("visible");
    } else {
        scrollBtn.classList.remove("visible");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", () => {
    if (document.querySelector(".contact-modal")) return;

    const overlay = document.createElement("div");
    overlay.classList.add("contact-overlay");

    const modal = document.createElement("div");
    modal.classList.add("contact-modal");

    modal.innerHTML = `
        <div class="contact-modal__header">
            <h3>Зв’язатися з нами</h3>
            <button class="modal-close">&times;</button>
        </div>

        <form class="contact-form">
            <input type="text" class="contact-input" placeholder="Ваше ім’я" required>
            <input type="email" class="contact-input" placeholder="Е-пошта" required>
            <button type="submit" class="contact-submit">Зв’язатися</button>
        </form>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    setTimeout(() => {
        overlay.classList.add("active");
        modal.classList.add("active");
    }, 0);

    function closeModal() {
        modal.classList.remove("active");
        overlay.classList.remove("active");
        setTimeout(() => {
            modal.remove();
            overlay.remove();
        }, 300);
    }

    overlay.addEventListener("click", closeModal);
    modal.querySelector(".modal-close").addEventListener("click", closeModal);
});
