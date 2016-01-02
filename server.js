var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var middleware = {
	requireAuthentication:function(req,res,next){
		console.log('private route hit');
		next();
	},
	logger:function(req,res,next){
		console.log('req.method :'+req.method+" URL :"+req.originalUrl+" date :"+new Date().toString());
		next();
	}
}

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about',function(req,res) {
	res.send('About US');
});

app.get('/login',middleware.requireAuthentication,function(req,res) {
	res.send('Login here');
});

app.use(express.static(__dirname+'/public'));

app.listen(port,function(){
	console.log('express server started :'+port);
});