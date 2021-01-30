const router = require('express-promise-router')();
const taskController = require('../controllers/task.controller');
const cors = require('cors');

router.use(cors());

router.post('/openTask', taskController.openTask)
router.get('/listTasks', taskController.listAllTasks)
router.get('/closeTask', taskController.closeTask)

module.exports = router;