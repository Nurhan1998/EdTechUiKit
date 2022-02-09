export var getPageRange = function (totalSize, pageSize) {
    var pageCount = Math.floor(totalSize / pageSize);
    return new Array(pageCount).fill(null).map(function (_, idx) { return idx + 1; });
};
export var generatePaginationItems = function (pageRange, currentPage) {
    return pageRange.map(function (page) {
        var numPages = pageRange.length;
        var activePageItem = {
            value: page,
            isActive: true,
        };
        if (page === currentPage) {
            return activePageItem;
        }
        if ((page <= 4 && currentPage <= 4) ||
            (page >= numPages - 4 && currentPage >= numPages - 4)) {
            return activePageItem;
        }
        if (page === 1 || page === numPages) {
            return activePageItem;
        }
        if ([1, 2].includes(currentPage - page) ||
            [1, 2].includes(page - currentPage)) {
            return activePageItem;
        }
        return {
            value: '...',
            isActive: false,
        };
    });
};
//# sourceMappingURL=pagination.js.map