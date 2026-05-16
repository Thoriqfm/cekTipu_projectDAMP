// Custom Scrollbar
const list = document.getElementById('historyList');
const track = document.getElementById('customScrollbar');
const thumb = document.getElementById('scrollThumb');

function updateThumb() {
    const trackHeight = track.clientHeight;
    const scrollRatio = list.scrollTop / (list.scrollHeight - list.clientHeight);

    const firstCard = list.querySelector('.history-card:not([style*="display: none"])');
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

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const historyCards = document.querySelectorAll('.history-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {

        // Update active state button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.textContent.toLowerCase();

        historyCards.forEach(card => {
            const status = card.dataset.status;

            if (filter === 'all' || status === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });

        updateThumb();
    })
});

// Show scrollbar while scroll, hide when idle
let scrollHideTimer;

list.addEventListener('scroll', () => {
    thumb.style.opacity = '1';

    clearTimeout(scrollHideTimer);
    scrollHideTimer = setTimeout(() => {
        thumb.style.opacity = '0';
    }, 1000);
});