const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;


function showSlide(index) {
  carouselItems.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) {
      item.classList.add('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}, 5000); 