// HTML template literal
export const template = (restaurant) => `
    <div class="col col-md-4 mb-4">
        <div class="card">
            <img src="${restaurant.image}" class="card-img-top" alt="${restaurant.name}">
            <div class="card-body">
            <h5 class="card-title">${restaurant.name}</h5>
            <p class="card-text address">
                ${restaurant.address}<br>
                ${restaurant.zip}<br>
                ${restaurant.city}, ${restaurant.country}
            </p>

                <div class="button-container">
                    <a href="${restaurant.url}" target="_blank" class="btn btn-primary">Zur Webseite</a>
                    <a href="https://www.google.ch/maps/search/${restaurant.address}" target="_blank" class="btn btn-secondary">Zur Karte</a>    
                </div>
            </div>
        </div>
    </div>`;

