const Sequelize = require('sequelize')

const { UUID, UUIDV4, STRING } = Sequelize
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/db-seed-example')

const Person = conn.define('person', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    unique: true,
    allowNull: false
  },

})

module.exports = {
  conn,
  models: {
    Person,
  }
}
