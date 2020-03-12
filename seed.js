const db = require('./db')
const { conn } = db
const {Person} = db.models

const syncAndSeed = async () => {
  console.log('Dropping...')
  await conn.sync({ force: true })
  const names = ['Prof', 'Peet', 'Manny']
  console.log('Seeding...')
  const people = await Promise.all(names.map(name => Person.create({ name })))
  console.log('Seeding done!')
  console.log(`${people.length} people inserted!`)

}

syncAndSeed()
