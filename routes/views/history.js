var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');


exports = module.exports = function (req, res) {


	var view = new keystone.View(req, res);
	var locals = res.locals;


	locals.title ="ATT OKC: Teaching Oklahoma City residents the finest BJJ, MMA, Kickboxing, Boxing, Muay Thai, No-Gi bjj, Wrestling and childrens classes in the state of Oklahoma!";
	locals.description ="American Top Team OKC has dedicated itself to delivering the best mixed martial arts training in the state of oklahoma. If you want to Learn BJJ, No-Gi BJJ, Wrestling, Kickboxing, Muay Thai, Boxing or all around self defense skills, come join us today!";
	locals.section = 'History';

	// Render the view
	view.render('history');
};