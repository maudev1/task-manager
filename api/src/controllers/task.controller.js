const db = require('../config/database');

exports.openTask = async (req, res) => {
    const { taskData, taskName, status  } = req.body;
    const { rows } = await db.query(
        "INSERT INTO tasks(taskData, taskName, status) VALUES ($1, $2, $3)",
        [taskData, taskName, status ]
    );

    res.status(201).send({
        message: 'task aberta com sucesso!',
        body: {
            task: {taskData, taskName, status }
        },
    });

};

exports.listAllTasks = async(req, res) => {
    const response = await db.query('SELECT * FROM tasks ORDER BY taskName ASC');
    res.status(200).send(response.rows);

}

exports.closeTask = async(req, res) => {
    
    
}