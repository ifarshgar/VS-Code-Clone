import { MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from 'redux-store/Hooks';
import { closeFile } from 'redux-store/thunks/close-file/closeFile';
import ExtensionIcon from './ExtensionIcon';
import { UserFile } from 'types/Files';

const CustomTabLabelContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'none',
});

const FileName = styled('div')(({ theme }) => ({
  padding: '0px 5px',
  color: theme.font,
}));

type CustomTabLabelProps = {
  activeFile: UserFile;
};

const CustomTabLabel = (props: CustomTabLabelProps) => {
  const dispatch = useAppDispatch();
  const {
    activeFile: { id, name, extension },
  } = props;

  const handler = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(closeFile(id));
  };

  return (
    <CustomTabLabelContainer>
      <ExtensionIcon extension={extension} />
      <FileName>{name}</FileName>
      <CloseIcon
        onClick={handler}
        sx={{ position: 'absolute', right: 0, color: (theme) => theme.font }}
      />
    </CustomTabLabelContainer>
  );
};

export default CustomTabLabel;
