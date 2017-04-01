var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.title = "ATT OKC Blog: Learn more about professional MMA, BJJ, Wrestling in Oklahoma city and more!"
	locals.description = "American Top Team likes to Blog about current events surrounding the sport of MMA, BJJ, and all other combat martial arts!"
	// Init locals
	locals.section = 'blog';
	locals.filters = {
		category: req.params.category,
	};
	locals.data = {
		posts: [],
		categories: [],
	};

	local.meta.image = 'http://lychee-sundae-59213.herokuapp.com/images/attokc_banner.jpeg';
	local.meta.title = 'American Top Team OKC';
	local.meta.type = "Article";


	// Load all categories
	view.on('init', function (next) {

		keystone.list('PostCategory').model.find().sort('name').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.categories = results;

			// Load the counts for each category
			async.each(locals.data.categories, function (category, next) {

				keystone.list('Post').model.count().where('categories').in([category.id]).exec(function (err, count) {
					category.postCount = count;
					next(err);
				});

			}, function (err) {
				next(err);
			});
		});
	});

	// Load the current category filter
	view.on('init', function (next) {
		console.log(req.params.category);
		if (req.params.category) {
			keystone.list('PostCategory').model.findOne({ key: locals.filters.category }).exec(function (err, result) {
				locals.data.category = result._id;
				locals.data.categoryName = result.name;
				next(err);
			});
		} else {
			next();
		}
	});

	// Load the posts
	view.on('init', function (next) {

		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 8,
			maxPages: 20,
			filters: {
				state: 'published',
			},
		})
			.sort('-publishedDate')
			.populate('author categories');

		if (locals.data.category) {
			q.where('categories').in([locals.data.category]);
		}

		q.exec(function (err, results) {
			locals.data.posts = results;
			// console.log('results',JSON.stringify(results.results, null, 2));
			next(err);
		});
	});

	// Render the view
	view.render('blog');
};
