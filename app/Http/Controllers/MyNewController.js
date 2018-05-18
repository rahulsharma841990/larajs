
/**
 * MyNewController
 */
class MyNewController{

    index(req,res){
        res.send('This is MyNewController contoller');
    }
}  
module.exports = new MyNewController();
    