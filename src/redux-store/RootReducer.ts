import { combineReducers } from 'redux';
import { darkModeReducer } from './slices/dark-mode/DarkMode';

const combinedReducers = combineReducers({
  darkMode: darkModeReducer,
});

export default combinedReducers;
