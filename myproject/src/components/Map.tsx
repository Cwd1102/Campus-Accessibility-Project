import React, { useState } from 'react';

const PdfUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      {/* Add a button here to trigger the upload to a server if needed */}
    </div>
  );
};

export default PdfUploader;