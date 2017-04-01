var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'gallery';
	locals.title ="ATT OKC: BJJ, Wrestling, Pro MMA, Boxing, KickBoxing, No-Gi BJJ, Kids Classes";
	locals.description ="American Top Team OKC has dedicated itself to providing the best environment to grow and learn BJJ, Wrestling, Pro MMA, Boxing, KickBoxing, No-Gi BJJ!";

	// Load the galleries by sortOrder
	view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));

	// Render the view
	view.render('media');

};
