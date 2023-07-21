const imgs = document.querySelectorAll('.img-container img');
const dotsContainer = document.querySelector('.dots-container');
const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');
let dots;
let currentImg = 0;
createDots();

//Creating dots based on how many images are there in the HTML
function createDots() {
  for (let i = 0; i < imgs.length; i++) {
    let newDot = document.createElement('div');
    newDot.classList.add('dot');
    newDot.addEventListener('click', (e) => {
      reset();
      updateImgDot(e.target);
    });
    dotsContainer.appendChild(newDot);
  }
  dots = Array.prototype.slice.call(document.querySelectorAll('.dot'));
  dots[0].classList.add('selected');
}

//If the right or left arrow is clicked, reset the current image and dot and update the carousel
rightBtn.addEventListener('click', () => {
  currentImg++;
  reset();
  updateImgArrow();
});
leftBtn.addEventListener('click', () => {
  currentImg--;
  reset();
  updateImgArrow();
});

//Remove the active classes from the current displayed image and dot
function reset() {
  imgs.forEach((img) => img.classList.remove('displayed'));
  dots.forEach((dot) => dot.classList.remove('selected'));
}

//Update the image if the caller is a dot
function updateImgDot(dot) {
  imgs[dots.indexOf(dot)].classList.add('displayed');
  dot.classList.add('selected');
  currentImg = dots.indexOf(dot);
}

//Update the image if the caller is an arrow
function updateImgArrow() {
  if (currentImg > imgs.length - 1) {
    currentImg = 0;
  } else if (currentImg < 0) {
    currentImg = imgs.length - 1;
  }
  imgs[currentImg].classList.add('displayed');
  dots[currentImg].classList.add('selected');
}
