const domSliderImage = document.querySelector('.slider-image')

const sliderImages = [
  {
    src: '../img/stock1.jpeg',
  },
  {
    src: '../img/stock2.jpeg',
  },
  {
    src: '../img/stock3.jpeg',
  },
  {
    src: '../img/stock4.jpeg',
  },
]

let currentIndex = 0;

const replaceSliderImage = () => {
  domSliderImage.src = sliderImages[currentIndex].src;
}


setTimeout(() => {  
  setInterval(() => {
    ++currentIndex;
    if (currentIndex >= sliderImages.length) {
      currentIndex = 0;
    }
    replaceSliderImage();
  }, 4000);
} , 4000);