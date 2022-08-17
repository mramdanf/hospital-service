'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.User);
      this.hasMany(models.MedialRecord)
    }
  }
  Doctor.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};