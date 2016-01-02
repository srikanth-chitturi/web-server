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

module.exports = middleware;