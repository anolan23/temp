import { useState, DragEvent, useRef } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

interface UploadAreaProps {
  onFileProcessed: (files: FileList) => void;
}

export function UploadArea({ onFileProcessed }: UploadAreaProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDragLeave(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragOver(false);
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileProcessed(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  }

  function processFiles(files: FileList) {
    onFileProcessed(files);
  }

  function handleClick() {
    fileInputRef.current?.click();
  }

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={clsx(styles.root, {
        [styles['is-drag-over']]: isDragOver,
      })}
    >
      Drag and drop files here
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/jpeg, image/png, image/gif"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
    </div>
  );
}

export default UploadArea;
