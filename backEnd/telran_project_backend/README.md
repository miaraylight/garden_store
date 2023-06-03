# Garden Store Backend

This project is a backend server written in JavaScript using the Express framework. This server uses a SQLite3 database and ORM Sequelize to process database queries. In addition, the project uses the cors module to secure and allow cross-domain requests. The package.json file specifies server dependencies, including Express, Sequelize, and SQLite3, as well as a nodemon utility to automatically restart the server when code changes in development mode.

## Getting started with API

- `npm i `
- `npm run dev `

## API links

### GET
#### **/categories/all** - link to all categories
#### **/categories/1**   - link to products from the first category
#### **/products/all**   - link to get all products
#### **/products/1**     - link to get first product

### POST
#### **/sale/send**      - link to send coupon request
#### **/order/send**     - sending order to server