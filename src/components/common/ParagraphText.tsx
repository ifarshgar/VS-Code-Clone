import { styled } from '@mui/material/styles'

const ParagraphText = styled('div')(({ theme }) => ({
  padding: '5px',
  fontSize: '20px',
  color: theme.font,
}));

export default ParagraphText;