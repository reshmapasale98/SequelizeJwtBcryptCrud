const db= require('../model')
const students=db.students;

module.exports={
     getAll: (req, res) => {
    //   var pageNmber = parseInt(req.body.page);//1
    // var numberofRows = parseInt(req.body.limit);//10
    // var offset = (pageNmber - 1) * numberofRows;
    // var fetchrow = numberofRows;
        students
        // .findAndCountAll({attributes: ['id','name','age','class','city'],offset: offset, limit: fetchrow})
          .findAll({})
          .then((students) => {
            res.send(students);
          })
          .catch((err) => {
            res.send(err);
          });
      },
      createStudent: (req, res) => {
        
        let student={}
        if(req.file.filename){student = {name: req.body.name,
      age: req.body.age,
        class:req.body.class,
        city:req.body.city,
        Profile:req.file.filename
        }
      };
       students
          .create(student)
          .then((students) => {
            res.send(students);
          })
          .catch((err) => {
            res.send(err);
          });
      },
      updateStudent:(req, res)=>{
        let id=req.params.id;
        students.update({name:req.body.name},{where:{id:id}}).then((data) => {
            if(data>0){
                res.send({error:false, message:"Student updated"});
            }else{
                res.send({error:false, message:"Student not updated"}); 
            }
    
        }).catch((err) => {
            res.send(err);
          });
      },
      deleteStudent:(req,res)=>{
        let id=req.params.id;
        students.destroy({where:{id:id}}).then((data)=>{
            if(data>0){
                res.send({error:false, message:"Student deleted"});
            }else{
                res.send({error:false, message:"Student not deleted"}); 
            }
        }).catch((err)=>{
          res.send(err);
        });
      },
      findStudent:(req,res)=>{
        let id=req.params.id;
        students.findByPk({where:{id:id}}).then((data) => {
          if(data>0){
            res.send({error:false, message:"find Student"});
        }else{
            res.send({error:false, message:"not find Student"}); 
        }
          }).catch((err)=>{
          res.send(err);
        });
      }
    };
    
