import React ,{useContext} from 'react'
import styles from '../../styles/payments.module.css'
import { PaymentsContext } from '../../contexts/paymentsContext'

const TableHeader = () => {
    const checkboxKey = "isChecked";
    const {headerData , setAllSelected} = useContext(PaymentsContext)
    
    const checkAll = (e) => {
      setAllSelected(e.target.checked);
    }
    return (
      <thead className={styles.Header}>
          <tr>
          {headerData.map((headerItem , index) => {
              return <th key={index}>
                { 
                headerItem.key === checkboxKey
                ? <input type="checkbox" onClick={checkAll}/>
                : headerItem.title
                }
                </th>
          })}
          </tr>
    </thead>
    )
}

export default TableHeader