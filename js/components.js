async function loadComponent(selector, filePath) {
  const res = await fetch(filePath);
  const html = await res.text();
  document.querySelector(selector).innerHTML = html;
}

async function initComponents() {
  const depth = window.componentDepth ?? '../../';

  await Promise.all([
    loadComponent('#navbar', `${depth}components/navbar/navbar.html`),
  ]);

  // active link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar-links a').forEach(link => {
    if (currentPath.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
}

initComponents();