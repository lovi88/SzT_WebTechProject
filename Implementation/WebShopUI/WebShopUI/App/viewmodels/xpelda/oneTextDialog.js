define(['plugins/dialog'],function (dialog) {


    var OneTextDialog = function (message, title, options, textLabel) {
        this.message = message;
        this.title = title || OneTextDialog.defaultTitle;
        this.options = options || OneTextDialog.defaultOptions;
        this.textLabel = textLabel || "TesztElek";
        this.textData = ko.observable();
    };

    OneTextDialog.prototype.selectOption = function (dialogResult) {
        dialog.close(this, dialogResult);
    };


    return OneTextDialog;
});