const db = require('../config/postgres');

exports.openTask = async (req, res) => {
    const { date, name, status, operator, description } = req.body;
    const { rows } = await db.query(
        "INSERT INTO tasks(date, name, status, operator) VALUES ($1, $2, $3, $4, $5)",
        [date, name, status, operator, description]
    );

    res.status(201).send({
        message: 'task aberta com sucesso!',
        body: {
            task: {date, name, status, operator, description }
        },
    });

};

exports.listAllTasks = async(req, res) => {
    const response = await db.query('SELECT * FROM tasks ORDER BY id ASC');
    res.status(200).send(response.rows);

}

exports.closeTask = async(req, res) => {
    const {id} = req.body;
    const { rows } = await db.query(
    `UPDATE tasks SET status = 'concluido' WHERE id=${id}`,
    )
    
}
