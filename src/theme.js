/** Default theme values */
import { rem } from 'polished';

const typo = {
  family: 'Source Sans Pro',
  lineHeight: rem('24px'),
  size: {
    normal   : rem('16px'),
    head1: rem('24px'),
    head2    : rem('21px'),
    head3    : rem('18px'),
    head4    : rem('16px'),
    small    : rem('14px'),
    smaller  : rem('12px'),
    smallest: rem('10px')
  }
}

// const gap = {
//   XXXXL : rem('64px'),
//   XXXL : rem('30px'),
//   XXL : rem('28px'),
//   XL : rem('24px'),
//   L : rem('20px'),
//   M : rem('16px'),
//   S : rem('12px'),
//   XS : rem('8px'),
//   XXS : rem('6px'),
//   XXXS : rem('4px'),
//   XXXXS : rem('2px')
// }

const gap = {
  XXXXL : rem('24px'),
  XXXL : rem('20px'),
  XXL : rem('18px'),
  XL : rem('16px'),
  L : rem('14px'),
  M : rem('12px'),
  S : rem('8px'),
  XS : rem('6px'),
  XXS : rem('4px'),
  XXXS : rem('2px'),
  XXXXS : rem('1px')
}

const greys = [
  '#FFFFFF',
  '#FAFAFA',
  '#F5F5F5',
  '#EEEEEE',
  '#E0E0E0',
  '#BDBDBD',
  '#9E9E9E',
  '#757575',
  '#616161',
  '#424242',
  '#212121',
];

const colors = {
  primaryColorDark: '#303F9F',
  primaryColor: '#3F51B5',
  primaryColorLight: '#C5CAE9',
  primaryColorText: '#FFFFFF',
  accentColor: '#FF9800',
  primaryTextColor: '#212121',
  secondaryTextColor: '#757575',
  dividerColor: '#BDBDBD',
};

const theme = {
  typo,
  gap,
  colors,
  greys
};

export default theme;
