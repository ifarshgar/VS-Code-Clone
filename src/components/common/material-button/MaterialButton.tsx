import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
  background: theme.commonColors.black,
  margin: '10px',
  padding: '6px 12px',
  ':hover': {
    color: theme.commonColors.white,
    background: theme.commonColors.cornflowerblue,
  },
}));


type MaterialButtonProps = {
  value: string;
  onClick: () => void;
};

const MaterialButton = (props: MaterialButtonProps) => {
  return <StyledButton onClick={props.onClick}>{props.value}</StyledButton>;
};

export default MaterialButton;
