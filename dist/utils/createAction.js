var createAction = function (actionType) {
    return function (payload) { return ({
        type: actionType,
        payload: payload,
    }); };
};
export default createAction;
//# sourceMappingURL=createAction.js.map