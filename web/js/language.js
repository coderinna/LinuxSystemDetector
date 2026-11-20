export function setLanguage(language) {
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    document.querySelectorAll(".language-button").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.lang === language
        );
    });
}

export function initializeLanguage() {
    document.querySelectorAll(".language-button").forEach(button => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
        });
    });

    setLanguage("en");
}