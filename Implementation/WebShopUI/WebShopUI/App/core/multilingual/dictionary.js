var Languages;
(function (Languages) {
    Languages[Languages["hu"] = 0] = "hu";
    Languages[Languages["en"] = 1] = "en";
})(Languages || (Languages = {}));

var Dictionary = (function () {
    function Dictionary(language) {
        if (typeof language === "undefined") { language = 1 /* en */; }
        this.lang = language;
    }
    /**
    * getLanguage
    */
    Dictionary.prototype.getLanguage = function () {
        return this.lang;
    };

    /**
    * setLanguage
    */
    Dictionary.prototype.setLanguage = function (language) {
        this.lang = language;
    };

    /**
    * getText
    */
    Dictionary.prototype.getText = function (key) {
        //TODO: Valós megoldás elkészítése
        return "key: " + key;
    };

    /**
    * TranslateText
    */
    Dictionary.prototype.TranslateText = function (text, from) {
        return "text: " + text;
    };
    return Dictionary;
})();

var dict = new Dictionary();