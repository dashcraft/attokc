var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
	noedit: true,
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	enquiryType: { type: Types.Select, options: [
		{ value: 'message', label: 'Just leaving a message' },
		{ value: 'question', label: 'I\'ve got a question' },
		{ value: 'other', label: 'Something else...' },
	] },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now },
});

Enquiry.schema.pre('save', function (next) {
	this.wasNew = this.isNew;
	next();
});

Enquiry.schema.post('save', function () {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Enquiry.schema.methods.sendNotificationEmail = function (callback) {
	if (typeof callback !== 'function') {
		callback = function () {};
	}
	var enquiry = this;
	keystone.list('User').model.find().where('isAdmin', true).exec(function (err, admins) {
		if (err) return callback(err);
		new keystone.Email({
			transport: 'mailgun',
			templateName: 'enquiry-notification',
		}).send({
			apiKey: 'key-eec72cf91d2efca74e2fe6bd4388a715',
    		domain: 'sandbox91dd43145aa0435ba39b7d1159a97f56.mailgun.org',
			to: admins,
			from: {
				name: 'ATT OKC',
				email: 'donotreply@attokc.com',
			},
			subject: 'New Enquiry for ATT OKC',
			enquiry: enquiry,
		}, function(err,result){
			if (err) {
        		console.error('🤕 Mailgun test failed with error:\n', err);
		    } 
		    else {
		        console.log('📬 Successfully sent Mailgun test with result:\n', result);
		    }
		});
	});
};

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
