
/**
 * HomeController
 */
class HomeController{

    index(req,res){
        res.send('This is HomeController contoller');
    }

    /**
     * [description]
     * @return {[type]} [description]
     */
    myfunction(){
        console.log('Hello World!!');
    }
}  
module.exports = new HomeController();
    