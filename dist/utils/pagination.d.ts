export interface IPageItem {
    value: number | string;
    isActive: boolean;
}
export declare const getPageRange: (totalSize: number, pageSize: number) => Array<number>;
export declare const generatePaginationItems: (pageRange: Array<number>, currentPage: number) => Array<IPageItem>;
//# sourceMappingURL=pagination.d.ts.map