var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');


exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'brazilianJiuJitsu';
	locals.title = "ATT OKC BJJ: BJJ, MMA, Black Belt, Gi, come train today!";
	locals.description = "American top team OKC has a 3rd degree Black Belt, Giulliano Galluppi, teaching some of the finest Gi brazilian Jiu Jitsu in the state of Oklahoma!";

	// locals.section is used to set the currently selected
	// item in the header navigation.
	req.body.enquiryType = 'Join';
	req.body.message = req.body['name.full'] +' is interested in joining the gym!';
	locals.section = 'main';
	locals.formData = req.body || {};
	locals.enquirySubmitted = false;

	view.on('post', { action: 'contact' }, function (next) {
		var newEnquiry = new Enquiry.model();
		var updater = newEnquiry.getUpdateHandler(req);
		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, phone,enquiryType,message',
			errorMessage: 'There was a problem submitting your enquiry:',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				req.flash('success','Your information has been submitted! We will contact you soon!');
				locals.enquirySubmitted = true;
			}
			next();
		});
	});

	// Render the view
	view.render('brazilianJiuJitsu');
};
