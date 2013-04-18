
    var appBrainObj;
    appBrainObj = function () {

        var components, functions, data;




        /*************************************************************************************************************
         * This is where I add more classes
         *
         */



        components = {};
        components.classes = {
            Person : {
                listContentComp:"/views/list/class/person/content.waComponent",
                listFooterComp:"/views/list/class/person/footer.waComponent",
                detailContentComp:"/views/detail/class/person/contentPerson.waComponent",
                dataSource : "person"

            },
            Company : {
                listContentComp:"/views/list/class/company/content.waComponent",
                listFooterComp:"/views/list/class/company/footer.waComponent",
                detailContentComp:"/views/detail/class/company/contentCompany.waComponent",
                dataSource : "company"

            }
        };



        /*************************************************************************************************************
         * This is where I add more classes n new views that I wanto open
         *
         */
		
		//main buttons for logged in view

        this.openPerson = function () {
            functions.openList("Person");
        };

        this.openCompany = function () {
            functions.openList("Company");
        };



        /*************************************************************************************************************
         * default public functions
         *
         */

		//buttons/events/clicks

		this.openDirectory = function () {
			functions.openDirectory();
			
		};


        this.closeDetail = function () {
        	var mySource = components.classes[data.currentClass].dataSource
        	waf.sources[mySource].serverRefresh({
        		onSuccess: function () {
        			functions.openList(data.currentClass);
        			
        			},
        			forceReload : true 
        		});
            
        };
        
        this.closeList = function () {
            functions.openMainPage();
        };
        
        this.startApp = function () {
            functions.openMainPage();
        };

		//use this for double click on grid row
		
		this.openDetail = function () {
			var mySource = components.classes[data.currentClass].dataSource
        	waf.sources[mySource].serverRefresh({
        		onSuccess: function () {
        			functions.openDetail();
        			
        			},
        			forceReload : true 
        		});
            
        };

		

		
		//main buttons for list header
		
		this.listCancel = function () {
			
            this.closeList();
        };
		
		
		this.listNewEntity = function () {
            var source = functions.getSource();
            waf.sources[source].addNewElement();
          	functions.openDetail();
       		  
            
        };
        
        this.listRemoveEntity = function () {
        	var source = functions.getSource();
            waf.sources[source].removeCurrent();
        };


		
		this.openQuery = function () {
			
			functions.openQueryEditor();
		};
	
        //main buttons for detail header
        
        
        this.detailCancelEntity = function () {
        	var source = functions.getSource();
            if(waf.sources[source].ID === null){
            	waf.sources[source].removeCurrent();
            }
            this.closeDetail();
        };
        
        this.detailSaveEntity = function () {
            var source = functions.getSource();
            waf.sources[source].save({
            	onSuccess : function (event) {

            	},
            	onError : function (err) {
            		
            	}
            });
        };
        


        /*************************************************************************************************************
         * DO NOT DO CHANGE ANYTHING UNDER
         *
         */


        data = {
            currentClass:"",
            currentUser:""
        };


        functions = {};
        functions.openMainPage = function () {
            functions.setLogin();

        };

        functions.setLogin = function () {
            var user = waf.directory.currentUser();
            if (user === null) {
                functions.isNotLoggedIn(user);
            } else {
                functions.isLoggedIn(user);
            }

        };
		
		functions.openQueryEditor = function (attributes) {
			
			
			
			debugger;			
			
			
			
			var dataClass = data.currentClass
			var sourceName = functions.getSource();
			var attributesNames = ds[data.currentClass].getAttributes();  
			var attributeList = [];
			for(var i = 0; i < attributesNames.length;i++) {
				//I only want the simple attributes, not relations
				if(attributesNames[i].simple===true){
					attributeList.push({attributeName : attributesNames[i].name, attributeValue : attributesNames[i].name})
				}
			}
			
			var top = ($(window).height() - 641) / 2;
        	var left = ($(window).width() - 595) / 2;
			$('<div/>').attr({'id':'queryEditorComp', 'data-modal':'true'}).css({position:'absolute', 'width': '595px', 'height': '641px', 'top': top+'px', 'left': left+'px'}).appendTo('body');
		
			var queryEditor = new WAF.widget.Component({
			 'id': 'queryEditorComp',
			 'data-lib': 'WAF',
			 'data-type': 'component',
			 'data-theme': 'metal inherited',
			 'modal': 'true'
			 });
			
		
			queryEditor.loadComponent({ 
				path: components.defaults.query.compPath, 
				userData: { 
				source : waf.sources[sourceName],
				attributeList : attributeList
				} 
			});
						
           
        };
		
		
		functions.openDirectory = function () {
            $$(components.comp).loadComponent(components.defaults.directory.compPath);
        };

        functions.isLoggedIn = function (user) {
            data.currentUser = user;
            $$(components.comp).loadComponent(components.defaults.loggedIn.compPath);
        };



        functions.isNotLoggedIn = function (user) {
            data.currentUser = user;
            $$(components.comp).loadComponent(components.defaults.login.compPath);
        };

		functions.getSource = function () {
            var setting = components.classes[data.currentClass];
            return setting.dataSource;
            
        };

        functions.openList = function (theClass) {
            data.currentClass = theClass;
            var setting = components.classes[theClass];
            var params = {
                headerComp : components.comp + "_" + "headerComp",
                contentComp : components.comp + "_" + "contentComp",
                footerComp : components.comp + "_" + "footerComp",
                header : components.defaults.listHeader.compPath,
                content : setting.listContentComp,
                footer : setting.listFooterComp
            }
            $$(components.comp).loadComponent({
                path : components.defaults.list.compPath,
                onSuccess : function (event) {
                    $$(this.data.userData.that.headerComp).loadComponent(this.data.userData.that.header);
                    $$(this.data.userData.that.contentComp).loadComponent(this.data.userData.that.content);
                    $$(this.data.userData.that.footerComp).loadComponent(this.data.userData.that.footer);
                },
                userData :{that:params}
            });
        };



        functions.openDetail = function () {
            var setting = components.classes[data.currentClass];
            var params = {
                headerComp : components.comp + "_" + "headerComp",
                contentComp : components.comp + "_" + "contentComp",
                header : components.defaults.detailHeader.compPath,
                content : setting.detailContentComp
            }
            $$(components.comp).loadComponent({
                path : components.defaults.detail.compPath,
                onSuccess : function (event) {
                    $$(this.data.userData.that.headerComp).loadComponent(this.data.userData.that.header);
                    $$(this.data.userData.that.contentComp).loadComponent(this.data.userData.that.content);
                },
                userData :{that:params}
            });
        },


        functions.closeDetail = function () {
            functions.openList(this.app.data.currentClass);
        };
        functions.closeList = function () {
            functions.openMainPage();
        };




        components.mainId = "mainAppComp";
        components.mainCompId = "contentComp";
        components.comp = components.mainId + "_" + components.mainCompId;
        components.defaults={
            loggedIn:{
                compPath : "/views/defaults/mainAppViewLoggedIn.waComponent"
            },
            login:{
                compPath : "/views/defaults/mainAppViewLogin.waComponent"
            },
            list:{
                compPath : "/views/defaults/mainAppViewList.waComponent"
            },
            detail:{
                compPath : "/views/defaults/mainAppViewDetail.waComponent"
            },
            listHeader:{
                compPath : "/views/list/default/defaultListHeader.waComponent"
            },
            detailHeader:{
            	compPath : "/views/detail/default/defaultDetailHeader.waComponent"
            },
            directory:{
            	compPath : "/views/defaults/directoryComponent.waComponent"
            },
            query:{
            	compPath : "/views/defaults/queryEditor.waComponent"
            }
        };



    };
    
    
    //set it as global
    var appBrain = new appBrainObj();
    
    
    
