document.addEventListener('DOMContentLoaded', () => {

    /* ============================================================
       TOPIC FILTER — sidebar topic list
       ============================================================ */
    const topicItems = document.querySelectorAll('#topicList .topic-item');

    topicItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active from all
            topicItems.forEach(t => t.classList.remove('active'));
            // Set clicked as active
            item.classList.add('active');
        });
    });


    /* ============================================================
       FAQ ACCORDION — collapsible answers
       ============================================================ */
    const faqItems = document.querySelectorAll('#faqList .faq-item');

    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question');
        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            // Close all
            faqItems.forEach(f => f.classList.remove('open'));
            // Toggle clicked
            if (!isOpen) item.classList.add('open');
        });
    });


    /* ============================================================
       MODAL — Start New Discussion
       ============================================================ */
    const overlay   = document.getElementById('modalOverlay');
    const btnStart  = document.getElementById('btnStartDiscussion');
    const modalClose = document.getElementById('modalClose');

    function openModal() {
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    btnStart.addEventListener('click', openModal);
    modalClose.addEventListener('click', closeModal);

    // Close on backdrop click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });


    /* ============================================================
       ACTION MENU — three-dot button (placeholder)
       ============================================================ */
    document.querySelectorAll('.action-menu').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Placeholder — bisa dikembangkan jadi dropdown context menu
            console.log('Action menu clicked on card:', btn.closest('.discussion-card'));
        });
    });

});