// import restaurants from restaurant.js
import { restaurants } from './restaurant';

// dom elements
const form = document.querySelector('form');
const recommendationsContainer = document.querySelector('.recommendations');
const reccType = document.querySelector('.recommendations__type');
const reccCategory = document.querySelector('.recommendations__category');

// html tempalte literal
const template = (restaurant) => `
    <div class="col col-sm-2 col-md-4 col-lg-3 mb-4">
        <div class="card">
            <img src="${restaurant.image}" class="card-img-top" alt="${restaurant.name}">
            <div class="card-body">
            <h5 class="card-title">${restaurant.name}</h5>
            <p class="card-text">${restaurant.category}</p>
            <a href="${restaurant.url}" target="_blank" class="btn btn-primary">Zum Restaurant</a>
            </div>
        </div>
    </div>`
    ;

// add event listener to form 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // get checked radio button with name type
    const deliveryType = form.querySelector('input[name=type]:checked').id;

    // get selected check option from select field
    const foodCategory = form.querySelector('select[name=category]').value;

    // set remmoncationdations container to active

    if (recommendationsContainer.classList.contains('recommendations--active')) {
        recommendationsContainer.classList.remove('recommendations--active');
        setTimeout(() => {
            console.log("Waiting")
        }, 5000)
        recommendationsContainer.classList.add('recommendations--active');
    } else {
        recommendationsContainer.classList.add('recommendations--active');
    }

    // update dom elements
    reccType.innerHTML = deliveryType;
    reccCategory.innerHTML = foodCategory;


    // get restaurants that match the selected options
    const filteredRestaurants = restaurants.filter((restaurant) => {
        if (restaurant.category === foodCategory && restaurant.deliveryType.includes(deliveryType)) {
            return true;
        }
    });

    // update dom with filtered restaurants and template literal if filteredRestaurants is not empty
    if (filteredRestaurants.length > 0) {
        const filteredRestaurantsContainer = document.querySelector('.recommendations__content');
        filteredRestaurantsContainer.innerHTML = filteredRestaurants.map((restaurant) => template(restaurant)).join('');
    } else {
        const filteredRestaurantsContainer = document.querySelector('.recommendations__content');
        filteredRestaurantsContainer.innerHTML = `<p>Leider keine Restaurants gefunden</p>`;
    }
});



// write function to save foodCategory and deliveryType to local storage
function saveToLocalStorage(foodCategory, deliveryType) {
    localStorage.setItem('foodCategory', foodCategory);
    localStorage.setItem('deliveryType', deliveryType);
}




