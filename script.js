// Smooth fade-in animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeElements.forEach(el => observer.observe(el));
});

// Lightbox for gallery
function openLightbox(index) {
  const photos = [
    'photo2.png', 'photo3.png', 'photo4.png', 'photo5.png',
    'photo6.png', 'photo7.png', 'photo8.png', 'photo9.png', 'photo10.png'
  ];
  
  const lightbox = document.createElement('div');
  lightbox.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4';
  lightbox.innerHTML = `
    <button onclick="closeLightbox()" class="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-50">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <img src="${photos[index]}" alt="Фото ${index + 1}" class="max-w-full max-h-[90vh] object-contain">
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
      <p class="text-lg font-medium">${index + 1} / ${photos.length}</p>
    </div>
  `;
  
  lightbox.onclick = closeLightbox;
  document.body.appendChild(lightbox);
}

function closeLightbox() {
  const lightbox = document.querySelector('[class*="fixed inset-0 z-50"]');
  if (lightbox) lightbox.remove();
}
