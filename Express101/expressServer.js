const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'))

app.all('*',(req,res) => {
    // res.send(`<h1>This Is The Home Page</h1>`)
    res.sendFile(path.join(__dirname + '/node.html'))
});

app.listen(3000);
console.log('Listenening On Port 3000...')