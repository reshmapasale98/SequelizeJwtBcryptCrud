const Sequelize=require('sequelize');
const sequelize = new Sequelize('UserDB','root','',{host:'localhost',dialect:'mysql'});
sequelize.authenticate().then(()=>{
    console.log('conected with DB');
}).catch(err=>{
    console.log('unable to conected DB',err);
})
const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.users = require("./users.model")(Sequelize,sequelize);
db.students=require("./students.model")(sequelize, Sequelize);
module.exports=db;