document.querySelectorAll('.promo-item').forEach(item => {
    const hoverImage = item.getAttribute('data-hover');
    item.addEventListener('mouseenter', () => {
        item.querySelector('img').style.opacity = '0';
        item.style.setProperty('--hover-image', `url(${hoverImage})`);
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('img').style.opacity = '1';
        item.style.removeProperty('--hover-image');
    });
});