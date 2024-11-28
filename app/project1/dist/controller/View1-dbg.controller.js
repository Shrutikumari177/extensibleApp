sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
      "sap/m/MessageBox",
     
 
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
            const oViewModel = new sap.ui.model.json.JSONModel({
                voyageCode: "",
                voyageName: "",
                voyageType: "",
                vesselType: "",
                currency: "",
                fromPort: "",
                toPort: "",
                distanceBetweenPort: null,
                cargoSize: null
            });
            this.getView().setModel(oViewModel, "voyage");
        },
        onSave: function () {
            const oODataModel = this.getView().getModel(); 
            const oLocalData = this.getView().getModel("voyage").getData(); 
            const oListBinding = oODataModel.bindList("/Voyage"); 

           
            oListBinding.create(oLocalData);

           
            oODataModel.submitBatch("$auto")
                .then(() => {
                    sap.m.MessageBox.success("Voyage details saved successfully.");
                     
                })
                .catch((oError) => {
                    sap.m.MessageToast.show("Failed to save voyage details: " + oError.message);
                });
        }
      
        
       
        
        
    });
});