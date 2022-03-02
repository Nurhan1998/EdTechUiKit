import { createMakeStyles } from 'tss-react';
var useTheme = function () { return ({
    palette: {
        primary: '#49A057',
        secondary: '#307AF6',
        lightGrey: '#b8c3d5',
        light: '#f2f2f2',
        white: '#ffffff',
        black: '#000000',
        secondaryBlack: '#232323',
        alabaster: '#fafafa',
        searchBackground: '#E5E5E5',
        superLightGrey: '#f3f3f3',
        blackSqueeze: '#f9fbfd',
        dark: '#1c2d41',
        primaryBlue: '#307AF6',
        darkGrey: '#A5A5A5',
        activeSideBar: '#EFEFEF',
        backgroundLight: '#F9F9F9',
        primaryColor: '#22ca80',
        secondaryColor: '#7c8798',
        borderColor: '#edf2f9',
        textGreyPlaceholder: '#D2D2D2',
        textColorGrey: '#818181',
        textColorLightGrey: '#85888B'
    },
    spacing: {
        sm: '4px',
        unit: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        circle: '50%',
        round: '55px'
    },
    mostFont: 'Rubik',
    boxShadows: {
        bsBoxShadow: '0px 2px 17px rgba(120, 120, 120, 0.1)',
        bsBoxShadowHover: '0px 2px 10px rgba(69, 71, 99, 0.25)',
        bsBoxShadowDark: '0px 4px 10px rgba(69, 71, 99, 0.6)',
    },
    fontWeights: {
        bold: 700,
        semiBold: 500,
    }
}); };
export var makeStyles = createMakeStyles({ useTheme: useTheme }).makeStyles;
export default makeStyles;
//# sourceMappingURL=index.js.map