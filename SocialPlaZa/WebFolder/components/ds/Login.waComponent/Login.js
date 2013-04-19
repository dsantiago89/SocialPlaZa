
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Login';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var richText4 = {};	// @richText
	var textField2 = {};	// @textField
	var textField1 = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	richText4.click = function richText4_click (event)// @startlock
	{// @endlock
		fcBrain.welcome();
	};// @lock

	textField2.focus = function textField2_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus('textField2','','Password',id);
		$("#"+id+"_textField2")[0].type = "password";
	};// @lock

	textField1.focus = function textField1_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField1","","Email",id);
	};// @lock
	
	function cambiarOnFocus(id1,id2,valorDefecto,comp){
		var id='#';
		if(comp){
			 id= '#'+comp+'_';
	    }
		id1=id+id1;
		id2=id+id2;
		
		if ($(id1).val() == valorDefecto) {
			$(id1).val("");
			$(id1).css("color","black");
			$(id2).fadeIn('slow');
		}
	}
	
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_richText4", "click", richText4.click, "WAF");
	WAF.addListener(this.id + "_textField2", "focus", textField2.focus, "WAF");
	WAF.addListener(this.id + "_textField1", "focus", textField1.focus, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
