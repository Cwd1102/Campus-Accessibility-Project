// // import React, { useState } from 'react';
// // import { Document, Page, pdfjs } from 'react-pdf';
// // import 'react-pdf/dist/Page/AnnotationLayer.css';
// // import 'react-pdf/dist/Page/TextLayer.css';

// // pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// // const PdfViewer: React.FC = () => {
// //   const [numPages, setNumPages] = useState<number | null>(null);
// //   const [pageNumber, setPageNumber] = useState(1);
// //   const [file, setFile] = useState<string | null>(null);

// //   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
// //     setNumPages(numPages);
// //   };

// //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     if (event.target.files && event.target.files[0]) {
// //       const selectedFile = event.target.files[0];
// //       setFile(URL.createObjectURL(selectedFile));
// //     }
// //   };

// //   return (
// //     <div>
// //       <input type="file" accept=".pdf" onChange={handleFileChange} />
// //       {file && (
// //         <div>
// //           <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
// //             <Page pageNumber={pageNumber} />
// //           </Document>
// //           <p>
// //             Page {pageNumber} of {numPages}
// //           </p>
// //           <button onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}>Previous</button>
// //           <button onClick={() => setPageNumber(prev => Math.min(numPages || 1, prev + 1))}>Next</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default PdfViewer;

// import React, { useState, useEffect } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { Upload, X } from 'lucide-react';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// const PdfHomepage = () => {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState(null);
  
//   // Path to your default PDF - place your PDF in the public folder
//   const DEFAULT_PDF_PATH = 'C:\Users\Sarah\Campus-Accessibility-Project\Campus-Accessibility-Project\myproject\public\2024-ACCESSIBLE-ROUTES-MAP-2.pdf';

//   useEffect(() => {
//     // Automatically load the default PDF when component mounts
//     setFile(DEFAULT_PDF_PATH);
//   }, []);

//   const onDocumentLoadSuccess = () => {
//     setError(null);
//   };

//   const onDocumentLoadError = (error) => {
//     setError('Failed to load PDF. Please try again.');
//     console.error('PDF Load Error:', error);
//   };

//   const handleFileChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       const selectedFile = event.target.files[0];
      
//       // Validate file type
//       if (selectedFile.type !== 'application/pdf') {
//         setError('Please upload a PDF file');
//         return;
//       }
      
//       // Validate file size (e.g., max 10MB)
//       if (selectedFile.size > 10 * 1024 * 1024) {
//         setError('File size must be less than 10MB');
//         return;
//       }
      
//       setFile(URL.createObjectURL(selectedFile));
//       setError(null);
//     }
//   };

//   const handleRemove = () => {
//     if (file && file.startsWith('blob:')) {
//       URL.revokeObjectURL(file);
//     }
//     setFile(null);
//     setError(null);
//   };

//   const handleRestore = () => {
//     setFile(DEFAULT_PDF_PATH);
//     setError(null);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
//       <div className="max-w-4xl mx-auto">
//         <header className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">PDF Viewer</h1>
//           <p className="text-gray-600">View and upload PDF documents</p>
//         </header>

//         {!file ? (
//           <div className="bg-white rounded-lg shadow-lg p-12">
//             <label 
//               htmlFor="pdf-upload" 
//               className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
//             >
//               <Upload className="w-16 h-16 text-gray-400 mb-4" />
//               <span className="text-lg font-medium text-gray-700 mb-2">
//                 Click to upload PDF
//               </span>
//               <span className="text-sm text-gray-500">
//                 Maximum file size: 10MB
//               </span>
//               <input
//                 id="pdf-upload"
//                 type="file"
//                 accept=".pdf,application/pdf"
//                 onChange={handleFileChange}
//                 className="hidden"
//               />
//             </label>
            
//             <div className="mt-4 text-center">
//               <button
//                 onClick={handleRestore}
//                 className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
//               >
//                 Restore Default Document
//               </button>
//             </div>
            
//             {error && (
//               <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
//                 {error}
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold text-gray-800">Your Document</h2>
//               <div className="flex gap-2">
//                 <label
//                   htmlFor="pdf-upload-replace"
//                   className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors cursor-pointer"
//                 >
//                   <Upload className="w-4 h-4" />
//                   Replace
//                   <input
//                     id="pdf-upload-replace"
//                     type="file"
//                     accept=".pdf,application/pdf"
//                     onChange={handleFileChange}
//                     className="hidden"
//                   />
//                 </label>
//                 <button
//                   onClick={handleRemove}
//                   className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//                 >
//                   <X className="w-4 h-4" />
//                   Remove
//                 </button>
//               </div>
//             </div>
            
//             <div className="flex justify-center border border-gray-200 rounded-lg p-4 bg-gray-50">
//               <Document
//                 file={file}
//                 onLoadSuccess={onDocumentLoadSuccess}
//                 onLoadError={onDocumentLoadError}
//                 loading={
//                   <div className="flex items-center justify-center p-12">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
//                   </div>
//                 }
//               >
//                 <Page 
//                   pageNumber={1} 
//                   renderTextLayer={true}
//                   renderAnnotationLayer={true}
//                   className="shadow-lg"
//                 />
//               </Document>
//             </div>
            
//             {error && (
//               <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
//                 {error}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PdfHomepage;