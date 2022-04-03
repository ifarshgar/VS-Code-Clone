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

  it('should add a new file id when the action is addActiveFile', () => {
    const expectedState = {
      ...initialState,
      activeFilesIds: ['1'],
    };
    expect(filesReducer(initialState, addActiveFile('1'))).toEqual(expectedState);
  });

  it('should remove a file id when the action is removeActiveFile', () => {
    const currentState = {
      ...initialState,
      activeFilesIds: ['1'],
    };
    const expectedState = {
      ...currentState,
      activeFilesIds: [],
    };
    expect(filesReducer(currentState, removeActiveFile('1'))).toEqual(expectedState);
  });

  it('should set the editor active file when the action is setEditorActiveFile', () => {
    const expectedState = {
      ...initialState,
      editorActiveFileId: '1',
    };
    expect(filesReducer(initialState, setEditorActiveFile('1'))).toEqual(expectedState);
  });

  it('should set the editor active file to null when the action is setEditorActiveFile(null)', () => {
    const expectedState = {
      ...initialState,
      editorActiveFileId: null,
    };
    expect(filesReducer(initialState, setEditorActiveFile(null))).toEqual(expectedState);
  });

  it('should update the file code when the action is updateFileCode', () => {
    const payload = {
      fileId: '1',
      newCode: 'console.log("I am code")',
    };
    const currentState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          name: 'inde.js',
          relativePath: 'src/index.js',
          code: 'console.log("Testing")',
          extension: '.js',
        },
      ],
    };
    const expectedState = {
      ...currentState,
      userFiles: [
        {
          id: '1',
          name: 'inde.js',
          relativePath: 'src/index.js',
          code: 'console.log("I am code")',
          extension: '.js',
        },
      ],
    };
    expect(filesReducer(currentState, updateFileCode(payload))).toEqual(expectedState);
  });

  it('should not update the file code when file is not found and the action is updateFileCode', () => {
    const payload = {
      fileId: '2',
      newCode: 'console.log("I am code")',
    };
    const currentState = {
      ...initialState,
      userFiles: [
        {
          id: '1',
          name: 'inde.js',
          relativePath: 'src/index.js',
          code: 'console.log("Testing")',
          extension: '.js',
        },
      ],
    };
    const expectedState = currentState;
    expect(filesReducer(currentState, updateFileCode(payload))).toEqual(expectedState);
  });
});

