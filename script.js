const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');  
}
list.forEach((item) =>
item.addEventListener('click', activeLink))

document.querySelectorAll('.veille-card').forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank'); // Ouvre dans un nouvel onglet
        }
    });
});
