const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const searchText = searchInput.value;

        if (searchText === '') window.location.href = '404.html';

        console.log('Texto de búsqueda:', searchText);

        searchInput.value = '';        
    }
});
