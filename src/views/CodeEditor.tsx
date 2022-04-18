import { styled } from '@mui/material/styles';
import CodeEditorContainer from 'components/code-editor/CodeEditorContainer';
import FileViewer from 'components/code-editor/FileViewer';

const CodeEditorDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const FileViewerContainer = styled('div')({
  display: 'flex',
  flex: 1,
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '300px',
  overflow: 'auto',
  borderRight: '1px dashed black',
});

const CodeEditorContainerDiv = styled('div')({
  flex: 3,
  height: '100%',
});

const CodeEditor = () => {
  return (
    <CodeEditorDiv>
      <FileViewerContainer>
        <FileViewer />
      </FileViewerContainer>
      <CodeEditorContainerDiv>
        <CodeEditorContainer />
      </CodeEditorContainerDiv>
    </CodeEditorDiv>
  );
};

export default CodeEditor;
