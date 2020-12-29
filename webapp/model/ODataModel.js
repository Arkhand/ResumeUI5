sap.ui.define(["sap/ui/base/Object"], function (BaseObject) {

  return BaseObject.extend("daniel.musial.resume.model.ODatatModel", {
    oModel: null,

    constructor: function (oComponentCtrl) {
      this.oModel = oComponentCtrl.getOwnerComponent().getModel();
    },


    callMySampleMethod: function () {
      return new Promise((resolve, reject) => {
        this.oModel.read("/myEntitySet", {
          success: (response) => {
            resolve(response);
          },
          error: (error) => {
            reject(error);
          }
        });
      });
    }

  });
});

