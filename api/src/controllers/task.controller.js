const db = require('../config/postgres');

exports.openTask = async (req, res) => {
    const { date, name, status, operator } = req.body;
    const { rows } = await db.query(
        "INSERT INTO tasks(date, name, status, operator) VALUES ($1, $2, $3, $4)",
        [date, name, status, operator]
    );

    res.status(201).send({
        message: 'task aberta com sucesso!',
        body: {
            task: {date, name, status, operator }
        },
    });

};

exports.listAllTasks = async(req, res) => {
    const response = await db.query('SELECT * FROM tasks ORDER BY id ASC');
    res.status(200).send(response.rows);

}

exports.closeTask = async(req, res) => {
    const {id, status} = req.body;
    const { rows } = await db.query(
        "UPDATE tasks SET ($1)' WHERE ($2)",
        [status,id]
    )
}
