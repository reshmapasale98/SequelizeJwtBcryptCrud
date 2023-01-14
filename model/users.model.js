const { Sequelize } = require("sequelize");

module.exports = (Sequelize,sequelize)=>{
    const model = sequelize.define(
       "users",

       {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          name: {
            type: Sequelize.STRING(150),
            allowNull: false,
            
          },
          email: {
            type: Sequelize.STRING(150),
            allowNull: false,
            unique: true,
          },
          password: {
            type: Sequelize.STRING(150),
            allowNull: false,
            
          },
          mobile: {
            type: Sequelize.INTEGER(12),
            allowNull: false,
          },
       },
       {
        freezeTableName: true,
       }
    );
    return model;
};