import {
  initialState,
  setFiles,
  addActiveFile,
  removeActiveFile,
  setEditorActiveFile,
  updateFileCode,
  filesReducer,
} from './files';

describe('files slice', () => {
  it('should set user files when the action is setFiles', () => {
    const userFiles = [
      {
        id: '1',
        name: 'inde.js',
        relativePath: 'src/index.js',
        code: 'console.log("Testing")',
        extension: '.js',
      },
    ];
    const expectedState = {
      ...initialState,
      userFiles,
      activeFilesIds: [],
    };
    expect(filesReducer(initialState, setFiles(userFiles))).toEqual(expectedState);
  });
});
