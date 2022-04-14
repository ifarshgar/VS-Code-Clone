import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.background,
  background: theme.font,
  margin: '10px',
  padding: '6px 12px',
  ':hover': {
    color: theme.commonColors.white,
    background: theme.commonColors.cornflowerblue,
  },
}));

type MaterialButtonProps = {
  value?: string;
  children?: Node;
  onClick: () => void;
};

const MaterialButton = (props: MaterialButtonProps) => {
  return (
    <StyledButton onClick={props.onClick}>
      {props.children ?? props.value}
    </StyledButton>
  );
};

export default MaterialButton;
