/**
 * Is Use Loggined Middleware
 */

module.exports = (req,res,next)=>{
    if(session.email){
        res.redirect('/');
    }else{
        res.redirect('/login');
    }
}