var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};


exports.addRSVP = function(request, response){
	var email = request.body.rsvpEmail
	console.log(email)
	data.rsvp.push(email)
	response.send(email);
};

