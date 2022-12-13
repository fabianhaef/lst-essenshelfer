// faker
import { faker } from '@faker-js/faker';

// get a list of different kind of foods
const foodCategories = [
    'Asiatisch',
    'Italienisch',
    'Mexikanisch',
    'Amerikanisch',
    'Indisch',
    'Griechisch',
    'Französisch',
    'Spanisch',
    'Deutsch',
    'Thailändisch',
    'Japanesisch',
];

const possibleDeliveryTypesOdd = [
    'Abholen',
    'Bestellen',
    'Auswärts',
];

const possibleDeliveryTypesEven = [
    'Auswärts',
    'Abholen',
];

const fakeRestaurantNames = [
    "The Hungry Asian",
    "The Italian Pizza Spot",
    "The Mexian Taco Spot",
    "The American Burger Place",
    "The Indian Curry Spot",
    "The Greek Gyro Spot",
    "The French Crepe Spot",
    "The Spanish Tapas Spot",
    "The German Schnitzel Spot",
    "The Thai Curry Spot",
    "The Japanese Sushi Spot",
    "Another Asian Restaurant",
    "Another Italian Restaurant",
    "Another Mexian Restaurant",
    "Another American Restaurant",
    "Another Indian Restaurant",
    "Another Greek Restaurant",
    "Another French Restaurant",
    "Another Spanish Restaurant",
    "Another German Restaurant",
    "Another Thai Restaurant",
    "Another Japanesisch Restaurant",
    "Restaurant Löwen",
    "Restaurant Tiger",
    "Restaurant Bär",
    "Restaurant Wolf",
    "Restaurant Adler",
    "Restaurant Fuchs",
    "Restaurant Hase",
    "Restaurant Käfer",
    "Restaurant Krokodil",
    "Restaurant Kröte",
    "Restaurant Luchs",
    "Restaurant Marder",
    "Restaurant Mäusebussard",
];

const fakeRestaurants = [];

for (let i = 0; i < fakeRestaurantNames.length; i++) {
    const fakeRestaurant = {
        name: fakeRestaurantNames[i],
        category: foodCategories[Math.floor(Math.random() * foodCategories.length)],
        deliveryType: i % 2 === 0 ? possibleDeliveryTypesEven : possibleDeliveryTypesOdd,
        image: faker.image.abstract(640, 640, true),
        url: faker.internet.domainName(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        zip: faker.address.zipCode(),
        country: faker.address.country(),
    };

    fakeRestaurants.push(fakeRestaurant);
}

export const restaurants = fakeRestaurants;
