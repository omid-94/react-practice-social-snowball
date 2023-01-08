import React , { useState } from 'react'
import jsonData from '../../API/paymentData.json'
import headerJsonData from '../../API/paymentHeaderData.json'
import PaymentsContextProvider from '../../contexts/paymentsContext';
import PaymentStatistics from '../../components/PaymentStatistics/PaymentStatistics';
import styles from './PaymentsPage.module.css'
import PaymentsTabLayout from '../../components/TabLyouts/PaymentsTabLayout/PaymentsTabLayout';
import Modal from '../../components/Modal/Modal';
const PaymentsPage = () => {
  const [shouldShow , setShouldShow] = useState(false)
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
      <div className={styles.Container}>
        <h1 className={styles.Title}>Payouts Overview</h1>
        <PaymentsContextProvider initialData={prepareData(jsonData)} 
                                 initialHeaderData={headerJsonData}>
            <PaymentStatistics />
            <PaymentsTabLayout />
            <button onClick={() => setShouldShow(true)}>
              Show Modal
            </button>
            {shouldShow &&
                <Modal setShow={setShouldShow}>
                  <h1>omid is back...</h1>
                </Modal>
              }
        </PaymentsContextProvider>
      </div>
    )
}

export default PaymentsPage