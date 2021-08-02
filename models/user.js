'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

     static associate(models) {
      // define association here
      User.hasMany(models.Recipe)
    }
    
  };
  User.init({
    name: {
     allowNull:false,
     type:Sequelize.STRING
    },
    email:{
      allowNull:false,
      type:Sequelize.STRING
    },
    password:{
      allowNull:false,
      type:Sequelize.STRING
    }
    // email: DataTypes.STRING,
    // password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

