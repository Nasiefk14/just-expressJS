const http = require('http');
const fs = require('fs')

// the HTTP module has a creatSerer method that takes in 1 arguement:
// 1. Callback, Callback has 2 arguements : req(Request) & res(Response)
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // console.log(req)
        // res = Our way of responding to the request
        // HTTP Message Content:
        // 1. start-line - CHECK
        // 2. header
        // 3. body
        // writeHead takes 2 arguements:
        // 1. status code
        // 2. Obj for mime-type
        res.writeHead(200, { 'content-type': 'text/html' });
        //res.write('<h1>This Is The Home Page! </h1>')
        const homePageHTML = fs.readFileSync('node.html')
        res.write(homePageHTML)
        res.end()
    } else if(req.url === '/node.png'){
        res.writeHead(200, {'content-type':'image/png'});
        const image = fs.readFileSync('node.png')
        res.write(image)
        res.end()
    } else if(req.url === '/styles.css'){
        res.writeHead(200, {'content-type':'image/css'});
        const css = fs.readFileSync('styles.css')
        res.write(css)
        res.end()
    }else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write(`<h4>Sorry Bro, This Isn't The Spot XD ^_^`)
    }
});

// createServer returns a Obj with a listen method that takes 1 argument:
// 1. Port to listen for HTTP traffic
server.listen(3000);