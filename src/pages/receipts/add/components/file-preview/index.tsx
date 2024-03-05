import { UploadFile } from '../../../../../lib/types';
import styles from './index.module.scss';

interface FilePreviewProps {
  uploadFile: UploadFile;
}

export function FilePreview({ uploadFile, ...props }: FilePreviewProps) {
  const { file, status } = uploadFile;
  return (
    <div className={styles.root}>
      <strong>{file.name}</strong>
      <div>
        <div>{file.size}</div>
        <div>{status}</div>
      </div>
    </div>
  );
}
