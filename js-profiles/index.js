const profileLinks = document.querySelectorAll('.perfil');

function normalizeProfileImagePath(src) {
  if (!src) return src;
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith('/')) return `..${src}`;
  if (src.startsWith('./')) return `../${src.slice(2)}`;
  if (src.startsWith('assets/')) return `../${src}`;
  return src;
}

profileLinks.forEach(link => {
  link.addEventListener('click', () => {
    const profile = link.querySelector('figure');
    const img = profile?.querySelector('img');
    const caption = profile?.querySelector('figcaption');
    if (!img || !caption) return;

    const name = caption.textContent.trim();
    const rawSrc = img.getAttribute('src') || img.src;
    const image = normalizeProfileImagePath(rawSrc);

    localStorage.setItem('perfilAtivoNome', name);
    localStorage.setItem('perfilAtivoImagem', image);
  });
});
