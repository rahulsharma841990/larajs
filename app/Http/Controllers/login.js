/**
 * Login Controller
 */

class login{

    index(req,res){
        res.render('login/login');
    }

    loginUser(req,res){
        console.log(req.body);
        res.send(req.body);
    }
}

module.exports = new login();