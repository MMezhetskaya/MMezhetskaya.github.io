sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
	return Controller.extend("first_steps.controller.HelloPanel", {

		/*onInit: function() {
			// set data model on view
			var oData = {
				recipient: {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			// set i18n model on view
	        var i18nModel = new ResourceModel({
	            bundleName: "first_steps.i18n.i18n"
	         });
	         this.getView().setModel(i18nModel, "i18n");
		},*/
		onPressButton: function() {
			//This code was generated by the layout editor.
			var message="Attention";
			MessageToast.show(message);
		},
	
		onShowHello: function() {
			//This code was generated by the layout editor.
			//MessageToast.show("Hello World");
			
			// read msg from i18n model
	         var oBundle = this.getView().getModel("i18n").getResourceBundle();
	         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
	         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
	         // show message
	         MessageToast.show(sMsg);
		},

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
 
		
	});
});