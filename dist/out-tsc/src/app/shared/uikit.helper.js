var UikitHelper = /** @class */ (function () {
    function UikitHelper() {
    }
    UikitHelper.alert = function (message) {
        UIkit.notification({
            message: message,
            pos: 'top-right',
            status: 'success'
        });
    };
    return UikitHelper;
}());
export { UikitHelper };
//# sourceMappingURL=uikit.helper.js.map