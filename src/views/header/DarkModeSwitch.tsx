import { Switch } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'store/Hooks';
import { toggleDarkMode } from 'store/slices/dark-mode/DarkMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const DarkModeSwitch = () => {
  const darkModeActive = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();

  const handleChange = () => dispatch(toggleDarkMode());

  return (
    <>
      <DarkModeIcon />
      <Switch color="default" checked={darkModeActive} onChange={handleChange} />
    </>
  );
};

export default DarkModeSwitch;
