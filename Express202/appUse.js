const express = require('express')
const app = express()

function validateUser(req,res,next){
    res.locals.validated = true
    console.log('VALIDATED RAN!')
    next()
}

app.use('/admin',validateUser)

app.get('/',(req,res,next)=>{
    res.send('<h1>Main Page</h1>')
})

app.get('/admin',(req,res,next)=>{
    res.send('<h1>Admin Page</h1>')
})

app.listen(3000)
console.log('App Is Runing On 3000...')