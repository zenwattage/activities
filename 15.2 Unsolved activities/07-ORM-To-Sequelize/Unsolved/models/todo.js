//Create a Todo model with columns for "text" (DataTypes.STRING), and "complete" (DataTypes.BOOLEAN).

module.exports = function(sequelize, DataTypes) {
  var ToDo = sequelize.define("ToDo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return ToDo;

};