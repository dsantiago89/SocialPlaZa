﻿var appdsObj;   appdsObj = function () {    		//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	//DS Declaracion de variables path, id_component, "variables-funciones";	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++			components = {};    components = {        Login : {            path:"/components/ds/Login.waComponent"        },        AltaUsuario : {            path:"/components/ds/AltaUsuario.waComponent"        }    };             components.main = 'MainComp';                  functions = {};     functions.openEntorno1 = function() {     	     	$$(components.mainId).loadComponent(components.Entorno1.path);     	$$("button1").setValue("Sing out");		$('#richText1').html(WAF.directory.currentUser().fullName);     	     }          functions.openEntorno2 = function() {     	     	$$(components.mainId).loadComponent(components.Entorno2.path);     	$$("button1").setValue("Sing out");		$('#richText1').html(WAF.directory.currentUser().fullName);     	     }          functions.openMain = function() {     	     	$$(components.mainId).removeComponent();     	$$(components.mainId).loadComponent(components.Main.path);     	$$("button1").setValue("Sing in");		$("#richText1").html("");					     }          functions.openEntorno = function(){          	switch (ds.Usuarios.getEntorno()){  //DS segun el entorno abre uno u otro            case 1:                                 functions.openEntorno1();                break;                        case 2:                                 functions.openEntorno2();                    }     	     }          functions.openWelcome = function () {				$('#'+components.main).hide('fast');		$$(components.main).loadComponent(components.defaults.landing.compPath);		$('#'+components.main).fadeIn('fast');	};          //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++     //DS Declaracion de funciones     //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++                         this.inicio = function() {     	     	if(WAF.directory.currentUser()){  //DS Si el usuario ha sido logueado abrele el entorno     		     		functions.openEntorno();     		     	} else {   //DS Si no abre la pagina principal     		     		functions.openMain();     			     	}     }          this.cerraWelcome = function(){     	$$(components.main).removeComponent();     }                this.openLogin = function() {     	     	$$(components.main).loadComponent(components.Login.path);     	     }          this.openAltaUsuario = function() {     	     	$$(components.main).loadComponent(components.AltaUsuario.path);          }          this.comprobarLogin = function() {          	          	     }    	}var appds = new appdsObj();