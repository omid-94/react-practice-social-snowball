import React , {useContext} from 'react'
import { Sort_Type } from '../../classes/enums'
import {PaymentsContext} from '../../contexts/paymentsContext'
import Table from '../PaymentTable/Table'
import TableFilters from '../TableFilters/TableFilters'
import styles from './PaymentTableContainer.module.css'

const PaymentTableContainer = () => {
    const {headerData ,paymentData }= useContext(PaymentsContext)
    return (
        <div className={styles.Container}> 
            <TableFilters />
            <div className={styles.TableContainer}>
            { headerData && paymentData ?
                <Table/>
                : <h2>No Data Found</h2>
            }
            </div>
        </div>
    )
}

export default PaymentTableContainer