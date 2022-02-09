import { styled } from '@mui/material/styles'

const HeaderText = styled('div')(({ theme }) => ({
  padding: '10px',
  fontSize: '30px',
  color: theme.font,
}));

export default HeaderText;