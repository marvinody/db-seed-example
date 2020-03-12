# DB Seed Example

An example repo showing how to structure node project in order to have a sync file run only when you want...

## Setup Instructions

- clone (or fork) this repo down to your machine
- cd into the directory
- `npm install`
- `createdb db-seed-example`
- `npm run seed`

To run the server, `npm run start:dev`

## Stuff to do

- try adding a POST route to add to the DB
- Modify the DB.js schema and add new stuff
  - (don't forget to run `npm run seed` every time you modify the schema or you're gonna have a bad time...)
- Add some tests?
- Maybe some PUT/DELETE routes?
