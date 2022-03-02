import { ITheme } from './types';
export declare const makeStyles: <Params = void, RuleNameSubsetReferencableInNestedSelectors extends string = never>(params?: {
    name?: string | Record<string, unknown> | undefined;
} | undefined) => <RuleName extends string>(cssObjectByRuleNameOrGetCssObjectByRuleName: Record<RuleName, import("tss-react").CSSObject> | ((theme: ITheme, params: Params, classes: Record<RuleNameSubsetReferencableInNestedSelectors, string>) => Record<RuleNameSubsetReferencableInNestedSelectors | RuleName, import("tss-react").CSSObject>)) => (params: Params) => {
    classes: Record<RuleName, string>;
    theme: ITheme;
    css: import("tss-react").Css;
    cx: import("tss-react").Cx;
};
export default makeStyles;
//# sourceMappingURL=index.d.ts.map