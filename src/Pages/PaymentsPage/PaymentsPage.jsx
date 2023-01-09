import React , { useState } from 'react'
import jsonData from '../../API/paymentData.json'
import headerJsonData from '../../API/paymentHeaderData.json'
import PaymentsContextProvider from '../../contexts/paymentsContext';
import PaymentStatistics from '../../components/PaymentStatistics/PaymentStatistics';
import styles from './PaymentsPage.module.css'
import PaymentsTabLayout from '../../components/TabLyouts/PaymentsTabLayout/PaymentsTabLayout';
import Modal from '../../components/Modal/Modal';
import PaymentModal from '../../components/Modal/PaymentModal/PaymentModal';
const PaymentsPage = () => {
  const [showModal , setShowModal] = useState(false)
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
                                 initialHeaderData={headerJsonData}
                                 showModal={showModal} setShowModal={setShowModal}>
            <PaymentStatistics />
            <PaymentsTabLayout />
            {showModal &&
              <PaymentModal setshowModal={setShowModal}/> }
        </PaymentsContextProvider>
      </div>
    )
}

export default PaymentsPage