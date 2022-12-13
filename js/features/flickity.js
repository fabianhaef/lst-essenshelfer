import Flickity from 'flickity'

const slider = document.querySelector('.slider');

if (slider !== null) {
  const flkty = new Flickity(slider, {
    autoPlay: 3000,
    draggable: true,
    cellAlign: 'left',
    contain: true,
    freeScroll: false,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: false,
  });

  setTimeout(() => {
    flkty.resize();
    flkty.reposition();
  }, 3000)
}