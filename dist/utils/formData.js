var buildFormData = function (values) {
    var formData = new FormData();
    for (var _i = 0, _a = Object.keys(values); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = values[key];
        if (value === undefined)
            continue;
        formData.append(key, value);
    }
    return formData;
};
export default buildFormData;
//# sourceMappingURL=formData.js.map