document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




function copyToClipboard(elementId) {
    const textToCopy = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Kod kopyalandı!");
    }).catch(() => {
        alert("Kod kopyalanamadı. Lütfen tekrar deneyin.");
    });
}
