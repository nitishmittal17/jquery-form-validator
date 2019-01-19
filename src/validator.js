const rules = require('./rules');

module.exports = {
	reset:function($element){
		$element.removeClass("error");
	},
	blur:function($element){
		let type = $element.attr('data-validate');
		if(!rules[type]($element.val(), $element)){
			$element.addClass("error");
			return false;
		}else{
			$element.removeClass("error");
			return true;
		}
	},
	all:function($form){
		let that = this;
		let isValid = true;
		$.each($form.find('[data-validate]').not('[disabled]'), function(ind, ele){
			if(!that.blur($(ele))){
				isValid = false;
			}
		});
		return isValid;
	}
};