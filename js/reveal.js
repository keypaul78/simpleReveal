!function(){
	"use strict";

	var REVEAL = {
		config : {
			revealClass : 'reveal',
			revealedClass: 'revealed',
			revealEl : null,
			ticking : false,
		},
		setup : function(){
			REVEAL.config.revealEl = document.querySelectorAll('.' + REVEAL.config.revealClass);
			window.addEventListener('load', REVEAL.checkReveal, false);
			window.addEventListener('scroll', REVEAL.checkReveal, false);
			window.addEventListener('resize', REVEAL.checkReveal, false);
		},
		checkReveal : function(){
			if(!REVEAL.config.ticking) {
				requestAnimationFrame(REVEAL.updateReveal);
			}
			REVEAL.config.ticking = true;
		},
		updateReveal: function(){
			REVEAL.config.ticking = false; 
			var i;
			for (i = REVEAL.config.revealEl.length; i--;) {
				var el = REVEAL.config.revealEl[i],
				    delay = 0;
				if(REVEAL.isElementInViewport(el) && !REVEAL.hasClass(el,REVEAL.config.revealedClass)){
					if(el.getAttribute('data-delay')){
						delay = el.getAttribute('data-delay');
					}
					REVEAL.revealEl(i, delay);
                		}
			}
		},
		revealEl: function(i, delay) {
		  setTimeout(function() {
		    REVEAL.addClass(REVEAL.config.revealEl[i], REVEAL.config.revealedClass);
		  }, delay);
		},
		isElementInViewport: function(el) {
		    var rect = el.getBoundingClientRect();
		    return (
		        rect.top <= 0 &&
		        rect.left  >= 0 ||
		        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)  && 
		        rect.right  <= (window.innerWidth || document.documentElement.clientWidth )
		    );
		},
		hasClass: function(el,c) {
			return el.className.match(new RegExp('(\\s|^)'+c+'(\\s|$)'));
		},
		addClass: function(el,c) {
			if (!this.hasClass(el,c)) el.className += " "+c;
		},
		removeClass: function(el,c) {
			if (hasClass(el,c)) {
		    	var reg = new RegExp('(\\s|^)'+c+'(\\s|$)');
				el.className=el.className.replace(reg,' ');
			}
		}
	}
	REVEAL.setup();
}();
