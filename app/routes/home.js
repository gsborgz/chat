module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('home/index');
    });

    app.post('/', function(req, res) {
        const mensagem = req.body;
        res.redirect('/', {mensagem:mensagem});
        connection.end();
    });
}
