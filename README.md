# Express CRUD API with Authentication

This is a straightforward Express.js server that implements CRUD (Create, Read, Update, Delete) operations for a product resource. The server includes basic authentication for specific routes.

## Prerequisites

- Node.js installed
- npm (Node Package Manager) installed
- POSTMAN installed

## Project Structure

- index.js: Main entry point for the Express application.
- data.json: JSON file containing sample item for products.
- README.md: Project documentation.

## Routes

- GET /demo: A sample route demonstrating basic authentication using middleware.
- POST /products: Create a new product.
- GET /products: Retrieve all products.
- GET /products/:id: Retrieve a product by ID.
- PUT /products/:id: Update a product by ID.
- PATCH /products/:id: Partially update a product by ID.
- DELETE /products/:id: Delete a product by ID.

## Middleware

auth: Custom authentication middleware that checks the password in the request body. Used to secure the /demo route.
