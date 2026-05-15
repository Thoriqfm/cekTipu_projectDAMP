const list = document.getElementById('historyList');
const track = document.getElementById('customScrollbar');
const thumb = document.getElementById('scrollThumb');

function updateThumb() {
    const trackHeight = track.clientHeight;
    const scrollRatio = list.scrollTop / (list.scrollHeight - list.clientHeight);

    const firstCard = list.querySelector('.history-card');
    const cardHeight = firstCard ? firstCard.offsetHeight : 80;

    const maxThumbTop = trackHeight - cardHeight;

    thumb.style.height = cardHeight + 'px';
    thumb.style.top = (scrollRatio * maxThumbTop) + 'px';
}

list.addEventListener('scroll', updateThumb);
window.addEventListener('resize', updateThumb);

window.addEventListener('load', function () {
    requestAnimationFrame(function () {
        requestAnimationFrame(updateThumb);
    });
});

list.addEventListener('wheel', function (e) {
    e.preventDefault();
    list.scrollBy({
        top: e.deltaY * 1.0,
        behavior: 'smooth'
    })
}, { passive: false });
