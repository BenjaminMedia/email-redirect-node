var http = require('http');
var bodyString = `
<!DOCTYPE html>
<html>
<head><title>redirect</title></head>
<body>
<script type="text/javascript">
var dfp_params = window.location.search.replace(/([&?]c=)\d+/i, '$1' + Math.floor(Date.now() / 1000));
var BASE_URL = 'https://pubads.g.doubleclick.net/gampad/';
var ad_url = BASE_URL + 'ad' + dfp_params;
var jump_url = BASE_URL + 'jump' + dfp_params;
var objImg = new Image();
objImg.src = ad_url;
objImg.onload = function() { window.setTimeout(function()
{ window.location = jump_url }
, 200); }
</script>
</body>
</html>`;

var port = process.env.PORT || 5000;

var response = function(req, res){
    res.end(bodyString);
}
var server = http.createServer(response);

server.listen(port,function(){
    console.log("Server listeiing on port: " + port);
});