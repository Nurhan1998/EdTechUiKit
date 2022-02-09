export default (function (changes) {
    return function (curState, action) {
        return changes.reduce(function (state, reducer) { return reducer(state, action); }, curState);
    };
});
//# sourceMappingURL=combineChanges.js.map