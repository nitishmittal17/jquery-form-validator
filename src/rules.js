module.exports = {
	required: function (value) {
		return value.trim().length > 0;
	},
	email: function (email) {
		var filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return email.search(filter) != -1;
	},
	number: function (number) {
		var filter = /^[0-9]+$/;
		return number.search(filter) != -1;
	},
	emailIfValue: function (email) {
		if (!email) {
			return true
		} else {
			return this.email(email)
		}
	},
	phone: function (number) {
		var filter = /^[0-9]{10}$/;
		return number.search(filter) != -1;
	},
	phoneIfValue: function (phone) {
		if (!phone) {
			return true
		} else {
			var filter = /^[0-9]{10}$/;
			return phone.search(filter) != -1;
		}
	}
}