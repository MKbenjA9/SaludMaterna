const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.jpg':'image/jpeg','.js':'text/javascript'};
http.createServer((req,res)=>{
  const name = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const file = path.resolve(__dirname, '.' + (name === '/' ? '/index.html' : name));
  if(!file.startsWith(__dirname + path.sep)) {res.writeHead(403);return res.end();}
  fs.readFile(file,(err,data)=>{res.writeHead(err ? 404 : 200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream'});res.end(err ? 'Not found' : data);});
}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
