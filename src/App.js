import logo from './logo.svg';
import './App.css';
import PaymentsPage from './Pages/PaymentsPage';
import PaymentsContextProvider from './contexts/paymentsContext';
import jsonData from './API/paymentData.json'
import headerJsonData from './API/paymentHeaderData.json'
function App() {
  const addIscheckedToData = (data) => {
    return data.map(item => {
      item["isChecked"] = false;
      return item;
    })
  }
  return (
    <PaymentsContextProvider initialData={addIscheckedToData(jsonData)} 
                             initialHeaderData={headerJsonData}>
      <PaymentsPage />
    </PaymentsContextProvider>
  );
}

export default App;
