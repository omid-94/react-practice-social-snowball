import React , {useContext} from 'react'
import { Sort_Type } from '../classes/enums'
import {PaymentsContext} from '../contexts/paymentsContext'
import Table from './PaymentTable/Table'

const PaymentTableContainer = () => {
    const {headerData ,paymentData }= useContext(PaymentsContext)
    return (
        <div>
            { headerData && paymentData ?
                <Table/>
                : <h2>No Data Found</h2>
            }
        </div>
    )
}

export default PaymentTableContainer