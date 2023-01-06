import React , {useContext} from 'react'
import {PaymentsContext} from '../../contexts/paymentsContext'
import StatisticsCard from '../cards/StatisticsCard/StatisticsCard'
import styles from './PaymentStatistics.module.css'

const PaymentStatistics = () => {
    const {getStatistics}= useContext(PaymentsContext)
    const statisticsData = getStatistics();
  return (
    <div className={styles.Container}>
        <StatisticsCard heading={"Total Paid Payouts"} 
                        amount={statisticsData.total_paid_layout} />
        <StatisticsCard heading={"Total Unpaid Payouts"} 
                        amount={statisticsData.total_unpaid_layout} />
        <StatisticsCard heading={"Total Ready Payouts"} 
                        amount={statisticsData.total_ready_layout} 
                        amountColor={"green"}
                        buttonName={"Pay All"}/>
    </div>
  )
}

export default PaymentStatistics