http.createServer(function(request,response){
    console.log(request.url);//获取路径
    response.end('HAHAH');
    /*console.log(request.method);//获取请求的方法名
    console.log(request.headers);//获取请求头
    /// /index.html?name=zfpx
    var urls = request.url.split('?');
    var pathname = urls[0];
    var query = urls[1];
    //var name = query?query.split('=')[1]:'error';
    var name ='zfpx2';
    console.log('getfile');
    getFile(pathname.slice(1),response);
    // a/b/index.html
    function getFile(filename,response){
        //只有指定了编码ut8,data才会是一个字符串
        fs.readFile(filename, 'utf8',function(err, data){
            if(data==null||err){
                response.end('Can not find file');
            }else{
                //写入响应头
                data = data.replace('<%=name%>',name);
                response.writeHead(200, {
                    //'Content-Length': data.length,
                    'Content-Type':mime.lookup(filename)+';charset=utf-8'
                });
                //getContentType(filename)+';charset=utf-8'

                response.write(data);//写入响应
                response.end();//结束响应
                console.log('end');
            }
            response.end();

        });
    }*/


}).listen(63342);//在对应的端口上实现监听