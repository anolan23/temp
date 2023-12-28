import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DashboardPage } from './pages/dashboard';
import HistoryPage from './pages/history';
import ItemsPage from './pages/items';
import { ListPage } from './pages/list';
import Statistics from './pages/statistics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="" element={<ItemsPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="history/:id" element={<ListPage />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// type ReceiptItem = {
//   item_name_raw: string;
//   generated_item_name: string;
//   category: string;
//   units: number;
//   total_price: number;
// };

// interface Result {
//   store_name: string;
//   receipt_items: Array<ReceiptItem>;
//   total: number;
// }

// function App() {
//   const [selectedFile, setSelectedFile] = useState<File>();
//   const [result, setResult] = useState<Result>();

//   const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
//     event
//   ) => {
//     const files = event.target.files;
//     if (files) {
//       setSelectedFile(files[0]);
//     }
//   };

//   const handleClick = async () => {
//     if (!selectedFile) return;
//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     try {
//       const response = await fetch('http://localhost:8080/process-receipt', {
//         method: 'POST',
//         body: formData,
//       });
//       const result = await response.json();
//       setResult(result);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleClick}>Submit</button>
//       <div>
//         {result?.receipt_items.map((item, index) => {
//           return (
//             <div key={index} className="item">
//               <strong>{item.generated_item_name}</strong>
//               <i>{item.category}</i>
//               <div>{item.total_price}</div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default App;
