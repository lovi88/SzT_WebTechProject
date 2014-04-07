define(['durandal/app', 'durandal/system'], function (app, sys) {
    sys.log("alma");
    var testCrumbs = [
            { name: "Home", isActive: false, link: "#" },
            { name: "TestLink", isActive: false, link: "#" },
            { name: "TestLast", isActive: true, link: "#" }
    ];
    
    return {
        breadcrumbs: ko.observableArray(testCrumbs),
        productIsLast: function (product) {
            
        },

        productTypeIsLast: function (ProductType) {

        }
    };
});