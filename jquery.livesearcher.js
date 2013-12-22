;(function($){

	$.fn.livesearcher = function (options) {

		var timeout = null,
			settings = $.extend( {
				where: null, // where to look at
				found: function(){
					// what to do when found
				},
				before: function(rows){
					// what to do before searching
				},
				empty: function(rows){
					// what to do when input is empty
				},
				look: function(element){
					// where to look up against
					return $(element).text();
				},
				delay: 500 // how long do we wait until start searching
			}, options);

		if(!settings.where){
			return false;
		}

		list = $(settings.where);

		if (list.length) {
			var rows = list,
				cache = rows.map(function () {
					return settings.look($(this));
				});

			this
				.keyup(filter).keyup()
				.parents('form').submit(function (e) {
					e.preventDefault();
				});
		}

		return this;

		function filter() {
			if(timeout){
				clearTimeout(timeout);
				timeout = null;
			}
			var term = jQuery.trim(jQuery(this).val().toLowerCase()),
				scores = [];

			if (!term) {
				settings.empty(rows);
			}else{
				settings.before(rows);
				cache.each(function (i) {
					var score = this.score(term);
					if (score > 0) {
						scores.push([score, i]);
					}
				});

				jQuery.each(scores.sort(function (a, b) {
					return b[0] - a[0];
				}), function () {
					var i = this[1];
					timeout = setTimeout(function(){
						settings.found(jQuery(rows[i]), i);
					}, settings.delay);
				});
			}
		}

	};

})(window.jQuery);