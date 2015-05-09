(function(window, document) {
	'use strict';

	var exports = {};

	/**
	 * Resize handler. Calculate widths and add classes.
	 */
	var onResize = function() {
		console.time('onResize');

		var elements = document.querySelectorAll('[data-breaks]'),
			element,
			classes,
			elementWidth,
			breakPoints,
			breakPoint;

		for (var i = 0, l = elements.length; i < l; i++) {
			element = elements[i];
			classes = element.className;
			elementWidth = element.offsetWidth;
			breakPoints = element.getAttribute('data-breaks').split(',');
			classes = classes.replace(/\s*[<>]\d+/g, '');
			for (var j = 0, k = breakPoints.length; j < k; j++) {
				breakPoint = breakPoints[j];
				if (MOBILE_FIRST) {
					if (elementWidth >= +breakPoint) {
						classes += ' >' + breakPoint;
					} else {
						break;
					}
				} else {
					if (elementWidth <= +breakPoint) {
						classes += ' <' + breakPoint;
					}
				}
			}
			element.className = classes;
		}

		console.timeEnd('onResize');
	};

	/**
	 * Initialize responsive elements. Called once on page load.
	 */
	exports.init = function init() {
		onResize();
		if(IE8_SUPPORT) {
			if(window.addEventListener) {
				window.addEventListener('resize', onResize, false);
			} else {
				window.attachEvent('onresize', onResize);
			}
		} else {
			window.addEventListener('resize', onResize, false);
		}
	};

	if(EXPORT_UNINITIALIZE) {
		/**
		 * Uninitialize responsive elements.
		 */
		exports.uninit = function uninit() {
			if(IE8_SUPPORT) {
				if(window.removeEventListener) {
					window.removeEventListener('resize', onResize, false);
				} else {
					window.detachEvent('onresize', onResize);
				}
			} else {
				window.removeEventListener('resize', onResize, false);
			}

			var elements = document.querySelectorAll('[data-breaks]'),
				element;

			for (var i = 0, l = elements.length; i < l; i++) {
				element = elements[i];
				element.className = element.className.replace(/\s*[<>]\d+/g, '');
			}
		};
	}

	exports.update = onResize;

	window.breaks2000 = exports;


})(this, document);
