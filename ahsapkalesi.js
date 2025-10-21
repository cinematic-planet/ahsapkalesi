function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden-menu');
}

const menu = document.getElementById('mobileMenu');
const toggleButton = document.getElementById('menuToggle');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
  slide.classList.toggle('active', i === index);
 });
}

document.addEventListener("DOMContentLoaded", () => showSlide(0));

setInterval(() => {
  const slides = document.querySelectorAll('.slide');
  let current = Array.from(slides).findIndex(s => s.classList.contains('active'));
  showSlide((current + 1) % slides.length);
}, 5000);

function showThankYouMessage(event) {
  event.preventDefault();
  document.getElementById('thank-you').innerHTML = `
  <h3>Teşekkür ederiz!</h3>
  <p>Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.</p>
  `;
  document.querySelector('.contact-form').reset();
return false;
}
