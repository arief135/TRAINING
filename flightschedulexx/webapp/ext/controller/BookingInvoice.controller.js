sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
    'use strict';

    return Controller.extend('mika.sap.flightschedulexx.ext.BookingInvoice', {
        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf mika.sap.flightschedulexx.ext.BookingInvoice
         */
        onInit: function () {
        },
        /**
         * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
         * (NOT before the first rendering! onInit() is used for that one!).
         * @memberOf mika.sap.flightschedulexx.ext.BookingInvoice
         */
        onBeforeRendering: function () {
        },
        /**
         * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
         * This hook is the same one that SAPUI5 controls get after being rendered.
         * @memberOf mika.sap.flightschedulexx.ext.BookingInvoice
         */
        onAfterRendering: function () {

            var path = this.getOwnerComponent().getBindingContext().sPath

            this._oModel = new sap.ui.model.json.JSONModel({
                Source: '/sap/opu/odata/sap/ZUI_FLIGHTSCHEDULE_XX_SRV' + path + '/$value',
                Title: "Booking Invoice",
                Height: "600px"
            });

            this.getView().setModel(this._oModel);

            // debugger
            // 
            // console.log("LOGGING" + path)
        },
        /**
         * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
         * @memberOf mika.sap.flightschedulexx.ext.BookingInvoice
         */
        //	onExit: function() {
        //
        //	}
    });
});
