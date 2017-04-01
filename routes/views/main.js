var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');


exports = module.exports = function (req, res) {


	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	req.body.enquiryType = 'Join';

	req.body.message = req.body['name.full'] +' is interested in joining the gym!';
	console.log('req.body', req.body);

	locals.title ="ATT OKC: Teaching Oklahoma City residents the finest BJJ, MMA, Kickboxing, Boxing, Muay Thai, No-Gi bjj, Wrestling and childrens classes in the state of Oklahoma!";
	locals.description ="American Top Team OKC has dedicated itself to delivering the best mixed martial arts training in the state of oklahoma. If you want to Learn BJJ, No-Gi BJJ, Wrestling, Kickboxing, Muay Thai, Boxing or all around self defense skills, come join us today!";
	locals.section = 'main';
	local.meta = {};
	local.meta.image = 'http://lychee-sundae-59213.herokuapp.com/images/attokc_banner.jpeg';
	local.meta.title = 'American Top Team OKC';
	local.meta.type = "Website"; 
	locals.formData = req.body || {};
	locals.enquirySubmitted = false;

	view.on('post', { action: 'contact' }, function (next) {
		console.log('made it inside of the post request',req.body);
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
	view.render('main');
};
