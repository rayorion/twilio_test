
module.exports = function(app, path) {
	
	app.get("/" , function(request, response) {
		response.sendFile(path.join(__dirname + '/View/smsform.html'));
	});

	app.get("/help" , function(request, response) {
		response.sendFile(path.join(__dirname + '/View/README.html'));
	});

}
