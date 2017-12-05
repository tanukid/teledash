import Sequelize from 'sequelize'
import db from '../db'

export default db.define('datasource', {
  name: Sequelize.STRING,
  type: Sequelize.ENUM('video', 'line_graph', 'map'),
  url: Sequelize.STRING,
  refresh: Sequelize.INTEGER
});
