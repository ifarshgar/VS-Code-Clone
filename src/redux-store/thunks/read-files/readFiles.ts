import { createAsyncThunk } from '@reduxjs/toolkit';
import { setFiles } from 'redux-store/slices/files/files';
import { readFile } from 'utils/read-file';

export const readFiles = createAsyncThunk(
  'files/readFiles',
  async (files: FileList, { dispatch }) => {
    const promises = [];

    for (const file of files) {
      promises.push(readFile(file));
    }

    const userFiles = await Promise.all(promises);
    dispatch(setFiles(userFiles));
  }
);
