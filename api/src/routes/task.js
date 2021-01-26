const router = require('express-promise-router')();
const taskController = require('../controllers/task.controller');

router.post('/openTask', taskController.openTask)
router.get('/listTasks', taskController.listAllTasks)
//router.post('/closeTask', taskController.closeTask)

module.exports = router;