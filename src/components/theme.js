// default theme

import { rem } from 'polished';

const typography = {
  fontFamily: 'Roboto',
  size : {
    XL: rem('22px'),
    L: rem('20px'),
    M: rem('18px'),
    normal: rem('16px'),
    S: rem('14px'),
    XS: rem('12px'),
    XXS: rem('10px')
  }
}

const greys = [
  '#000000',
  '#FFFFFF'
];

const gap = {
  XXXL: rem('22px'),
  XXL: rem('18px'),
  XL: rem('12px'),
  L: rem('8px'),
  M: rem('6px'),
  S: rem('4px'),
  XS: rem('3px'),
  XXS: rem('1px')
  // XXXS: rem('1px'),
};

const theme = {
  gap,
  typography,
  greys
};

export default theme;
