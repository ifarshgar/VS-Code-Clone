import { createSelector } from 'reselect';
import { FilesState } from 'redux-store/slices/files/files';
import { RootState } from 'types/Store';
import { UserFile } from 'types/Files';

type UserFilesMap = { [key: string]: UserFile };

const selectActiveFiles = (files: FilesState) => {
  const { userFiles, activeFilesIds } = files;
  const userFilesMap = userFiles.reduce((result, activeFile) => {
    result[activeFile.id] = activeFile;
    return result;
  }, {} as UserFilesMap);
  return activeFilesIds.map((activeFileId) => userFilesMap[activeFileId]);
};

export default createSelector((state: RootState) => state.files, selectActiveFiles);
