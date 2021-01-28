const router = require('express-promise-router')();
const taskController = require('../controllers/task.controller');
const cors = require('cors');

router.use(cors());

router.get('/testCORS', function(req, res, next){
    res.json({msg:'this CORS-enabled for all origin'})

})

//router.listen(3030, function(){
//    console.log('CORS-enabled web server listening on port 3030')
//})

router.post('/openTask', taskController.openTask)
router.get('/listTasks', taskController.listAllTasks)
//router.post('/closeTask', taskController.closeTask)

module.exports = router;