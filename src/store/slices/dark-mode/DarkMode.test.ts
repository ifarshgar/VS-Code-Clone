import { darkModeReducer, toggleDarkMode } from './DarkMode';

describe('Dark mode reducer', () => {
  it('Should enable the dark mode if it is disabled', () => {
    expect(darkModeReducer(false, toggleDarkMode)).toEqual(true);
  });
  it('Should disable the dark mode if it is enabled', () => {
    expect(darkModeReducer(true, toggleDarkMode)).toEqual(false);
  });
});
