// import restaurants from restaurant.js
import { restaurants } from './restaurant';
import { template } from './templateLiteral';

// dom elements
const form = document.querySelector('form');
const recommendationsContainer = document.querySelector('.recommendations');
const submitButton = document.querySelector('.btn-primary');

// add event listener to the form 
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // get checked radio button with name type
    const deliveryType = form.querySelector('input[name=type]:checked').id;

    // get selected check option from select field
    const foodCategory = form.querySelector('select[name=category]').value;

    // set remmoncationdations container to active
    if (recommendationsContainer.classList.contains('recommendations--active')) {
        recommendationsContainer.classList.remove('recommendations--active');
        setTimeout(() => {
            recommendationsContainer.classList.add('recommendations--active');
        }, 500)
    } else {
        recommendationsContainer.classList.add('recommendations--active');
    }

    // get restaurants that match the selected options
    const filteredRestaurants = restaurants.filter((restaurant) => {
        if (restaurant.category === foodCategory && restaurant.deliveryType.includes(deliveryType)) {
            return true;
        }
    });

    // update dom with filtered restaurants and template literal if filteredRestaurants is not empty
    if (filteredRestaurants.length > 0) {
        // select one random restaurant from filteredRestaurants
        const randomRestaurant = filteredRestaurants[Math.floor(Math.random() * filteredRestaurants.length)];
    
        console.log(randomRestaurant)


        // update dom with filtered restaurants and template literal
        const filteredRestaurantsContainer = document.querySelector('.recommendations__content');
        filteredRestaurantsContainer.innerHTML = template(randomRestaurant);
    } else {
        const filteredRestaurantsContainer = document.querySelector('.recommendations__content');
        filteredRestaurantsContainer.innerHTML = `<p>Leider keine Restaurants gefunden!</p><br><p>Versuche es doch nochmals mit anderen Filteroptionen.</p>`;
    }
});