
module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("students", {
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
        age:{
                type:Sequelize.INTEGER(50),
                allowNull: false,
               
            },
        class: {
                type: Sequelize.INTEGER(30),
                allowNull: false,
                validate:{
                    notEmpty:true,
                  }
            },
        city: {
                type: Sequelize.STRING(40),
                allowNull: false,
              
          },
          Profile:{
            type: Sequelize.STRING(150),
            allowNull: true,
            defaultValue:'profile.jpg'
          },
           
         },
         {
            freezeTableName: true,
          
          }
         );
        
        return model;
 };