import get from 'lodash/get';
import isBoolean from 'lodash/isBoolean';
var safeGet = function (object, path, defaultValue) {
    var result = get(object, path, defaultValue);
    if (isBoolean(result) || result == 0)
        return result;
    return result || defaultValue;
};
export default safeGet;
//# sourceMappingURL=safeGet.js.map