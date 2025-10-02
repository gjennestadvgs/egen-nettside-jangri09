function showLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.getElementById('lightbox-img').src = '';
}
// Lukk med Escape
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") closeLightbox();
});
// Lukk når du klikker utenfor bildet
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});