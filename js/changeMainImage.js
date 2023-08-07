changeMainImage = ( thumbnail ) => {
    const mainImage = document.getElementById('mainImage');

    if(mainImage.src == thumbnail.src) return;

    mainImage.src = thumbnail.src;

    mainImage.classList.add('slide-in-right');
    setTimeout(() => {
        mainImage.classList.remove('slide-in-right');
    }, 500);
}