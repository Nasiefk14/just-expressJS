const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Welcome To The GET Home Page!</h1>')
});
app.post('/',(req,res)=>{
    res.send('<h1>Welcome To The POST Home Page!</h1>')
});
app.delete('/',(req,res)=>{

});
app.put('/',(req,res)=>{

});

app.listen(3000);
console.log('Listening On Port 3000')