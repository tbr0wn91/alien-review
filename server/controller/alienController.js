module.exports = {
    getAllAliens: (req, res) => {
        const db = req.app.get('db');

        db.get_aliens().then(aliens => {
            res.status(200).send(aliens)
        }).catch(err => console.log(`Error with getAllAliens`, err));
    }
}