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

const textArray = ["web et logiciel junior"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        document.querySelector(".typing").textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        document.querySelector(".typing").textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
});