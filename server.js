//creating server and handling routing using simple node not express

const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res){
    res.setHeader('content-type', 'text/html')
    // res.writeHead(200, {'content-type': 'text/html'})

    let path = './views/'
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        //if earlier we had about-me route for about.html but it is now about so we need to
        // redirect user to /about when they type /about-me
        // status code 301- resource is permently moved 

        case '/about-me':
            //set status code 
            res.statusCode = 301;
            //set header
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 400;
            break;
    }
    fs.readFile(path, function(err, data){
        if(err){
            console.log('error occured!');
            // res.writeHead(404)
            // res.write('file not found')
        }else{
            res.write(data)   //if we are only writing once then we can directly do res.end(data) it will write data as well as end res.
        }
        res.end()  //will send res to browser after this
    })
})

server.listen(port, 'localhost', function(err){
    if(err){
        console.log(err);
    }else{
        console.log('node server running!');
    }
})
