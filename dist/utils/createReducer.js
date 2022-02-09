import combineChanges from './combineChanges';
var applyHandler = function (handlers, action, state) {
    return handlers.hasOwnProperty(action.type)
        ? Array.isArray(handlers[action.type])
            ? combineChanges(handlers[action.type])(state, action)
            : handlers[action.type](state, action)
        : state;
};
var createReducer = function (initialState, handlers) {
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        return applyHandler(handlers, action, state);
    };
};
export default createReducer;
//# sourceMappingURL=createReducer.js.map