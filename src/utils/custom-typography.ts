const typography = function ({ theme }: { theme: any }) {
  return {
    '.text-header': {
      fontSize: theme('fontSize.base'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.6'),
      letterSpacing: theme('letterSpacing.widest'),
      color : theme('color.dark.200')
    },
    '.text-slider': {
      fontSize: theme('fontSize.base'), 
      fontWeight: theme('fontWeight.normal'),
      lineHeight: theme('lineHeight.6'),
      letterSpacing: theme('letterSpacing.widest'),
      color : theme('color.dark.200')
    },
    '.text-heading-slider': {
      fontSize: theme('fontSize.5xl'), 
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.10'),
      letterSpacing: theme('letterSpacing.widest'),
      color : theme('color.dark.200')
    },
    '.text-heading': {
      fontSize: theme('fontSize.4xl'), 
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.10'),
      letterSpacing: theme('letterSpacing.widest'),
      color : theme('color.dark.200')
    },
    '.text-heading-card': {
      fontSize: theme('fontSize.3xl'), 
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.10'),
      letterSpacing: theme('letterSpacing.widest'),
      color : theme('color.dark.200')
    },
    '.text-description': {
      fontSize: theme('fontSize.base'), 
      fontWeight: theme('fontWeight.normal'),
      lineHeight: theme('lineHeight.7'),
      color : theme('color.gray')
    },
    '.text-product-title': {
      fontSize: theme('fontSize.base'), 
      fontWeight: theme('fontWeight.light'),
      lineHeight: theme('lineHeight.7'),
      color : theme('color.dark.400')
    },
    '.text-price': {
      fontSize: theme('fontSize.base'), 
      fontWeight: theme('fontWeight.normal'),
      lineHeight: theme('lineHeight.7'),
      color : theme('color.dark.400')
    },
  }
}

module.exports = { newUtilities: typography }
