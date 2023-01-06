import React , {useContext} from 'react'
import { Sort_Type } from '../classes/enums'
import {PaymentsContext} from '../contexts/paymentsContext'

const PaymentNavBar = () => {
    const {sortDataByDate , sortByRevenue}= useContext(PaymentsContext)
    return (
        <div>
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
        </div>
    )
}

export default PaymentNavBar