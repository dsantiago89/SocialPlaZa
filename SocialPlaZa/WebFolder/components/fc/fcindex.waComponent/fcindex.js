﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'fcindex';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var richText3 = {};	// @richText
	var richText4 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		appds.openAltaUsuario();
	};// @lock

	richText4.click = function richText4_click (event)// @startlock
	{// @endlock
		appds.openLogin();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	WAF.addListener(this.id + "_richText4", "click", richText4.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
