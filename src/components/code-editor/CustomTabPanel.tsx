import { styled } from '@mui/material/styles';
import { UserFile } from 'types/Files';
import CustomEditor from './CustomEditor';

const CustomTabPanelContainer = styled('div')({ height: '100%' });

type CustomTabPanelProps = {
  activeFile: UserFile;
  editorActiveFileId: string | null;
};

const CustomTabPanel = (props: CustomTabPanelProps) => {
  const { activeFile, editorActiveFileId } = props;

  return (
    <CustomTabPanelContainer role="tabpanel" hidden={editorActiveFileId !== activeFile.id}>
      <CustomEditor activeFile={activeFile} />
    </CustomTabPanelContainer>
  );
};

export default CustomTabPanel;
