const toggleInfo = document.querySelector('.more');
const info = document.querySelector('#info');

toggleInfo.addEventListener('click', function () {
    const open = JSON.parse(toggleInfo.getAttribute('aria-expanded'));
    toggleInfo.setAttribute('aria-expanded', !open);
    info.hidden = !info.hidden;

    if (!info.hidden) {
        toggleInfo.setAttribute('aria-label', 'Close info');

    } else {
        toggleInfo.setAttribute('aria-label', 'Open info');
    }
})