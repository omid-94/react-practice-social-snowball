import React , {useContext} from 'react'
import styles from '../../styles/payments.module.css'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import { PaymentsContext } from '../../contexts/paymentsContext'

const Table = () => {
  const {paymentData} = useContext(PaymentsContext)   
  return (
    <div>
        <table className={styles.Table}>
          <TableHeader />
          <TableBody data={paymentData}/>
        </table>
    </div>
  )
}

export default Table