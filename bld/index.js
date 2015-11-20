(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var upperCaseRegex = /[A-Z]+(?=[A-Z][a-z]|$)|[A-Z]/g;
    function hyphenate(original, connector) {
        if (connector === void 0) { connector = '-'; }
        return original
            .split(/[^a-z\d]+/i)
            .map(function (part) { return part && part.replace(upperCaseRegex, function (text, index) {
            return (index ? connector : '') + text.toLowerCase();
        }); })
            .filter(function (part) { return !!part; })
            .join(connector);
    }
    exports.hyphenate = hyphenate;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = hyphenate;
});
//# sourceMappingURL=index.js.map