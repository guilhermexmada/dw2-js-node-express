const Auth = (req, res, next) => {
    if(req.session,user != undefined){
        // Permite a continuação da requisição
        next()
    }
    else{
        res.render('login')
    }
}    

export default Auth;