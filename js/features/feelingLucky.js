import { restaurants } from "./restaurant";
import { template } from "./templateLiteral";

const feelingLucky = document.querySelector('.feeling-lucky button');
const recommendationsContainer = document.querySelector('.recommendations');

feelingLucky.addEventListener('click', (e) => {
  e.preventDefault();

  // select one random restaurant from filteredRestaurants
  const luckyGuess = restaurants[Math.floor(Math.random() * restaurants.length)];

  // set remmoncationdations container to active
  if (recommendationsContainer.classList.contains('recommendations--active')) {
    recommendationsContainer.classList.remove('recommendations--active');
    setTimeout(() => {
      recommendationsContainer.classList.add('recommendations--active');
    }, 500)
  } else {
    recommendationsContainer.classList.add('recommendations--active');
  }

  // display random restaurant with template literal
  const restaurantsFilteredContainer = document.querySelector('.recommendations__content');

  restaurantsFilteredContainer.innerHTML = template(luckyGuess);
});
