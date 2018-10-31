const Sequelize = require('sequelize');
const db = require('./database.js')
//const db = require('../index');

const Campus = db.define('campus', {  
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }    
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "http://images.shoutwiki.com/harrypotter/2/20/Hogwarts.png"
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }   
    },
    description: {
        type: Sequelize.TEXT
    }
  });

  module.exports = Campus;