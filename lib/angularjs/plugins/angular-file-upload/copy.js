http.createServer(function(request,response){
    console.log(request.url);//��ȡ·��
    response.end('HAHAH');
    /*console.log(request.method);//��ȡ����ķ�����
    console.log(request.headers);//��ȡ����ͷ
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
        //ֻ��ָ���˱���ut8,data�Ż���һ���ַ���
        fs.readFile(filename, 'utf8',function(err, data){
            if(data==null||err){
                response.end('Can not find file');
            }else{
                //д����Ӧͷ
                data = data.replace('<%=name%>',name);
                response.writeHead(200, {
                    //'Content-Length': data.length,
                    'Content-Type':mime.lookup(filename)+';charset=utf-8'
                });
                //getContentType(filename)+';charset=utf-8'

                response.write(data);//д����Ӧ
                response.end();//������Ӧ
                console.log('end');
            }
            response.end();

        });
    }*/


}).listen(63342);//�ڶ�Ӧ�Ķ˿���ʵ�ּ���