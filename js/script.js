// Perfume icon sparkle animation
const perfumeIcon = document.getElementById('perfumeIcon');
if (perfumeIcon) {
  perfumeIcon.addEventListener('mouseenter', () => {
    perfumeIcon.animate([
      { filter: 'drop-shadow(0 0 8px #FFD70088)' },
      { filter: 'drop-shadow(0 0 24px #FFD700cc)' },
      { filter: 'drop-shadow(0 0 8px #FFD70088)' }
    ], {
      duration: 900,
      iterations: 1
    });
  });
}

// CTA button click (placeholder)
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    alert('Thank you! You will be notified.');
  });
});
