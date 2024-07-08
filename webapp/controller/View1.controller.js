sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
      onInit: function () {},

      pressFunction: function (oEvent) {
        console.log(oEvent);
      },

      changeName: function (oEvent) {
        console.log("TEST");
        //this.getView().getModel().submitChanges();
      },
    });
  }
);
