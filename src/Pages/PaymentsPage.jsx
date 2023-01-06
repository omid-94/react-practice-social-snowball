import React from 'react'
import jsonData from '../API/paymentData.json'
import headerJsonData from '../API/paymentHeaderData.json'
import PaymentsContextProvider from '../contexts/paymentsContext';
import PaymentTableContainer from '../components/PaymentTableContainer'
import PaymentNavBar from '../components/PaymentNavBar';

const PaymentsPage = () => {
    const addIscheckedToData = (data) => {
        return data.map(item => {
          item["isChecked"] = false;
          return item;
        })
      }
    const AddDateTimeToData = (data) => {
        return data.map(item => {
            item["latest_referral_DT"] = new Date(item.latest_referral);
            return item;
          })
    }
    const prepareData = () => {
        let tempData = addIscheckedToData(jsonData)
        tempData = AddDateTimeToData(tempData)
        return tempData;
    }
    return (
        <PaymentsContextProvider initialData={prepareData(jsonData)} 
                                 initialHeaderData={headerJsonData}>
            <PaymentNavBar />
            <PaymentTableContainer />
        </PaymentsContextProvider>
    )
}

export default PaymentsPage