const validator = require('./validator');

$.fn.validate = function(options){
	let $formElement = $(this);
	$formElement.submit(function(){
		if(validator.all($formElement)) {
			if(typeof options.submitHandler === "function") {
				options.submitHandler.call(this);
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		};
	});
	$.each($formElement.find('[data-validate]'), function(index, element){
		let $element = $(element);
		$element.bind('keyup, focus, keydown', function(){
			validator.reset($(this));
		});
		$element.bind('blur', function(){
			validator.blur($(this));
		});
	});
};