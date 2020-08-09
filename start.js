const express = require('express');
const app = express();
const faker = require('faker');
const cors = require('cors');
const jwt = require('express-jwt');
const port = 5000;

const locations = require('./constants');
app.use(cors());

const listingStatuses = [true, false];
const status = Math.floor(Math.random() * 2);

const properties = [];
const property = {
    id: Math.floor(Math.random() * 2000) + 500,
    userId: Math.floor(Math.random() * 2000) + 500,
    address: `${faker.address.streetAddress()}`,
    city: 'Oakland',
    state: 'CA',
    zipcode: faker.address.zipCode(),
    max_occupancy: Math.floor(Math.random() * 10 +1),
    sqft: Math.floor(Math.random() * 2000) + 500,
    image: 'https://via.placeholder.com/300',
    isListed: true
};
const listings = [];
const listing = {
    id: Math.floor(Math.random() * 2000) + 500,
    property: {
        id: Math.floor(Math.random() * 2000) + 500,
        userId: Math.floor(Math.random() * 2000) + 500,
        address: `${faker.address.streetAddress()}`,
        city: 'Oakland',
        state: 'CA',
        zipcode: faker.address.zipCode(),
        max_occupancy: Math.floor(Math.random() * 10 +1),
        sqft: Math.floor(Math.random() * 2000) + 500,
        image: 'https://via.placeholder.com/300',
        isListed: true
    },
    start: '2020-01-31',
    end: '2020-03-30'
};

for (let i = 1; i < 21; i++) {
    properties.push({
        id: i,
        userId: i,
        address: `${faker.address.streetAddress()}`,
        city: 'Oakland',
        state: 'CA',
        zipcode: faker.address.zipCode(),
        max_occupancy: Math.floor(Math.random() * 10 +1),
        sqft: Math.floor(Math.random() * 2000) + 500,
        image: 'https://via.placeholder.com/300',
        isListed: true
    })
}

for (let i = 1; i < 6; i++) {
    listings.push({
        id: i,
        property: {
            id: i,
            userId: i,
            address: `${faker.address.streetAddress()}`,
            city: 'Oakland',
            state: 'CA',
            zipcode: faker.address.zipCode(),
            max_occupancy: Math.floor(Math.random() * 10 +1),
            sqft: Math.floor(Math.random() * 2000) + 500,
            image: 'https://via.placeholder.com/300',
            isListed: true
        },
        start: '2020-01-31',
        end: '2020-03-30'
    })
}

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/properties', (req, res) => {
    res.json(properties);
});

app.get('/api/properties/:id', (req, res) => {
    res.json(property);
});

app.get('/api/listings', (req, res) => {
    res.json(listings);
});

app.post('/api/listings/:id', (req, res) => {
    res.json(listing);
});

app.delete('/api/listings/:id', (req, res) => {
    res.json({ status: 'deleted' });
});

app.post('/api/login', (req, res) => {
    res.json({ token: '1234567890'})
});

app.post('/api/signup', (req, res) => {
    res.json({ token: '1234567890'})
});

app.post('/api/token', (req, res) => {
    res.json({ token: '1234567890'})
});

app.listen(port, () => console.log(`Rentalated API listening on port ${port}!`));

