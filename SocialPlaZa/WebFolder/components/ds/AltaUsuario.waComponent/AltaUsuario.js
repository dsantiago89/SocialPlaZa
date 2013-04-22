
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'AltaUsuario';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var textField7 = {};	// @textField
	var textField6 = {};	// @textField
	var textField5 = {};	// @textField
	var textField4 = {};	// @textField
	var textField3 = {};	// @textField
	var textField2 = {};	// @textField
	var textField1 = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	textField7.focus = function textField7_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField7","richText12","Nombre Empresa",id);
	};// @lock

	textField6.focus = function textField6_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField6","richText11","Confirma Password",id);
		$("#"+id+"_textField6")[0].type = "password";
	};// @lock

	textField5.focus = function textField5_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField5","richText10","Password",id);
		$("#"+id+"_textField5")[0].type = "password";
	};// @lock

	textField4.focus = function textField4_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField4","richText9","Correo Electrónico",id);
	};// @lock

	textField3.focus = function textField3_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField3","richText8","Segundo Apellido",id);
	};// @lock

	textField2.focus = function textField2_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField2","richText7","Primer Apellido",id);
	};// @lock

	textField1.focus = function textField1_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField1","richText4","Nombre",id);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textField7", "focus", textField7.focus, "WAF");
	WAF.addListener(this.id + "_textField6", "focus", textField6.focus, "WAF");
	WAF.addListener(this.id + "_textField5", "focus", textField5.focus, "WAF");
	WAF.addListener(this.id + "_textField4", "focus", textField4.focus, "WAF");
	WAF.addListener(this.id + "_textField3", "focus", textField3.focus, "WAF");
	WAF.addListener(this.id + "_textField2", "focus", textField2.focus, "WAF");
	WAF.addListener(this.id + "_textField1", "focus", textField1.focus, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
