export interface IPalette {
  primary: string;
  secondary: string;
  lightGrey: string;
  white: string;
  black: string;
  secondaryBlack: string;
  alabaster: string;
  light: string;
  searchBackground: string;
  superLightGrey: string;
  blackSqueeze: string;
  dark: string;
  primaryBlue: string;
  darkGrey: string;
  activeSideBar: string;
  backgroundLight: string;
  primaryColor: string;
  secondaryColor: string;
  borderColor: string;
  textGreyPlaceholder: string;
  textColorGrey: string;
  textColorLightGrey: string;
}

export interface ISpacing {
  unit: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  circle: string;
  round: string;
}

export interface IBoxShadows {
  bsBoxShadow: string;
  bsBoxShadowHover: string;
  bsBoxShadowDark: string;
}

export interface IFontWeights {
  bold: number;
  semiBold: number;
}

export interface ITheme {
  palette: IPalette;
  spacing: ISpacing;
  mostFont: string;
  boxShadows: IBoxShadows
  fontWeights: IFontWeights
}
