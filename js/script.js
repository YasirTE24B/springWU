const navButtons = document.querySelectorAll('#bottomNav button.navBtn');

navButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        navButtons.forEach(function(b) {
            b.classList.remove('active');
        });
        btn.classList.add('active');
    });
});