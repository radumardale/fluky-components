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

// https://coolors.co/000000-14213d-fca311-e5e5e5-ffffff
const colors = {
  black: '#000000',
  yankeesBlue: '#14213D',
  darkTangerine: '#FCA311',
  platinum: '#E5E5E5',
  white : '#FFFFFF'
};

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
