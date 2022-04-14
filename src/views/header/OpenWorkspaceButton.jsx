import { useRef } from 'react';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from 'redux-store/Hooks';
import { readFiles } from 'redux-store/thunks/read-files/readFiles';
import MaterialButton from 'components/common/material-button/MaterialButton';

const InputFile = styled('input')({ display: 'none' });

const OpenWorkspaceButton = () => {
  const inputDirectory = useRef(null);
  const dispatch = useAppDispatch();

  const handler = () => {
    inputDirectory.current.click();
  };

  const onFilesUploaded = async () => {
    try {
      const files = inputDirectory.current.files;
      await dispatch(readFiles(files));
    } catch (error) {
      console.error('onFilesUploaded error', error);
    }
  };

  return (
    <div>
      <MaterialButton onClick={handler}>Open Workspace</MaterialButton>
      <InputFile
        type="file"
        ref={inputDirectory}
        directory=""
        webkitdirectory=""
        onChange={onFilesUploaded}
      />
    </div>
  );
};

export default OpenWorkspaceButton;
