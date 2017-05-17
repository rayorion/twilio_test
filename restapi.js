/*
	-- Nodejs REST Service Router file
*/


module.exports = function(router) {

	var config = require('./config');
	var accountSid = config.accountSid;
	var authToken = config.authToken;
	var toPhone = config.toPhone;
	var fromPhone = config.fromPhone;

	var twilio = require('twilio');
	var client = new twilio(accountSid, authToken);

	/*
	* Test REST Service
	*/
	router.get('/', function(req, res) {
	    res.json({ message: 'hooray! welcome to our api!' });   
	});

	/*
	** REST for sending SMS
	*/
	router.post("/sms" , function(req, res) {
		if(req.body){
			var message = req.body.fname + " " + req.body.lname + 
						  " your appointment is on " + req.body.day +
						  " @" + req.body.time;

			console.log(message );
			client.messages.create({
				to: toPhone,
				from: fromPhone,
				body: message
			}, function(err, message) {
				if(err) {
					res.json({success:false});
				} else {
					res.json({success:true});
				}
			});
		}

	});

	/*
	** REST for sending VOICE
	*/
	router.post("/voice" , function(req, res) {
		client.calls.create({
	    	url: "http://demo.twilio.com/docs/voice.xml",
	    	to: toPhone,
	    	from: fromPhone
		}, function(err, call) {
	    	process.stdout.write(call.sid);
		});

	});

}
