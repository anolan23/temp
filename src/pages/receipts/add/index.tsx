import { useReceiptUploader } from '../../../hooks/use-receipt-uploader';
import { FilePreview } from './components/file-preview';
import UploadArea from './components/upload-area';
import styles from './index.module.scss';

interface AddReceiptPageProps {}

export function AddReceiptPage({ ...props }: AddReceiptPageProps) {
  const { uploadFiles, uploadAll } = useReceiptUploader();
  const handleFileDrop = function (files: FileList) {
    uploadAll(files);
  };
  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <h1>Add Receipt</h1>
        <div className={styles.content}>
          <UploadArea onFileProcessed={handleFileDrop} />
          {uploadFiles.map((uploadFile, index) => {
            return <FilePreview key={index} uploadFile={uploadFile} />;
          })}
        </div>
      </div>
    </div>
  );
}
