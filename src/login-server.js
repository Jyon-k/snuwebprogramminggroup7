
var http = require('http');
http.createServer(function (req, res) {
    var jsonData = {};
    var chunkString = "";
    req.on('data', function (chunk) {
        chunkString += chunk;
        const splittedStringChunks = chunkString.split('&');
        splittedStringChunks.forEach((splittedStringChunk) => {jsonData[splittedStringChunk.split('=')[0]] = splittedStringChunk.split('=')[1]})
        //jsonData = JSON.stringify(jsonChunk);
    })
    req.on('end', function () {
        var reqObj = jsonData;
        getCookie(reqObj.id, reqObj.psw)
        .then((resObj) => {
            res.writeHead(200);
            res.end(JSON.stringify(resObj));
        });
        })
}).listen(3001, 'localhost')
console.log('Server running at http://127.0.0.1:3001/');


const getCookie = (id, psw) => {
    return new Promise((resolve) => {
        var retJSON = {};
        var request = require('request');
        request.post({
            url: 'http://sugang.snu.ac.kr/sugang/j_login',
            form: {
                "j_password": psw,
                "j_username": id,
                "t_password": psw,
                "v_password": psw
            }
        }, function (err, res) {
            var cookie = res.headers["set-cookie"]
            request.get({
                url: 'http://sugang.snu.ac.kr/sugang/cc/cc210.action',
                headers: {
                    'Cookie': cookie
                }
            }, function (err, res) {
                resolve(res.toJSON());
            })
        })
    });
}



