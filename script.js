document.addEventListener('DOMContentLoaded', () => {
    // Featured post slider
const slides = document.querySelector('.slides');
const slideCount = slides.children.length;
let currentIndex = 0;

const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlidePosition();
});

    // Menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-navigation');
  
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  
    // Live search filter
    const searchInput = document.getElementById('search-input');
    const posts = document.querySelectorAll('.post');
  
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
  
      posts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        if (title.includes(filter)) {
          post.style.display = '';
        } else {
          post.style.display = 'none';
        }
      });
    });
  });
  