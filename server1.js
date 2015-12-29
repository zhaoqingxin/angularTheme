var http = require('http');
var mime = require('mime');
var fs = require('fs');
var url = require('url');
var formidable = require('formidable');
var server = http.createServer(function(req,res){
    var filename=req.url.slice(1).split('?')[0];
    var urlObj = url.parse(req.url);
    if(filename=='favicon.ico'){
        return;
    }
    if(filename=='submit'){
        var parser = new formidable.IncomingForm();
        parser.parse(req,function(err,fields,files){
            console.log(fields);//普通 input
            console.log(files);//文件类型的字段
            fs.createReadStream(files.brokerIdFile.path).pipe(fs.createWriteStream('./upload/'+files.brokerIdFile.name));
            fs.createReadStream(files.handlerFlag.path).pipe(fs.createWriteStream('./upload/'+files.handlerFlag.name));
            fs.readFile('index.html', function (error, data) {
                if (error) {
                    res.end('can not read ' + filename)
                } else {
                    res.writeHead(200, {'Content-Type': mime.lookup(filename) + ';charset=utf-8'});
                    res.write(data);
                    res.end();
                }
            })
        });
    }else {
        fs.readFile(filename, function (error, data) {
            if (error) {
                res.end('can not read ' + filename)
            } else {
                res.writeHead(200, {'Content-Type': mime.lookup(filename) + ';charset=utf-8'});
                res.write(data);
                res.end();
            }
        })
    }
});
server.listen(8080);