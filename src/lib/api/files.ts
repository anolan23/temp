import backend from '../../services/backend';

type UploadFileResult = {
  key: string;
};

export async function uploadFile(file: File) {
  const formData = new FormData();

  formData.append('file', file);

  const response = await backend.post<UploadFileResult>('/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}
