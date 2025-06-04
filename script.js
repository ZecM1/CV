document.addEventListener(
  'wheel',
  (event) => {
    // Prevent default but allow zooming with Ctrl + scroll
    if (!event.ctrlKey) {
      const carousel = event.target.closest('.wrapper');
      event.preventDefault();

      if (carousel) {
        // Scroll the carousel horizontally.
        carousel.scrollBy({
          left: event.deltaY * 0.2,
          behavior: 'smooth',
        });
      } else {
        // Otherwise, scroll the window vertically.
        window.scrollBy({
          top: event.deltaY * 0.2,
          behavior: 'smooth',
        });
      }
    }
  },
  { passive: false },
);

// Buttons to scroll the carousel
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.wrapper');

const cardWidth = document.querySelector('.card').offsetWidth;
const scrollAmount = cardWidth;

prevButton.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Highlight the active link in the navigation bar
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.mainsection');
  const navLinks = document.querySelectorAll('.nav-link');
  function updateActiveLink() {
    const windowHeight = window.innerHeight;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateActiveLink);
  });
});

// Fade-in animation for elements when they come into view
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      console.log('IntersectionObserver entries:', entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    },
    { threshold: 0.2 },
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
});
