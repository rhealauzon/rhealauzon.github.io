//include modules
var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function(request, response)
{
    //get the file name that has been requested
    var query = url.parse(request.url, true);
    var fileName = "." + query.pathname;

    //attempt to open and read the requested file
    fs.readFile(fileName, function(err, data)
    {
        //file not found; bad file request
        if (err)
        {
            response.writeHead(404, {'Content-Type': 'text/html'});
            return response.end("File not found.");
        }

        //file was successfully found and read from, so send the info to them
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
    });


}).listen(8080);
