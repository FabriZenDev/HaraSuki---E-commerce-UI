const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// QuerySelect a la lista de favoritos
const favoritesContent = document.getElementById('favoritesContent');

// Funciones para mostrar la lista de favoritos
const showFavorites = () => favoritesContent.style.display = 'block';
const hideFavorites = () => favoritesContent.style.display = 'none';

// QuerySelect a la lista del carrito
const cartContent = document.getElementById('cartContent');

// Funciones para mostrar el carrito
const showCart = () => cartContent.style.display = 'block';
const hideCart = () => cartContent.style.display = 'none';

