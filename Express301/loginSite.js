const express = require('express')
const app = express()

const path = require('path')
const cookieParser = require('cookie-parser')

const helmet = require('helmet')
app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use((req,res,next)=>{
    if(req.query.msg === 'fail'){
        res.locals.msg = 'Sorry. This Username & Password Are Invalid'
    }else{
        res.locals.msg = ''
    }

    next()
})

app.get('/',(req,res,next)=>{
    res.send('Home Page Baby!')
})

app.get('/login',(req,res,next)=>{
    res.render('login')
})

app.post('/process_login',(req,res,next)=>{
    const password = req.body.password
    const username = req.body.username
    
    if(password ==='Khan'){
        res.cookie('username',username)
        res.redirect('/Welcome')
    }else{
        res.redirect('/login?msg=fail')
    }
})

app.get('/welcome',(req,res,next)=>{
    res.render('welcome',{
        username:req.cookies.username
    })
})

app.get('/story/:storyId',(req,res,next)=>{
    res.send(`<h1>Story ${req.params.storyId}</h1>`)
})

// app.get('/story/1',(req,res,next)=>{
//     res.send('Story 1')
// })

// app.get('/story/2',(req,res,next)=>{
//     res.send('Story 2')
// })

// app.get('/story/3',(req,res,next)=>{
//     res.send('Story 3')
// })

app.get('/statement',(req,res,next)=>{
    res.download(path.join(__dirname,'userStatements/BankStatementChequing.png'), 'Nasiefs-Statement.png', (error)=>{
        console.log('Error')
    })
})

app.get('/logout',(req,res,next)=>{
    res.clearCookie('username')
    res.redirect('/login')
})

app.listen(3000)