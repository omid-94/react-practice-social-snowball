import React , {useEffect , useState, useContext} from 'react'
import {PaymentsContext} from '../contexts/paymentsContext'
import Table from '../components/PaymentTable/Table'

const PaymentsPage = () => {
    const {headerData ,paymentData }= useContext(PaymentsContext)
    return (
        <div>
            { headerData && paymentData ?
                <Table/>
                : <h1>No Data Found</h1>
            }
        </div>
    )
}

export default PaymentsPage