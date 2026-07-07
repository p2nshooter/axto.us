// Validated default palette (see dataviz skill references/palette.md).
// Sequential = one hue, light->dark, for magnitude/ranking charts.
// Categorical = fixed hue order, never cycled/reordered per chart.
export const SEQUENTIAL_BLUE = {
  100: '#cde2fb',
  200: '#9ec5f4',
  300: '#6da7ec',
  400: '#3987e5',
  500: '#256abf',
  600: '#184f95'
};

export const CATEGORICAL = [
  { name: 'blue', light: '#2a78d6', dark: '#3987e5' },
  { name: 'aqua', light: '#1baf7a', dark: '#199e70' },
  { name: 'yellow', light: '#eda100', dark: '#c98500' },
  { name: 'green', light: '#008300', dark: '#008300' },
  { name: 'violet', light: '#4a3aa7', dark: '#9085e9' },
  { name: 'red', light: '#e34948', dark: '#e66767' },
  { name: 'magenta', light: '#e87ba4', dark: '#d55181' },
  { name: 'orange', light: '#eb6834', dark: '#d95926' }
] as const;

export const TEXT_SECONDARY = '#64748b';
export const GRID_LINE = '#e2e8f0';
