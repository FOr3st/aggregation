# aggregation
Node.js / Express aggregation microservice

## Description
Suppose you have an API
- GET api/users, api/users/:id
- GET api/customers, api/customers:id
- GET api/countries, api/countries:id, etc

You also have a SPA where you fetch users and customers and countries from API to render some page.  Probably you don’t want to make 3 or 5 or 10 ajax requests, instead you want to GET all resources in one go.

## Task
Make API handle that - build a reusable module/middleware for GETting multiple resources in one go. Should be easy to inject into any existing express app API.

### The​ ​Input
Example of final use:
- GET `/api/resources?user=api/users/5a0b6fe569f97d0c48277862&customer=api/customers/5a0b736aa05fa897b0856ac8&countries=api/countries`

### The​ ​Output
returns `{ user: {...}, customer: {...}, countries: [...] }`

## Starting up
To start, run: `npm start`.

## Tests
To run tests, use: `npm test`.

## Dependencies
Application requires node.js >= 6.4.0
