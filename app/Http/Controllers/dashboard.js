
class dashboard{
    index(req,res){
        res.render('dashboard/index');
    }

    test(req,res){
        Menu.setApplicationMenu(Menu.buildFromTemplate(template))
        res.send('Working Fine');
    }
}

module.exports = new dashboard();