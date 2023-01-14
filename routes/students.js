var express = require('express');
var router = express.Router();
const multer= require('multer');
const studentController= require('../controllers/students.controllers')
/* GET users listing. */
const storage = multer.diskStorage({
    destination:  (req, file, cb) =>{
      cb(null, 'uploads/')
    },
    filename:  (req, file, cb)=> {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const ext=file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      cb(null, file.fieldname + '-' + uniqueSuffix+ext)
    }
   })
  
const upload = multer({ storage: storage })

router.get('/findAll', studentController.getAll);
router.post('/create', studentController.createStudent);
router.post('/update/:id', studentController.updateStudent);
router.post('/delete/:id',studentController.deleteStudent);
router.get('/findOne/:id',studentController.findStudent);
module.exports = router;
