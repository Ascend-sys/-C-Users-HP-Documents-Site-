function fadeOut(){
    const box = document.getElementById('fadeBox');
    box.classList.add('hidden');
}
function fadeIn(){
    const box = document.getElementById('fadeBox');
    box.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    // Ouvre/ferme le menu hamburger
    document.getElementById('Menu').onclick = function() {
        document.getElementById('Nume').classList.toggle('open');
    };

    // Ouvre/ferme le sous-menu Portfolio
    var portfolioLink = document.getElementById('portfolio-link');
    if (portfolioLink) {
        portfolioLink.onclick = function(event) {
            event.preventDefault();
            var parentLi = this.parentElement;
            parentLi.classList.toggle('open');
        };
    }
});