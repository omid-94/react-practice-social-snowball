import React , {useContext} from 'react'
import { Sort_Type } from '../classes/enums'
import {PaymentsContext} from '../contexts/paymentsContext'

const PaymentNavBar = () => {
    const {sortDataByDate , sortByRevenue , 
        filterByAffiliateName ,sortByAffiliateName, getStatistics}= useContext(PaymentsContext)
    const statisticsData = getStatistics();
    return (
        <div>
            <h2>
                {statisticsData.total_paid_layout} <br/>
                {statisticsData.total_unpaid_layout} <br/>
                {statisticsData.total_ready_layout} <br/>
                {statisticsData.pending_payouts} <br/>
            </h2>
            <button onClick={() => sortDataByDate(Sort_Type.DESC)}>
                Order By Date DESC
            </button>
            <button onClick={() => sortDataByDate(Sort_Type.ASC)}>
                Order By Date ASC
            </button>
            <button onClick={() => sortByRevenue(Sort_Type.DESC)}>
                Order By Revenue DESC
            </button>
            <button onClick={() => sortByRevenue(Sort_Type.ASC)}>
                Order By Revenue ASC
            </button>
            <button onClick={() => sortByAffiliateName(Sort_Type.ASC)}>
                Order By Affilate Name ASC
            </button>
            <input type="text" 
                onChange={(e) => filterByAffiliateName(e.target.value)}/>
        </div>
    )
}

export default PaymentNavBar