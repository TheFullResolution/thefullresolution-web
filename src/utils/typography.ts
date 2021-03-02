import Typography from 'typography';
import noriegaTheme from 'typography-theme-noriega';

export const typography = new Typography({
  ...noriegaTheme,
  baseFontSize: '16px',
  scaleRatio: 1.5,
});

export const getGoogleFontLink = (typography: Typography) => {
  let fontsStr = '';

  if (typography.options.googleFonts) {
    const fonts = typography.options.googleFonts.map((font) => {
      let str = '';
      str += font.name.split(' ').join('+');
      str += ':';
      str += font.styles.join(',');

      return str;
    });

    fontsStr = fonts.join('|');

    if (fontsStr) {
      return fontsStr;
    }
  }
  return null;
};
