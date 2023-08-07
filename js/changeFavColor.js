const heartIcon = document.getElementById('heartIcon');

heartIcon.addEventListener('click', () => {

    if (heartIcon.classList.contains('active')) {
        heartIcon.classList.remove('active');
    } else {
        heartIcon.classList.add('active');
    }
});