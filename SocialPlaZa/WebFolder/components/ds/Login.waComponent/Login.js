
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Login';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var textField1 = {};	// @textField
	var richText3 = {};	// @richText
	var richText4 = {};	// @richText
	var textField2 = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	
	textField1.focus = function textField1_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField1","richText5","Email",id);
	};// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock

		
		if(WAF.directory.loginByPassword($("#"+id+"_textField1").val(), $("#"+id+"_textField2").val()) ){
			
			
			$('#richText2').show();
			$('#richText4').show();
			$('#richText4').html(WAF.directory.currentUser().fullName);
			appds.cerraWelcome();
		
		} else {
			
			$("#"+id+"_richText2").hide();
			$("#"+id+"_richText2").text("Datos Incorrectos");
			$("#"+id+"_richText2").fadeIn(1500);
		
		}
	};// @lock

	richText4.click = function richText4_click (event)// @startlock
	{// @endlock
		fcBrain.welcome();
	};// @lock

	textField2.focus = function textField2_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus('textField2','richText6','Password',id);
		$("#"+id+"_textField2")[0].type = "password";
	};// @lock
	
	
	
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textField1", "focus", textField1.focus, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	WAF.addListener(this.id + "_richText4", "click", richText4.click, "WAF");
	WAF.addListener(this.id + "_textField2", "focus", textField2.focus, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
