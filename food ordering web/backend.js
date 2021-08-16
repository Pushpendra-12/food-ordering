const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./gallery.html');
// const about = fs.readFileSync('./about.html');
const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url == 'contact.html'){
    res.end(Contact );
  }
  else if(url == 'gallery.html'){
    res.end(Gallery);
  }
  else{
    res.statusCode = 404;
    res.end('<h1>404 not found</h1>')
  }
  // res.end(home);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });