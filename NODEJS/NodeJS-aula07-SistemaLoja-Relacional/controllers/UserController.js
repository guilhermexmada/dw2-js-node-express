import express from 'express'
import bcrypt from 'bcrypt'

const router = express.Router()

import User from '../models/User.js'

router.get('/login', (_req, res) =>{
    res.render("login")
})

router.get('/cadastro', (_req, res) =>{
    res.render("cadastro")
})

// ROTA DE CRIACAO DE USUÁRIO
router.post('/createUser', (req, res) =>{
    const email = req.body.email
    const password = req.body.email
    
    // Verificar se o usuario já existe 
    User.findOne({where : {email : email}}).then((user)=>{
        if(user == undefined){
            // Geranda hash de senha
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt) 
            //Enviando para o banco
   
            User.create({
                email: email,
                password: hash
            }).then(() => res.redirect('/login')).catch(error => console.log(error))
        }
        // Se o usuário já existir
        else {
            res.send('O usuário informado já está cadastrado <br> <a href="/login">Voltar</a>')
        }
    })

})

// ROTA DE AUTENTICAÇÃO
router.post('/authenticate', (req, res) =>{
    const email = req.body.email
    const password = req.body.password

    User.findOne({where : {email : email}}).then(user =>{
        // Se o usuário existir
        if(user != undefined){

            // VALIDAR A SENHA
            const correct = bcrypt.compareSync(password, user.password)

            // SE ESTIVER CORRETA
            if(correct){
                // AUTORIZA O LOGIN
                // GERANDO A SESSÃO PARA O USUÁRIO
                req.session.user = {
                    id: user.id,
                    email: user.email
                }   

                res.redirect('/')
            }
            // SE A SENHA ESTIVER INCORRETA
            else{
                res.send('O usuário informado já está cadastrado <br> <a href="/login">Voltar</a>')    
            }
        }
        // se o usuário não existe
        else {
                res.send('O usuário informado não existe <br> <a href="/login">Voltar</a>')    
        }
    })
})

router.get('/logout', (req, res) => {
    req.session.user = undefined
    res.redirect('/login')
})
export default router