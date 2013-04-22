
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'AltaUsuario';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var richText2 = {};	// @richText
	var richText3 = {};	// @richText
	var textField7 = {};	// @textField
	var textField6 = {};	// @textField
	var textField5 = {};	// @textField
	var textField4 = {};	// @textField
	var textField3 = {};	// @textField
	var textField2 = {};	// @textField
	var textField1 = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	richText2.click = function richText2_click (event)// @startlock
	{// @endlock
		
		cambiarOnFocus("textField1", "richText4", "Nombre",id);
        cambiarOnFocus("textField2", "richText7", "Primer Apellido",id);
        cambiarOnFocus("textField3", "richText8", "Segundo Apellido",id);
        cambiarOnFocus("textField4", "richText9", "Correo Electrónico",id);
        cambiarOnFocus("textField5", "richText10", "Password",id);
        cambiarOnFocus("textField6", "richText11", "Confirma Password",id);
        cambiarOnFocus("textField7","richText12","Nombre Empresa",id);
        if (comprobarFormulario(id)) {
			
			var nom=$$(getHtmlId('textField1')).getValue();
			var ape1=$$(getHtmlId('textField2')).getValue();
		    var ape2=$$(getHtmlId('textField3')).getValue();
		    var acceso=$$(getHtmlId('textField4')).getValue();
		    var pass=$$(getHtmlId('textField5')).getValue();
		    var emp=$$(getHtmlId('textField7')).getValue();
		 
            ds.Usuarios.insertaUsuario(acceso, pass);
            ds.Entidades.insertaEntidad(nom, ape1, ape2);
            ds.Entidades.insertaEntidad(emp, "", "");
            ds.Empresas.insertaEmpresa(emp);

            alert("Guardado con exito");
           	fcBrain.welcome();
           
        }
        else {
            alert("Revisa los campos del formularios");

        }
		
	};// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		fcBrain.welcome();
	};// @lock

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
	WAF.addListener(this.id + "_richText2", "click", richText2.click, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
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
